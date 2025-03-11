import React from "react";
import { PaystackButton } from "react-paystack";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../Services/Auth/config";

interface PaystackProps {
  amount: number;
  email: string;
  userId: string;
  onSuccess?: (paymentRef: string) => void;  // Pass paymentRef
  onClose?: () => void;
}

const PaystackPayment: React.FC<PaystackProps> = ({ amount, email, userId, onSuccess, onClose }) => {
  const publicKey = import.meta.env.VITE_PUBLIC_PAYSTACK_PUBLIC_KEY as string;
  const paystackAmount = amount * 100;

  const handleSuccess = async (response: any) => {
    console.log("Payment successful:", response);
    
    try {
      const paymentRef = response.reference;
      const paymentDoc = doc(db, "payments", paymentRef);
      
      await setDoc(paymentDoc, {
        userId,
        email,
        amount,
        reference: paymentRef,
        status: "success",
        timestamp: Timestamp.now(),
      });

      alert("Payment Successful!");

      // Pass paymentRef to parent
      if (onSuccess) {
        onSuccess(paymentRef);
      }
    } catch (error) {
      console.error("Error saving payment:", error);
    }
  };

  const handleClose = () => {
    console.log("Transaction closed.");
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="paystack-button-container">
      <PaystackButton
        email={email}
        amount={paystackAmount}
        metadata={{ custom_fields: [{ display_name: "User ID", variable_name: "userId", value: userId }] }}
        publicKey={publicKey}
        text="Pay Now"
        onSuccess={handleSuccess}
        onClose={handleClose}
        className="px-8 py-3 bg-[#AD343E] text-white text-lg font-semibold rounded-lg hover:bg-[#9A2D34] transition-all duration-200"
      />
    </div>
  );
};

export default PaystackPayment;
