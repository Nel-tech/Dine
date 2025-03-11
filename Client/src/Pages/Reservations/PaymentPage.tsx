import React, { useState, useEffect } from "react"; 
import PaystackPayment from "../../Components/Payments";
import { useNavigate } from "react-router-dom";
import { getCartItems } from "../../Services/Cart/CartServices";
import NavForm from "../../Components/NavForm";
import BaseFooter from "../../Components/BaseFooter";
import { useAuth } from '../../Context/AuthContext';

const PaymentPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return; // Ensure user is defined before proceeding
    setEmail(user.email || ""); // Update email from authenticated user

    const fetchCartItems = async () => {
      try {
        const items = await getCartItems(user.uid);
        const totalAmount = items.reduce((total, item) => total + item.BasePrice, 0);
        setAmount(totalAmount);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (user.uid) {
      fetchCartItems();
    }
  }, [user]); // Depend on `user` instead of `user.uid`

  const handlePaymentSuccess = (paymentRef: string) => {
    navigate(`/receipt/${paymentRef}`);
  };

  return (
    <section className="bg-gray-100 min-h-screen">
      <NavForm />
      <div className="max-w-3xl mx-auto my-8 p-8 rounded-lg shadow-lg bg-white border border-gray-300">
        <h2 className="text-3xl font-bold text-[#AD343E] text-center mb-6">Payment</h2>

        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h3>
          <p className="text-lg text-gray-600">
            Total Amount: <span className="font-medium text-gray-900">₦{amount}</span>
          </p>
          <p className="text-lg text-gray-600">
            Email: <span className="font-medium text-gray-900">{email || "No email available"}</span>
          </p>
        </div>

        <div className="flex justify-center items-center">
          {user && user.uid ? (
            <PaystackPayment 
              amount={amount} 
              email={email} 
              userId={user.uid}
              onSuccess={handlePaymentSuccess} 
            />
          ) : (
            <p className="text-lg text-gray-600">Please log in to continue.</p>
          )}
        </div>
      </div>
      <BaseFooter />
    </section>
  );
};

export default PaymentPage;
