import { z } from "zod";

const imageValidation = z
    .custom<FileList>()
    .refine(
        (files) => files.length > 0,
        "Product image is required"
    )
    .refine(
        (files) => files[0]?.size <= 5 * 1024 * 1024,
        "Image must be less than 5MB"
    )
    .refine(
        (files) =>
            ["image/jpeg", "image/png", "image/webp"].includes(
                files[0]?.type
            ),
        "Only JPEG, PNG and WebP images are allowed"
    );


const editImageValidation = z
    .custom<FileList>()
    .refine(
        (files) => {
            
            if (files.length === 0) {
                return true;
            }

            return files[0].size <= 5 * 1024 * 1024;
        },
        "Image must be less than 5MB"
    )
    .refine(
        (files) => {
           
            if (files.length === 0) {
                return true;
            }

            return ["image/jpeg", "image/png", "image/webp"].includes(
                files[0].type
            );
        },
        "Only JPEG, PNG and WebP images are allowed"
    );




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
        .min(1, "Product description is required")
        .min(10, "Description must be at least 10 characters")
        .max(1000, "Description cannot exceed 1000 characters"),

    category: z
        .string()
        .min(1, "Category is required"),

    price: z
        .number()
        .positive("Price must be greater than 0"),

    image: imageValidation,
})


export const editProductSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title cannot exceed 100 characters"),

    description: z
        .string()
        .trim()
        .min(1, "Description is required")
        .min(10, "Description must be at least 10 characters")
        .max(1000, "Description cannot exceed 1000 characters"),

    price: z
        .number()
        .positive("Price must be greater than 0"),

    category: z
        .string()
        .min(1, "Category is required"),

    image: editImageValidation,
})




export type ProductFormData = z.infer<typeof productSchema>;
export type EditProductFormData = z.infer<typeof editProductSchema>;