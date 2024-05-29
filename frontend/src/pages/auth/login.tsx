import { LoginUser, loginUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      const user = await loginUser({
        username: data.username,
        password: data.password,
      } as LoginUser);

      if (user.token) {
        localStorage.setItem("token", user.token);

        navigate("/dashboard");
      } else {
        form.setError("username", {
          message: "Login failed!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-6">
        <div className="">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <p className="text-gray-500">
            Don't have an account yet?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign up
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <FormProvider {...form}>
            <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col justify-center items-center gap-4"
            >
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <InputWithLabel
                  placeholder="Username"
                  id="username"
                  type="username"
                  label="Username"
                />
                <InputWithLabel
                  placeholder="Password"
                  id="password"
                  type="password"
                  label="Password"
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
