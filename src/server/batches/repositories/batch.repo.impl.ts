import { Batch, BatchWithRelation, SearchBatchParms } from "@/features/batches";
import { BatchRepo } from "../interfaces/batch.repo";
import { prisma } from "@/lib/prisma";

export class BatchRepoImpl implements BatchRepo {
  createBatch(data: Batch): Promise<any> {
    return prisma.batch.create({
      data: {
        costPrice: data.costPrice,
        expiryDate: data.expiryDate,
        quantity: data.quantity,
        remainingQty: data.remainingQty,
        sellingPrice: data.sellingPrice,
        batchNumber: data.batchNumber,
        invoiceNumber: data.invoiceNumber,
        manufactureDate: data.manufactureDate,
        productId: data.productId,
        supplierId: data.supplierId,
      },
      include: {
        product: true,
        movements: true,
      },
    });
  }
  updateBatch(data: Batch, id: string): Promise<any> {
    return prisma.batch.update({
      where: {
        id,
      },
      data,
      include: {
        movements: true,
        product: true,
      },
    });
  }
  deleteBatch(id: string): Promise<any> {
    return prisma.batch.delete({ where: { id } });
  }
  findById(id: string): Promise<any> {
    return prisma.batch.findUnique({
      where: { id },
      include: {
        movements: {
          include: {
            batch: true,
          },
        },
        product: true,
      },
    });
  }
  findAll(searchParams?: SearchBatchParms): Promise<any> {
    return prisma.batch.findMany({
      where: searchParams?.q
        ? {
            OR: [
              {
                product: {
                  name: {
                    contains: searchParams.q,
                  },
                },
              },
              {
                batchNumber: {
                  contains: searchParams.q,
                },
              },
            ],
          }
        : undefined,
      include: {
        movements: {
          include: {
            product: true,
            batch: true,
          },
        },
        product: true,
      },
      orderBy: searchParams?.sortBy
        ? {
            [searchParams?.sortBy as string]: searchParams?.order,
          }
        : undefined,
    });
  }
}
