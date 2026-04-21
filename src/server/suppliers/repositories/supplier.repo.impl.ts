import {
  SearchSupplierParams,
  Supplier,
  SupplierWithRelation,
} from "@/features/suppliers";
import { prisma } from "@/lib/prisma";
import { SupplierRepo } from "../interfaces/supplier.repo";

export class SupplierRepoImpl implements SupplierRepo {
  async create(data: Supplier): Promise<any> {
    return await prisma.supplier.create({
      data,
    });
  }
  async find(params?: SearchSupplierParams): Promise<any> {
    return await prisma.supplier.findMany({
      include: { transactions: true },
      where: params?.q
        ? {
            OR: [
              {
                name: {
                  contains: params?.q,
                },
              },
              {
                tinNumber: {
                  contains: params?.q,
                },
              },
            ],
          }
        : undefined,
      orderBy: params?.sortBy
        ? {
            [params.sortBy as string]: params.order,
          }
        : undefined,
    });
  }
  async update(data: Supplier, id: string): Promise<any> {
    return await prisma.supplier.update({ where: { id }, data });
  }
  async findById(id: string): Promise<any> {
    return await prisma.supplier.findUnique({ where: { id } });
  }
  async delete(id: string): Promise<any> {
    return await prisma.supplier.delete({ where: { id } });
  }
}
