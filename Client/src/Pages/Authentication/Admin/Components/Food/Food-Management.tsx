
"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "../../../../../Components/ui/button"
import { Card, CardContent } from"../../../../../Components/ui/card"
import FoodsTable from "./Food-Tab"
import AddFoodDialog from "./Add-Food"

export default function Foodsmanagement() {
  const [isAddFoodOpen, setIsAddFoodOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#AD343E]">Food Items</h1>
          <p className="text-gray-500">Manage your food catalog</p>
        </div>
        <Button className="bg-[#AD343E] hover:bg-[#8A2A32]" onClick={() => setIsAddFoodOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Food
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <FoodsTable />
        </CardContent>
      </Card>

      <AddFoodDialog open={isAddFoodOpen} onOpenChange={setIsAddFoodOpen} />
    </div>
  )
}
