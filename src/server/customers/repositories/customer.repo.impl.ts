import { SearchCustomerValues } from "@/features/customers/schema/searchCustomers.schema";
import { Customer } from "@/features/customers/types";
import { prisma } from "@/lib/prisma";
import { CustomerRepo } from "../interfaces/customer.repo";

export class CustomerRepoImpl implements CustomerRepo {
  async findAll(params?: SearchCustomerValues): Promise<Customer[]> {
    return prisma.customer.findMany({
      where:
        params?.q != null
          ? {
              OR: [
                {
                  name: {
                    contains: params.q,
                  },
                },
                {
                  tinNumber: {
                    contains: params.q,
                  },
                },
                {
                  contactName: {
                    contains: params.q,
                  },
                },
              ],
            }
          : undefined,
      orderBy: params?.sortBy
        ? { [params?.sortBy as string]: params.order }
        : undefined,
      include: {
        credits: true,
        movements: true,
      },
    });
  }

  async findById(id: string): Promise<Customer | null> {
    return prisma.customer.findUnique({
      where: { id },
      include: {
        credits: true,
        movements: {
          include: {
            items: true,
          },
          take: 10,
        },
      },
    });
  }

  async create(data: Customer) {
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
  }

  async update(id: string, data: Customer) {
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
      include: {
        credits: true,
        movements: true,
      },
    });
  }

  async delete(id: string) {
    return prisma.customer.delete({ where: { id } });
  }
}
