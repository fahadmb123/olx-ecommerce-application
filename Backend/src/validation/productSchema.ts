import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Product title is required")
    .min(3, "Product title must be at least 3 characters")
    .max(100, "Product title cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .min(1, "Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description cannot exceed 1000 characters"),

  price: z.coerce
    .number()
    .positive("Price must be greater than 0"),
  category: z
    .string()
    .min(1, "Category is required")
});



export type ProductFormData = z.infer<typeof productSchema>