import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const FormSchema = z.object({
  amount: z.number(),
  description: z.string(),
  category: z.string(),
  date: z.date(),
});

export type ExpenseFormData = z.infer<typeof FormSchema>;

