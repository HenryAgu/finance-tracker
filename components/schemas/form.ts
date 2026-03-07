import { z } from "zod";

export const TransactionSchema = z.object({
  amount: z.coerce.number().positive({ message: "Amount must be positive" }),
  description: z
    .string()
    .min(1, { message: "Description is required" }),
  category: z
    .string()
    .min(1, { message: "Category is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});

export type TransactionFormData = z.infer<typeof TransactionSchema>;

// Keep backwards-compat alias
export const FormSchema = TransactionSchema;
export type ExpenseFormData = TransactionFormData;
