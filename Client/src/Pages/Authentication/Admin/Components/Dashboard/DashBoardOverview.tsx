import { CreditCard, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../../Components/ui/card"
import StatsCard from "./Stats-Card"
import RecentOrdersTable from "./Recent-Orders"
import RecentPaymentsTable from "./Recents-Payments"
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../Services/Auth/config';

export default function DashboardOverview() {

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  
   useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const paymentsCollection = collection(db, 'payments');
        const paymentsSnapshot = await getDocs(paymentsCollection);

        let total = 0;
        paymentsSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.amount) {
            total += Number(data.amount);
          }
        });

        setTotalAmount(total);
      } catch (error) {
        console.error('Error fetching total payments:', error);
      }
    };

    const fetchTotalCustomers = async () => {
      try {
        const customerCollection = collection(db, 'users');
        const customerSnapshot = await getDocs(customerCollection);

        const total = customerSnapshot.size; // Get the number of users
        setTotalCustomers(total);
      } catch (error) {
        console.error('Error fetching total customers:', error);
      }
    };
    fetchTotalAmount();
    fetchTotalCustomers();
  }, []);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#AD343E]">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, Admin User</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
        value={totalAmount}
          description="+15.3% from last month"
          icon={<CreditCard className="h-4 w-4 text-gray-500" />}
        />
        <StatsCard
          title="Customers"
          value={totalCustomers}
          description="+18.2% from last month"
          icon={<Users className="h-4 w-4 text-gray-500" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest 5 orders placed on your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentOrdersTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Latest 5 payments received</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentPaymentsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}