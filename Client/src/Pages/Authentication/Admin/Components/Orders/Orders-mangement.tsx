import { Filter } from "lucide-react"
import { Button } from "../../../../../Components/ui/button"
import { Card, CardContent } from "../../../../../Components/ui/card"
import OrdersTable from "./Order-Tables"

export default function OrdersManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#AD343E]">Orders</h1>
          <p className="text-gray-500">Manage all customer orders</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Export
          </Button>
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

