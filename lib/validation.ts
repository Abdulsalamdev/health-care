import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 character")
    .max(50, "Name must be at least 50 characters"),
  email: z.string().email("Inavalid email address"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Inavalid Phone number"
    ),
});
