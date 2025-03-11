import { CreditCard, ShoppingBag, Utensils, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../../Components/ui/card"
import StatsCard from "./Stats-Card"
import RecentOrdersTable from "../Dashboard/Recent-Orders"
import RecentPaymentsTable from "../Dashboard/RecentPayments"

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#AD343E]">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, Admin User</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$12,546.00"
          description="+15.3% from last month"
          icon={<CreditCard className="h-4 w-4 text-gray-500" />}
        />
        <StatsCard
          title="Orders"
          value="+243"
          description="+10.1% from last month"
          icon={<ShoppingBag className="h-4 w-4 text-gray-500" />}
        />
        <StatsCard
          title="Food Items"
          value="45"
          description="+2 new items added"
          icon={<Utensils className="h-4 w-4 text-gray-500" />}
        />
        <StatsCard
          title="Customers"
          value="+573"
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

