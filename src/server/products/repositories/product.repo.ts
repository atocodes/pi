import { prisma } from "@/lib/prisma";
import { Product, ProductWithRelation } from "../../../features/products/types";
import { SearchProductValues } from "@/features/products/schemas/product.schema";

export const productRepositories = {
  findAll: async (
    params?: SearchProductValues,
  ): Promise<ProductWithRelation[]> => {
    return prisma.product.findMany({
      where: params?.q
        ? {
            OR: [
              {
                name: {
                  contains: params.q,
                },
              },
              {
                sku: {
                  contains: params.q,
                },
              },
            ],
          }
        : undefined,
      orderBy: params?.sortBy
        ? { [params.sortBy as string]: params.order }
        : undefined,
      include: {
        batches: {
          include: {
            movements: true,
          },
        },
        movements: {
          include: {
            batch: true,
            movement: true,
          },
        },
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
          include: {
            batch: true,
          },
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
