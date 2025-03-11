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
const payments = [
  {
    id: "PAY-001",
    customer: "John Doe",
    email: "john.doe@example.com",
    amount: 24.99,
    method: "Credit Card",
    status: "Successful",
    date: "10 Mar 2025",
  },
  {
    id: "PAY-002",
    customer: "Jane Smith",
    email: "jane.smith@example.com",
    amount: 32.5,
    method: "PayPal",
    status: "Successful",
    date: "10 Mar 2025",
  },
  {
    id: "PAY-003",
    customer: "Robert Johnson",
    email: "robert.j@example.com",
    amount: 89.99,
    method: "Credit Card",
    status: "Successful",
    date: "09 Mar 2025",
  },
  {
    id: "PAY-004",
    customer: "Emily Davis",
    email: "emily.d@example.com",
    amount: 45.0,
    method: "Apple Pay",
    status: "Successful",
    date: "09 Mar 2025",
  },
  {
    id: "PAY-005",
    customer: "Michael Brown",
    email: "michael.b@example.com",
    amount: 37.5,
    method: "Google Pay",
    status: "Pending",
    date: "08 Mar 2025",
  },
]

export default function PaymentsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <div className="flex items-center">
              Payment ID
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>
            <div className="flex items-center">
              Date
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell>{payment.customer}</TableCell>
            <TableCell>{payment.email}</TableCell>
            <TableCell>{payment.method}</TableCell>
            <TableCell>{payment.date}</TableCell>
            <TableCell>
              <Badge variant={payment.status === "Successful" ? "default" : "outline"}>{payment.status}</Badge>
            </TableCell>
            <TableCell className="text-right">${payment.amount.toFixed(2)}</TableCell>
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
                  <DropdownMenuItem>Send receipt</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Issue refund</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

