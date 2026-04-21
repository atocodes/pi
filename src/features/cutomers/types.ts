import { Prisma } from "../../../generated/prisma/client";
import { CustomerCredit } from "../customer_creadits/types";
import { Movement } from "../movement_history";

export type Customer = {
  id: string;
  name: string;
  phone: string | null;
  address: string | null;
  contactName?: string | null;

  tinNumber?: string | null;

  createdAt: Date;
  updatedAt: Date;
};

export type CustomerWithRelation = Customer &
  Prisma.CustomerGetPayload<{
    include: {
      credits: true;
      movements: true;
    };
  }>;

export type SearchCustomerType = {
  q?: string | null;
  sortBy?: string | null;
  order?: string | null;
};
