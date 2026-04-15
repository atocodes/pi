import { Customer } from "@/features/cutomers/types";
import { prisma } from "@/lib/prisma";

export const customerRepositories = {
  findAll: async (): Promise<Customer[]> => {
    return prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        credits: true,
        movements: true,
      },
    });
  },

  findById: async (id: string): Promise<Customer | null> => {
    return prisma.customer.findUnique({
      where: { id },
      include: {
        credits: true,
        movements: {
          orderBy: { createdAt: "desc" },
          take: 10,
        },
      },
    });
  },

  create: async (data: Customer) => {
    return prisma.customer.create({
      data: {
        name: data.name,
        address: data.address,
        createdAt: data.createdAt,
        contactName: data.contactName,
        phone: data.phone,
        tinNumber: data.tinNumber,
      },
    });
  },

  update: async (id: string, data: Customer) => {
    return prisma.customer.update({
      where: { id },
      data: {
        name: data.name,
        address: data.address,
        createdAt: data.createdAt,
        contactName: data.contactName,
        phone: data.phone,
        tinNumber: data.tinNumber,
      },
    });
  },

  delete: async (id: string) => {
    return prisma.customer.delete({ where: { id } });
  },
};
