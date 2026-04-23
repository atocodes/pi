import { prisma } from "@/lib/prisma";
import { Product, ProductWithRelation } from "@/features/products/types";
import { SearchProductValues } from "@/features/products/schema/product.schema";
import { ProductRepo } from "../interfaces/product.repo";

export class ProductRepoImpl implements ProductRepo {
  async findAll(params?: SearchProductValues): Promise<ProductWithRelation[]> {
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
  }

  async findById(id: string): Promise<ProductWithRelation | null> {
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
  }

  async create(data: Product): Promise<any> {
    return prisma.product.create({
      data,
    });
  }

  async update(id: string, data: Product): Promise<any> {
    return prisma.product.update({
      where: { id },
      data: data,
      include: {
        batches: true,
        movements: true,
      },
    });
  }

  async delete(id: string): Promise<any> {
    return prisma.product.delete({ where: { id } });
  }
}
