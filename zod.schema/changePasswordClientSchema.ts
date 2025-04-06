import { z } from "zod";

export const ChangePasswordClientSchema = z
  .object({
    existingPassword: z.string({ message: "Password should be text" }),
    newPassword: z
      .string({ message: "Password should be text" })

      .refine((value) => /[a-z|A-Z]/.test(value), {
        message: "Password must contain at least one alphabet",
      })
      .refine((value) => /[0-9]/.test(value), {
        message: "Password must contain at least one number",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      })
      .refine((value) => value.length > 8, {
        message: "Min length is 8 character",
      }),
    newPasswordConfirm: z
      .string({ message: "Password should be text" })
      .refine((value) => /[a-z|A-Z]/.test(value), {
        message: "Password must contain at least one alphabet",
      })
      .refine((value) => /[0-9]/.test(value), {
        message: "Password must contain at least one number",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      })
      .refine((value) => value.length > 8, {
        message: "Min length is 8 character",
      }),
    id: z.optional(z.number({ message: "Id should be number." })),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: "New Password not matched",
    path: ["newPasswordConfirm"],
  });
