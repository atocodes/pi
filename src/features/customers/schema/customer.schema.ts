import { z } from "zod";
const msg = "Phone number must be atlease from 9 to 12 characters long";

export const customerSchema = z.object({
  name: z.string(),
  tinNumber: z.string().nullable().optional(),
  contactName: z.string().nullable().optional(),
  phone: z.string().min(9, msg).max(12, msg).nullable().optional(),
  address: z.string().nullable().optional(),
});
