import { Badge } from "../../../../../Components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table"

// Sample data
const recentOrders = [
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

export default function RecentOrdersTable() {
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
        {recentOrders.slice(0, 5).map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>
              <Badge variant={order.status === "Completed" ? "default" : "outline"}>{order.status}</Badge>
            </TableCell>
            <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

