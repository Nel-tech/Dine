"use client"

import { Search } from "lucide-react"
import { Button } from "../../../../../Components/ui/button"
import { Input } from "../../../../../Components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../Components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../Components/ui/dropdown-menu"
import { SidebarTrigger } from"../../../../../Components/ui/sidebar"

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <div className="relative flex-1 md:grow-0 md:basis-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-white pl-8 md:w-[300px]" />
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Help
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

