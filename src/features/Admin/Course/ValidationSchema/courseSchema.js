import { z } from "zod";

// Zod schema for form validation
export const courseSchema = z.object({
  title: z.string().min(3, "Course title must be at least 3 characters"),

  price: z
    .string()
    .min(1, "Price is required")
    .refine((value) => !isNaN(Number(value)), "Price must be a valid number"),

  description: 
    z.string().max(1000),
  instructor: 
    z.string().min(1),
  level: 
    z.enum(["Basic", "Intermediate", "Advanced", "Basic to Advanced"]),
  thumbnail: 
    z.any(), // or refine for file
});
