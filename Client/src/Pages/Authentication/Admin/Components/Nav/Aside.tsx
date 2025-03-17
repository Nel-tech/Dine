import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../Components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../../../../Components/ui/sidebar";
import { useAuth } from "@/Context/AuthContext";
import { Utensils } from "lucide-react"; // Ensure you import this icon

const sidebarItems = [
  { title: "Overview", href: "/admin" },
  { title: "Orders", href: "/admin/orders" },
  { title: "Payments", href: "/admin/payments" },
  { title: "Foods", href: "/admin/foods" },
];

export default function AdminSidebar() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-[#AD343E]" />
          <span className="text-xl font-bold">DINE</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href; // Check if tab is active
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className={`w-full ${isActive ? "bg-[#AD343E] text-white" : "text-gray-700 hover:bg-gray-100"}`}>
                  <Link to={item.href} className="flex items-center gap-2 w-full p-2">
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user?.photoURL || "/placeholder-user.jpg"} alt="Admin" />
            <AvatarFallback>{user?.displayName?.charAt(0) || "AD"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm: font-medium">{user?.displayName || "Admin User"}</p>
            <p className="text-xs text-gray-500">{user?.email || "admin@example.com"}</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
