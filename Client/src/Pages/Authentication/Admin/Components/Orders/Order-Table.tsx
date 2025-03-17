import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../../../Services/Auth/config';
import { Badge } from "../../../../../Components/ui/badge"
// import { MoreVertical } from 'lucide-react';
// import { Button } from "../../../../../Components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../../../../../Components/ui/dropdown-menu"
type Order = {
  id: string;
  customerName: string;
  status: string;
  total: number;
  items: { name: string; price: number }[];
  date?: string;
  people?: number;
};

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [, setLoading] = useState(false);

 const fetchOrdersAndReservations = async () => {
  try {
    setLoading(true);

    // Step 1: Get all users
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);

    const userPromises = usersSnapshot.docs.map(async (userDoc) => {
      const userId = userDoc.id;

      // Fetch cart and reservations in parallel
      const cartCollection = collection(db, `users/${userId}/cart`);
      const reservationsCollection = collection(db, `users/${userId}/reservations`);

      const [cartSnapshot, reservationsSnapshot] = await Promise.all([
        getDocs(cartCollection),
        getDocs(reservationsCollection),
      ]);

      const items: { name: string; price: number }[] = [];
      let total = 0;

      cartSnapshot.forEach((itemDoc) => {
        const itemData = itemDoc.data();
        items.push({
          name: itemData.Name, 
          price: itemData.BasePrice || 0,
        });
        total += itemData.BasePrice || 0;
      });

      const orders: Order[] = [];

      if (!reservationsSnapshot.empty) {
        reservationsSnapshot.forEach((reservationDoc) => {
          const reservationData = reservationDoc.data();
          orders.push({
            id: reservationDoc.id,
            customerName: reservationData.name || 'Unknown',
            items: [...items], 
            date: reservationData.date || 'N/A',
            people: reservationData.people || 1,
            total: total,
            status: 'success',
          });
        });
      } else if (items.length > 0) {
        orders.push({
          id: `${userId}-cart`, 
          customerName: 'Unknown',
          items: [...items],
          total: total,
          status: 'success',
        });
      }

      return orders;
    });

    // Wait for all users' orders to be fetched
    const allOrdersArray = await Promise.all(userPromises);
    const allOrders = allOrdersArray.flat();

    setOrders(allOrders);
  } catch (error) {
    console.error('Error fetching orders and reservations:', error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    // Initial fetch
    fetchOrdersAndReservations();

    // Auto-refresh every 10 seconds
    const interval = setInterval(() => {
      fetchOrdersAndReservations();
    }, 10000); // 10 seconds

    // Cleanup function to stop the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <div className="flex items-center">
              Order ID
             
            </div>
          </TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>
            <div className="flex items-center">
              Date
             
            </div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id.substring(0,8)}</TableCell>
            <TableCell>{order.customerName}</TableCell> {/* Fixed: Changed from `customer` to `customerName` */}
            <TableCell>
              <div className="flex flex-col">
                {order.items.map((item, index) => (
                  <span key={index} className="text-sm:">
                    {item.name} {/* Fixed: Now displays item names correctly */}
                    {index < order.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <Badge variant={order.status === 'Completed' ? 'default' : 'outline'}>
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">#{order.total.toFixed(2)}</TableCell>
            <TableCell className="text-right">
              
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
