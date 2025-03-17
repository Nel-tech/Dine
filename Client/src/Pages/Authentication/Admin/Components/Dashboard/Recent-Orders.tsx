import { collection, getDocs } from 'firebase/firestore';
import { Badge } from "../../../../../Components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table";
import { useEffect, useState } from 'react';
import { db } from '../../../../../Services/Auth/config';

type Order = {
  id: string;
  customerName: string;
  status: string;
  total: number;
  items: { name: string; price: number }[];
  date?: string;
  people?: number;
};

export default function RecentOrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [, setLoading] = useState(false);

  const fetchOrdersAndReservations = async () => {
  try {
    setLoading(true);
    const usersSnapshot = await getDocs(collection(db, 'users'));
    const allOrders: Order[] = [];

    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id;
      const cartSnapshot = await getDocs(collection(db, `users/${userId}/cart`));
      const reservationsSnapshot = await getDocs(collection(db, `users/${userId}/reservations`));

      const items: { name: string; price: number }[] = [];
      let total = 0;

      cartSnapshot.forEach((itemDoc) => {
        const itemData = itemDoc.data();
        items.push({ name: itemData.Name, price: itemData.BasePrice || 0 });
        total += itemData.BasePrice || 0;
      });

      reservationsSnapshot.forEach((reservationDoc) => {
        const reservationData = reservationDoc.data();
        allOrders.push({
          id: reservationDoc.id,
          customerName: reservationData.name || 'Unknown',
          items: [...items],
          date: reservationData.date || 'N/A',
          people: reservationData.people || 1,
          total,
          status: 'success'
        });
      });

      if (items.length > 0 && reservationsSnapshot.empty) {
        allOrders.push({
          id: `${userId}-cart`,
          customerName: 'Unknown',
          items: [...items],
          total,
          status: 'Pending',
        });
      }
    }

    setOrders(allOrders);
  } catch (error) {
    console.error('Error fetching orders and reservations:', error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
  fetchOrdersAndReservations();
    const interval = setInterval(fetchOrdersAndReservations, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.slice(0, 5).map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id.substring(0, 6)}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>
              <Badge variant={order.status === "Completed" ? "default" : "outline"}>
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">#{order.total.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
