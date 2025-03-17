import { Card, CardContent } from "../../../../../Components/ui/card"
import OrdersTable from "../Orders/Order-Table"

export default function Ordersmanagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#AD343E]">Orders</h1>
          <p className="text-gray-500">Manage all customer orders</p>
        </div>
       
      </div>

      <Card>
        <CardContent className="pt-6">
          <OrdersTable />
        </CardContent>
      </Card>
    </div>
  )
}