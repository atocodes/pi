"use client";

import {
  useProducts,
  ProductTable,
  Product,
  ProductModal,
} from "@/features/products";
import { useState } from "react";

export default function InventoryPage() {
  const {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
  } = useProducts();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const handleAdd = () => {
    setSelectedProduct(null);
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="lg:md-5 lg:w-full ">
      <ProductTable
        products={products}
        onAddProducts={handleAdd}
        onEdit={handleEdit}
      />

      <ProductModal
        open={open}
        onOpenChange={handleOpen}
        initialData={selectedProduct}
        onSubmit={createProduct}
        onUpdate={updateProduct}
      />
    </div>
  );
}
