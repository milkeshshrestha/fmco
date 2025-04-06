"use client";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/zod.schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AlertCircleIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { loginAction } from "@/actions/user/login";
import { useState } from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Separator } from "../ui/separator";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [error, setError] = useState<string | undefined>("");
  const [pending, setPending] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    //console.log(values);
    setError("");
    setPending(true);
    loginAction(values).then((data) => {
      //console.log(data);
      setPending(false);
      if (data?.error) setError(data.error);
    });
  };
  return (
    <Card className="px-4 min-w-[300px]">
      <div className="">
        <CardHeader className="text-center font-bold p-0">Login</CardHeader>
        <Separator></Separator>
      </div>
      <div className="">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Your Login Name"
                      ></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="******"
                        ></Input>

                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          tabIndex={-1}
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeIcon className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <EyeOffIcon
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              ></FormField>
            </div>
            {error && (
              <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
                <AlertCircleIcon></AlertCircleIcon>
                <p>{error}</p>
              </div>
            )}

            <Button type="submit" disabled={pending} className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>
      <CardFooter>
        <Button className="font-normal w-full" size="sm" asChild variant="link">
          <Link href={"/user/create"}>Don't have an account</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
