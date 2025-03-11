import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { Download, CheckCircle } from "lucide-react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Auth/config";
import { useAuth } from "../../Context/AuthContext";
import html2canvas from "html2canvas"; // Import html2canvas

interface PaymentData {
  userId: string;
  email: string;
  amount: number;
  reference: string;
  status: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timestamp: any;
}

export default function Receipt() {
  const { paymentId } = useParams();
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

 useEffect(() => {
  const fetchPaymentData = async () => {
    if (!paymentId || !user) {  // Ensure user is logged in
      console.error("No payment ID provided or user not authenticated");
      setLoading(false);
      return;
    }

    try {
      const paymentRef = doc(db, "payments", paymentId);
      const paymentSnap = await getDoc(paymentRef);

      if (paymentSnap.exists()) {
        const data = paymentSnap.data() as PaymentData;
        
        // Check if the logged-in user is the owner of the receipt
        if (data.userId !== user.uid) {
          console.error("Unauthorized access: This receipt does not belong to you.");
          setPaymentData(null);
        } else {
          setPaymentData(data);
          
          // Fetch user's cart items
          const cartRef = collection(db, "users", data.userId, "cart");
          const cartSnap = await getDocs(cartRef);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const items: any[] = [];
          cartSnap.forEach((doc) => items.push(doc.data()));

          setCartItems(items);
        }
      } else {
        console.error("No payment found with this ID:", paymentId);
      }
    } catch (error) {
      console.error("Error fetching payment data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchPaymentData();
}, [paymentId, user]);  // Depend on user


  // Function to capture receipt as an image
  const downloadReceiptAsImage = async () => {
    const receiptElement = document.getElementById("receipt-content");
    if (!receiptElement) return;

    try {
      const canvas = await html2canvas(receiptElement);
      const image = canvas.toDataURL("image/png"); // Convert to PNG

      const link = document.createElement("a");
      link.href = image;
      link.download = `Receipt-${paymentData?.reference}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error capturing receipt as image:", error);
    }
  };

  if (loading) {
    return <p className="text-center py-8">Loading receipt...</p>;
  }

  if (!paymentData) {
    return <p className="text-center py-8">No receipt found. Please check your payment reference.</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#AD343E]">Receipt</h1>
          <Button onClick={downloadReceiptAsImage} className="bg-[#AD343E] hover:bg-[#8A2A32] text-white">
            <Download className="mr-2 h-4 w-4" />
            Download as Image
          </Button>
        </div>

        {/* Wrap receipt inside a div with an ID for screenshot */}
        <div id="receipt-content" className="p-4 bg-white shadow-lg rounded-md">
          <Card className="border-[#AD343E]/20">
            <CardHeader className="pb-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#AD343E]">Receipt #{paymentData.reference}</h2>
                  <p className="text-sm text-gray-500">
                    Date: {paymentData.timestamp?.toDate()?.toLocaleDateString() || "N/A"}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-500">Paid</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Customer</h3>
                  <p className="text-sm text-gray-500">{paymentData.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                  <p className="font-medium">Paystack</p>
                </div>
              </div>
              <Separator />

              {cartItems.length > 0 ? (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Items</h3>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.Name} className="flex justify-between">
                        <div>
                          <p className="font-medium">{item.Name}</p>
                        </div>
                        <p className="font-medium">₦{item.BasePrice.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No items found</p>
              )}

              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between font-bold">
                  <p className="text-[#AD343E]">Total</p>
                  <p className="text-[#AD343E]">₦{paymentData.amount.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col items-start pt-0">
              <p className="text-sm text-gray-500 mt-4">
                Thank you for your purchase! If you have any questions, please contact support.
              </p>
            </CardFooter>
          </Card>
        </div>

        <Button onClick={() => window.location.href = "/"} className="mt-2 bg-[#AD343E] hover:bg-[#8A2A32] text-white">
          Back to Homepage
        </Button>
      </div>
    </div>
  );
}
