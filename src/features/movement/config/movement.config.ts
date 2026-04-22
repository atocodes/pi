import { MovementMode } from "../types";

export const movementConfig: Record<
  MovementMode,
  {
    title: string;
    description: string;
    showCustomer: boolean;
    showPaymentType: boolean;
    showSupplier: boolean;
  }
> = {
  ISSUE: {
    title: "Record Issue Product",
    description: "select product and batch to record issue",
    showCustomer: true,
    showPaymentType: true,
    showSupplier: false,
  },
  RECEIVE: {
    title: "Record Received Product",
    description: "Select prodict and batch to record received",
    showCustomer: false,
    showPaymentType: false,
    showSupplier: true,
  },
};
