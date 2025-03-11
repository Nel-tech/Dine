import { Plus } from "lucide-react"
import { Button } from "../../../../../Components/ui/button"
import { Card, CardContent } from "../../../../../Components/ui/card"
import CategoriesGrid from "../Categories/Categories-grid"

export default function CategoriesManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#AD343E]">Categories</h1>
          <p className="text-gray-500">Manage food categories</p>
        </div>
        <Button className="bg-[#AD343E] hover:bg-[#8A2A32]">
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <CategoriesGrid />
        </CardContent>
      </Card>
    </div>
  )
}

