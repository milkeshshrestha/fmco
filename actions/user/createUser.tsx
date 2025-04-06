"use server";
import { auth } from "@/auth";
import { getOneUser } from "@/data/userData";
import prisma from "@/prisma/client";
import { userWithDefaultPasswordSchema } from "@/zod.schema/userSchema";
import bcrypt from "bcryptjs";
import { z } from "zod";
export type CreateUserFormState = {
  message: String;
  success: boolean;
  fields?: Record<string, string> | undefined;
  error?: { username?: string; name?: string; email?: string };
};

const createUserAction = async (
  data: z.infer<typeof userWithDefaultPasswordSchema>
): Promise<CreateUserFormState> => {
  //allow creation of user if no user exists
  // after first user is created, allow only authenticated user
  const session = await auth();
  const existingUser = await getOneUser();
  if (existingUser && !session)
    return { message: "Unauthorised. Please login first.", success: false };

  const validationResponse = await userWithDefaultPasswordSchema.safeParseAsync(
    data
  );
  if (validationResponse.success) {
    const hashedPassword = await bcrypt.hash("123456", 10);
    const { username, name, email } = validationResponse.data;
    await prisma.user.create({
      data: { username, name, email, password: hashedPassword },
    });
    return {
      message: "User created successfully. ",
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
      message: "User creation failed.",
    };
  }
};
export default createUserAction;
