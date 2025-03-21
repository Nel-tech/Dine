import { ArrowUpDown } from "lucide-react";
import { Badge } from "../../../../../Components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table";
import { db } from '../../../../../Services/Auth/config';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

type Payment = {
  amount: string;
  id: string;
  email: string;
  reference: string;
  customerName: string;
  status: string;
  timestamp?: string;
};

export default function PaymentsTable() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [, setLoading] = useState(false);

 const fetchPayments = async () => {
  try {
    setLoading(true);
    const paymentCollection = collection(db, 'payments');
    const paymentSnapshot = await getDocs(paymentCollection);

    const allPayments = await Promise.all(paymentSnapshot.docs.map(async (paymentDoc) => {
      const paymentData = paymentDoc.data();
      let customerName = "Unknown"; // Default value

      if (paymentData.userId) {
        try {
          console.log(`Fetching reservation for userId: ${paymentData.userId}`);

          // Correctly referencing the document inside reservations
          const reservationRef = doc(db, "users", paymentData.userId, "reservations", paymentData.userId);
          const reservationSnap = await getDoc(reservationRef);

          if (reservationSnap.exists()) {
            const reservationData = reservationSnap.data();
            console.log("Fetched reservation data:", reservationData);

            // Use 'name' field if it exists
            if (reservationData.name) {
              customerName = reservationData.name;
            } else {
              console.warn("No 'name' field found in reservation document. Available fields:", reservationData);
            }
          } else {
            console.warn("Reservation document not found:", `users/${paymentData.userId}/reservations/${paymentData.userId}`);
          }
        } catch (error) {
          console.error("Error fetching reservation:", error);
        }
      }

      return {
        id: paymentDoc.id,
        email: paymentData.email || "Unknown",
        status: paymentData.status || "Unknown",
        amount: paymentData.amount || "0",
        customerName: customerName, 
        reference: paymentData.reference || "N/A",
        timestamp: paymentData.timestamp?.seconds
          ? new Date(paymentData.timestamp.seconds * 1000).toLocaleDateString("en-US")
          : "N/A",
      };
    }));

    setPayments(allPayments);
  } catch (error) {
    console.error("Error fetching payments:", error);
  } finally {
    setLoading(false);
  }
};



  useEffect(() => {
    fetchPayments();

    // Auto-refresh every 10 seconds
    const interval = setInterval(() => {
      fetchPayments();
    }, 10000);

    // Cleanup function to stop the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <div className="flex items-center">
               ID
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Email</TableHead>
         
          <TableHead>
            <div className="flex items-center">
              Date
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
         
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">
              {payment.reference.substring(0, 8)}
            </TableCell>
            <TableCell>{payment.customerName}</TableCell>
            <TableCell>{payment.email}</TableCell>
            <TableCell>{payment.timestamp}</TableCell>
            <TableCell>
              <Badge
                variant={
                  payment.status === 'Successful'
                    ? 'default'
                    : 'outline'
                }
              >
                {payment.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">#{payment.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
