import { Prisma } from "../../../generated/prisma/client";
import { Customer } from "../cutomers/types";

export type Movement = {
  id: string;
  type: MovementType;
  note?: string | null;
  issueNumber?: string | null;

  paymentType: PaymentType;

  customerId?: string | null;

  items: MovementItem[];
  createdAt: Date;
};

export type MovementItem = {
  id: string;

  movementId: string;
  productId: string;
  batchId?: string | null;

  quantity: number;

  createdAt: Date;
};

export type MovementWithRelation = Movement &
  Prisma.MovementGetPayload<{
    include: {
      customer: true;
      items: true;
    };
  }>;

export type MovementItemWithRelation = MovementItem &
  Prisma.MovementItemGetPayload<{
    include: {
      batch: true;
      movement: true;
      product: true;
    };
  }>;


export type MovementType =
  | "SALE"
  | "PURCHASE"
  | "RETURN"
  | "ADJUSTMENT"
  | "EXPIRED";

export type PaymentType = "Cash" | "Transaction";

export type MovementMode = "ISSUE" | "RECEIVE";