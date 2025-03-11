import { MoreVertical } from "lucide-react"
import { Button } from "../../../../../Components/ui/button"
import { Card, CardContent } from "../../../../../Components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../Components/ui/dropdown-menu"

// Sample data
const categories = [
  "Burgers",
  "Pizza",
  "Main Course",
  "Japanese",
  "Italian",
  "Desserts",
  "Beverages",
  "Appetizers",
  "Salads",
  "Sides",
]

export default function CategoriesGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <Card key={category} className="overflow-hidden">
          <div className="h-32 bg-gray-100 flex items-center justify-center">
            <img src={`/placeholder.svg?height=128&width=256`} alt={category} className="h-full w-full object-cover" />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{category}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>View items</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm text-gray-500 mt-1">{Math.floor(Math.random() * 10) + 1} items</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

