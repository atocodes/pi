"use client";

import Link from "next/link";
import { Package, Users, Layers3, ArrowRight, Plus } from "lucide-react";

import { useBatches } from "@/features/batches/hooks/use-batches";
import { CustomerModal, useCustomers } from "@/features/customers";
import { useProducts } from "@/features/products/hooks/use-products";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ProductModal } from "@/features/products";
import { useState } from "react";

export default function Home() {
  const { products, createProduct } = useProducts();
  const { customers, addCustomer } = useCustomers();
  const { batches } = useBatches();
  const [openProduct, setOpenProduct] = useState<boolean>(false);
  const [openCustomer, setOpenCustomer] = useState<boolean>(false);

  const stats = [
    {
      title: "Products",
      value: products?.length || 0,
      description: "Total available products",
      icon: Package,
      href: "/products",
    },
    {
      title: "Customers",
      value: customers?.length || 0,
      description: "Registered customers",
      icon: Users,
      href: "/customers",
    },
    {
      title: "Batches",
      value: batches?.length || 0,
      description: "Inventory batches",
      icon: Layers3,
      href: "/batches",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-muted/40 p-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

            <p className="text-muted-foreground">
              Overview of your inventory and customer data.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button>
              <Package className="mr-2 h-4 w-4" />
              <Link href="/products">Products</Link>
            </Button>

            <Button variant="secondary">
              <Users className="mr-2 h-4 w-4" />
              <Link href="/customers">Customers</Link>
            </Button>

            <Button variant="outline">
              <Layers3 className="mr-2 h-4 w-4" />
              <Link href="/batches">Batches</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card
                key={stat.title}
                className="rounded-2xl transition hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>

                  <Icon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">{stat.value}</div>

                    <CardDescription className="mt-1">
                      {stat.description}
                    </CardDescription>
                  </div>

                  <Button variant="ghost" className="w-min justify-between">
                    <ArrowRight className="h-4 w-4" />
                    <Link href={stat.href}>Open {stat.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Extra Section */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Inventory */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Inventory Summary</CardTitle>

              <CardDescription>
                Quick overview of your stock system.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Total Products</span>

                <span className="font-medium text-foreground">
                  {products?.length || 0}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Total Batches</span>

                <span className="font-medium text-foreground">
                  {batches?.length || 0}
                </span>
              </div>

              <Button className="w-full" onClick={() => setOpenProduct(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </CardContent>
          </Card>

          {/* Customers */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Customer Insights</CardTitle>

              <CardDescription>Customer management statistics.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Total Customers</span>

                <span className="font-medium text-foreground">
                  {customers?.length || 0}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>System Status</span>

                <span className="font-medium text-green-500">Active</span>
              </div>

              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setOpenCustomer(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <ProductModal
        open={openProduct}
        onOpenChange={setOpenProduct}
        onSubmit={createProduct}
      />
      <CustomerModal
        onOpenChange={setOpenCustomer}
        open={openCustomer}
        onSubmit={addCustomer}
      />
    </div>
  );
}
