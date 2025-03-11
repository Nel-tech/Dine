"use client"

import { useState } from "react"
import { MoreVertical } from "lucide-react"
import { Button } from "../../../../../Components/ui/button"
import { Badge } from  "../../../../../Components/ui/badge"
import { Input } from "../../../../../Components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../../Components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../Components/ui/dropdown-menu"

// Sample data
const foodItems = [
  {
    id: "FOOD-001",
    name: "Chicken Burger",
    category: "Burgers",
    price: 12.99,
    description: "Juicy chicken patty with lettuce, tomato, and special sauce",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "FOOD-002",
    name: "Veggie Pizza",
    category: "Pizza",
    price: 18.5,
    description: "Fresh vegetables on a thin crust with mozzarella cheese",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "FOOD-003",
    name: "Steak",
    category: "Main Course",
    price: 29.99,
    description: "Premium cut steak cooked to perfection",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "FOOD-004",
    name: "Sushi Platter",
    category: "Japanese",
    price: 45.0,
    description: "Assorted sushi with fresh fish and vegetables",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "FOOD-005",
    name: "Pasta Carbonara",
    category: "Italian",
    price: 16.5,
    description: "Creamy pasta with bacon and parmesan cheese",
    image: "/placeholder.svg?height=80&width=80",
  },
]

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

export default function FoodsTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredFoods = foodItems.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || food.category.toLowerCase() === categoryFilter.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search foods..."
            className="w-[250px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredFoods.map((food) => (
            <TableRow key={food.id}>
              <TableCell>
                <img
                  src={food.image || "/placeholder.svg"}
                  alt={food.name}
                  className="h-12 w-12 rounded-md object-cover"
                />
              </TableCell>
              <TableCell className="font-medium">{food.name}</TableCell>
              <TableCell>
                <Badge variant="outline">{food.category}</Badge>
              </TableCell>
              <TableCell className="max-w-[300px] truncate">{food.description}</TableCell>
              <TableCell className="text-right">${food.price.toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit item</DropdownMenuItem>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Delete item</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

