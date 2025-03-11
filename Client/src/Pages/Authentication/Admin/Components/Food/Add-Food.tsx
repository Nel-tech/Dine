"use client"

import type React from "react"

import { useState } from "react"
import { ImageIcon } from "lucide-react"
import { Button } from"../../../../../Components/ui/button"
import { Input } from "../../../../../Components/ui/input"
import { Label } from"../../../../../Components/ui/label"
import { Textarea } from "../../../../../Components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../../Components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from"../../../../../Components/ui/dialog"

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

interface AddFoodDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AddFoodDialog({ open, onOpenChange }: AddFoodDialogProps) {
  const [newFood, setNewFood] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null as string | null,
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, you would handle file upload to a storage service
    if (e.target.files && e.target.files[0]) {
      setNewFood({
        ...newFood,
        image: URL.createObjectURL(e.target.files[0]),
      })
    }
  }

  const handleAddFood = () => {
    // In a real app, you would save this to your database
    console.log("Adding new food item:", newFood)
    onOpenChange(false)
    setNewFood({
      name: "",
      category: "",
      price: "",
      description: "",
      image: null,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Food Item</DialogTitle>
          <DialogDescription>Fill in the details to add a new food item to your catalog.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="food-name">Name</Label>
            <Input
              id="food-name"
              placeholder="Enter food name"
              value={newFood.name}
              onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="food-category">Category</Label>
            <Select value={newFood.category} onValueChange={(value) => setNewFood({ ...newFood, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="food-price">Price ($)</Label>
            <Input
              id="food-price"
              type="number"
              placeholder="0.00"
              value={newFood.price}
              onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="food-description">Description</Label>
            <Textarea
              id="food-description"
              placeholder="Describe the food item"
              value={newFood.description}
              onChange={(e) => setNewFood({ ...newFood, description: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="food-image">Image</Label>
            <div className="flex items-center gap-4">
              {newFood.image ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                  <img
                    src={newFood.image || "/placeholder.svg"}
                    alt="Food preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-md border bg-gray-50">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
              )}
              <Label
                htmlFor="food-image-upload"
                className="cursor-pointer rounded-md bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200"
              >
                Upload Image
              </Label>
              <Input
                id="food-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-[#AD343E] hover:bg-[#8A2A32]" onClick={handleAddFood}>
            Add Food Item
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

