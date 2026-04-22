import {
  Movement,
  MovementWithRelation,
  SearchMovementParams,
} from "@/features/movement";
import { MovementsRepo } from "../interfaces/movement.repo";
import { prisma } from "@/lib/prisma";

export class MovementRepoImpl implements MovementsRepo {
  async create(data: Movement): Promise<any> {
    return await prisma.movement.create({
      data: {
        paymentType: data.paymentType,
        type: data.type,
        customerId: data.customerId,
        issueNumber: data.issueNumber,
        note: data.issueNumber,
        items: {
          create: [...data.items],
        },
      },
    });
  }
  async update(data: Movement, id?: string): Promise<any> {
    return await prisma.movement.update({
      where: {
        id: id || data.id,
      },
      data: {
        ...data,
        items: {
          update: data.items.map((item) => ({
            where: { id: data.id },
            data: {
              ...item,
            },
          })),
        },
      },
      include: {
        customer: true,
        items: true,
      },
    });
  }
  async delete(id: string): Promise<any> {
    return await prisma.movement.delete({ where: { id } });
  }
  async find(query?: SearchMovementParams): Promise<any[]> {
    return await prisma.movement.findMany({
      where: query
        ? {
            createdAt: {
              gte: query.dateFrom,
              lte: query.dateTo,
            },
          }
        : undefined,
      orderBy: query?.order
        ? {
            createdAt: query.order,
          }
        : undefined,
      include: {
        customer: true,
        items: {
          include: {
            batch: true,
            product: true,
          },
        },
      },
      skip: query?.page ? (query.page - 1) * query?.limit! : undefined,
      take: query?.limit ? query.limit : undefined,
    });
  }
  async findById(id: string): Promise<any> {
    return await prisma.movement.findUnique({
      where: { id },
      include: {
        customer: true,
        items: {
          include: {
            batch: true,
            product: true,
          },
          
        },
      },
    });
  }
}
