import {
  Boxes,
  HandCoins,
  History,
  LayoutDashboardIcon,
  Package,
  Truck,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function AppSidebar() {
  const items = [
    { title: "Dashboard", url: "/", icon: LayoutDashboardIcon },
    { title: "Products", url: "/products", icon: Package },
    { title: "Batches", url: "/batches", icon: Boxes },
    { title: "Customers", url: "/customers", icon: Users },
    { title: "Suppliers", url: "/suppliers", icon: Truck },
    { title: "Movement History", url: "/movementHistory", icon: History },
    { title: "Customer Creadits", url: "/customerCreadits", icon: HandCoins },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-5xl">PH</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <item.icon className="w-6 h-6" />
                    <a href={item.url} className="columns-2 justify-evenly">
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Card className="px-3 py-2">
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <div className="flex flex-col leading-tight">
                <p className="text-sm font-medium">Profile</p>
                <p className="text-xs text-muted-foreground">User Name</p>
              </div>
            </div>

            <Button variant="outline" size="sm">
              Action
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
