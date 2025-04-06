"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CircleCheck } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import createUserAction from "@/actions/user/createUser";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
type CreateUserFormState = {
  message: String;
  success: boolean;
  fields?: Record<string, string> | undefined;
  error?: { username?: string; name?: string; email?: string };
};

export default function UserCreatePage() {
  const { status } = useSession();
  const isAuthenticated = status == "authenticated";
  const router = useRouter();
  const userWithDefaultPasswordClientSchema = z.object({
    name: z
      .string({ message: "Full Name is required" })
      .min(1, { message: "Full Name is required" }),
    username: z
      .string({ message: "Login name is missing." })
      .min(5, { message: "Login name should contain at least 5 character." }),

    email: z
      .string({ message: "Email is missing." })
      .email("Invalid email address."),
  });

  const [response, setResponse] = useState<CreateUserFormState>({
    message: "",
    success: true,
    fields: undefined,
  });
  const [pending, setPending] = useState(false);
  const form = useForm<z.output<typeof userWithDefaultPasswordClientSchema>>({
    resolver: zodResolver(userWithDefaultPasswordClientSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
    },
  });
  const onSubmit = (
    values: z.infer<typeof userWithDefaultPasswordClientSchema>
  ) => {
    //console.log(values);
    setPending(true);
    setResponse({ message: "", success: true, fields: undefined });

    createUserAction(values).then((data) => {
      //console.log(data);
      setResponse(data);
      setPending(false);
      if (data.success) form.reset();
      if (data.success) {
        form.reset();
        toast.success("User created successfully.");
        if (!isAuthenticated) {
          router.push("/auth/login");
        }
      }
    });
  };
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Card className="px-4 min-w-[300px] max-w-[400px]">
      <div className="space-y-4">
        <div>
          <h1 className="text-lg text-center font-bold ">Create User</h1>
          <Separator />
        </div>
        <div className="mb-4 ">
          <FormProvider {...form}>
            <Form {...form}>
              <form
                className="space-y-6 "
                onSubmit={form.handleSubmit(onSubmit)}
                ref={formRef}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Full Name{" "}
                        <span className="text-red-500 font-bold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter user full name"
                          {...field}
                        />
                      </FormControl>
                      {response.error?.name && (
                        <AlertDescription className="text-red-500">
                          {response.error.name}
                        </AlertDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>
                          Login name{" "}
                          <span className="text-red-500 font-bold">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter login name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        {response.error?.username && (
                          <AlertDescription className="text-red-500">
                            {response.error.username}
                          </AlertDescription>
                        )}
                      </FormItem>
                    </>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>
                          Email{" "}
                          <span className="text-red-500 font-bold">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        {response.error?.email && (
                          <AlertDescription className="text-red-500">
                            {response.error.email}
                          </AlertDescription>
                        )}
                      </FormItem>
                    </>
                  )}
                ></FormField>
                <div className=" flex gap-4">
                  <Button className="" type="submit">
                    Create User
                  </Button>
                  {!isAuthenticated && (
                    <Button variant={"outline"}>
                      <Link href={"/auth/login"}>Back to login</Link>
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
      <div>
        {pending && <p>loading....</p>}
        {!response.success && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{response.message}</AlertDescription>
          </Alert>
        )}
        {response.success && response.message && (
          <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
            <CircleCheck />
            <p>{response.message}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
