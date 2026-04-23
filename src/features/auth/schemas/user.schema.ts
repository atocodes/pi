import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(5, "Username must be atleast 5 characters"),
  password: z.string().min(8, "Password must be atleast 8 characters "),
});
export type LoginFormValues = z.infer<typeof loginSchema>;
  