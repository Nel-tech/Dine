import { Badge } from "../../../../../Components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table";
import { useEffect, useState } from 'react';
import { db } from '../../../../../Services/Auth/config';
import {doc, getDoc, collection, getDocs } from 'firebase/firestore';

type Payment = {
  id: string;
  email: string;
  reference: string;
  customerName: string;
  status: string;
  amount: number;
  total: number;
  timestamp?: string;
};

export default function RecentPaymentsTable() {
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
  amount: paymentData.amount || 0,
  total: paymentData.total || 0, // Ensure total is included
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

    const interval = setInterval(fetchPayments, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead> ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.slice(0, 5).map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id.substring(0,6)}</TableCell>
            <TableCell>{payment.customerName}</TableCell>
            <TableCell>
              <Badge variant={payment.status === 'Successful' ? 'default' : 'outline'}>
                {payment.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              #{payment.amount.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
