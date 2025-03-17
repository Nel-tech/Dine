import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../../../Components/ui/card"

interface StatsCardProps {
  title: string
  value: number
  description: string
  icon: ReactNode
}

export default function StatsCard({ title, value, description, icon }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm: font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">#{value}</div>
        <p className="text-xs text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}