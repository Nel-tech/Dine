import { ArrowUpDown, MoreVertical } from "lucide-react"
import { Button } from "../../../../../Components/ui/button"
import { Badge } from "../../../../../Components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../Components/ui/dropdown-menu"

// Sample data
const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    items: ["Chicken Burger", "Fries", "Coke"],
    total: 24.99,
    status: "Completed",
    date: "10 Mar 2025",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    items: ["Veggie Pizza", "Salad"],
    total: 32.5,
    status: "Processing",
    date: "10 Mar 2025",
  },
  {
    id: "ORD-003",
    customer: "Robert Johnson",
    items: ["Steak", "Mashed Potatoes", "Wine"],
    total: 89.99,
    status: "Completed",
    date: "09 Mar 2025",
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    items: ["Sushi Platter"],
    total: 45.0,
    status: "Completed",
    date: "09 Mar 2025",
  },
  {
    id: "ORD-005",
    customer: "Michael Brown",
    items: ["Pasta Carbonara", "Garlic Bread", "Tiramisu"],
    total: 37.5,
    status: "Processing",
    date: "08 Mar 2025",
  },
]

export default function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <div className="flex items-center">
              Order ID
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>
            <div className="flex items-center">
              Date
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>
              <div className="flex flex-col">
                {order.items.map((item, index) => (
                  <span key={index} className="text-sm">
                    {item}
                    {index < order.items.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <Badge variant={order.status === "Completed" ? "default" : "outline"}>{order.status}</Badge>
            </TableCell>
            <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Update status</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Cancel order</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

