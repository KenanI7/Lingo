import React from "react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: { email: string; username: string; password: string; confirmPassword: string }) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-6">
        <div className="">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <p className="text-gray-500">
            Don't have an account yet?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col justify-center items-center gap-4"
            >
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <InputWithLabel
                  placeholder="Email"
                  id="email"
                  type="email"
                  label="Email"
                  {...form.register("email", { required: true })}
                />
                <InputWithLabel
                  placeholder="Username"
                  id="username"
                  type="text"
                  label="Username"
                  {...form.register("username", { required: true })}
                />
                <InputWithLabel
                  placeholder="Password"
                  id="password"
                  type="password"
                  label="Password"
                  {...form.register("password", { required: true })}
                />
                <InputWithLabel
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  {...form.register("confirmPassword", { required: true })}
                />
              </div>
              <Button className="w-[385px]" type="submit">
                Login
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
