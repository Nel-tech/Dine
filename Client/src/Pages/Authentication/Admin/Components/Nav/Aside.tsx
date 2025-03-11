"use client"

import { BarChart3, ShoppingBag, CreditCard, Utensils, Tag, Users, Settings } from "lucide-react"
// import { usePathname } from "next/navigation"
// import Link from "next/link"
import {Link} from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../Components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../../../../Components/ui/sidebar"

const sidebarItems = [
  {
    title: "Overview",
    icon: BarChart3,
    href: "/admin",
  },
  {
    title: "Orders",
    icon: ShoppingBag,
    href: "/admin/orders",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/admin/payments",
  },
  {
    title: "Foods",
    icon: Utensils,
    href: "/admin/foods",
  },
  {
    title: "Categories",
    icon: Tag,
    href: "/admin/categories",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/admin/customers",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
]

export default function AdminSidebar() {


  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-[#AD343E]" />
          <span className="text-xl font-bold">FoodAdmin</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton>
                <Link to={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

