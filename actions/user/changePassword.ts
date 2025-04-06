"use server";
import { auth, signOut } from "@/auth";
import prisma from "@/prisma/client";
import { ChangePasswordClientSchema } from "@/zod.schema/changePasswordClientSchema";
import { ChangePasswordSchema } from "@/zod.schema/userSchema";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { z } from "zod";
export type ChangePasswordFormResponse = {
  message: string;
  success: boolean;
  fields?: Record<string, string> | undefined;
  error?: {
    id?: string;
    existingPassword?: string;
    newPassword?: string;
    newPasswordConfirm?: string;
  };
};

const changePasswordAction = async (
  data: z.infer<typeof ChangePasswordClientSchema>
): Promise<ChangePasswordFormResponse> => {
  const validationResponse = await ChangePasswordSchema.safeParseAsync(data);
  if (validationResponse.success) {
    const { id, newPassword } = validationResponse.data;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    //check if existing password match
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) return notFound();
    const passwordMatch = await bcrypt.compare(
      validationResponse.data.existingPassword,
      user.password
    );
    if (!passwordMatch)
      return { success: false, message: "Existing password is incorrect" };
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword, requirePasswordChange: false },
    });
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
    revalidatePath("/auth/change-password/[id]");
    return {
      message: "Password Changed successfully. Use new password for login.",
      success: true,
    };
  } else {
    return {
      success: false,
      fields: validationResponse.data,
      error: Object.fromEntries(
        Object.entries(validationResponse.error.flatten().fieldErrors).map(
          ([key, value]) => [key, value.join(", ")]
        )
      ),
      message: "Password change failed.",
    };
  }
};
export default changePasswordAction;
