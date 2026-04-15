import { prisma } from "@/lib/prisma";
import { Product, ProductWithRelation } from "../../../features/products/types";

export const productRepositories = {
  findAll: async (): Promise<ProductWithRelation[]> => {
    return prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        batches: true,
        movements: true,
      },
    });
  },

  findById: async (id: string): Promise<ProductWithRelation | null> => {
    return prisma.product.findUnique({
      where: { id },
      include: {
        batches: true,
        movements: {
          orderBy: { createdAt: "desc" },
          take: 10,
        },
      },
    });
  },

  create: async (data: Product) => {
    // const { ...productData } = data;
    return prisma.product.create({
      data,
    });
  },

  update: async (id: string, data: Product) => {
    return prisma.product.update({
      where: { id },
      data: data,
      include: {
        batches: true,
        movements: true,
      },
    });
  },

  delete: async (id: string) => {
    return prisma.product.delete({ where: { id } });
  },
};
