import { Badge } from "../../../../../Components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table"

// Sample data
const recentPayments = [
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

export default function RecentPaymentsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Payment ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentPayments.slice(0, 5).map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell>{payment.customer}</TableCell>
            <TableCell>
              <Badge variant={payment.status === "Successful" ? "default" : "outline"}>{payment.status}</Badge>
            </TableCell>
            <TableCell className="text-right">${payment.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

