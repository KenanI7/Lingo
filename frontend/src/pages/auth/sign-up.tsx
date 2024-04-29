import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-6">
        <div className="">
          <h1 className="text-3xl font-bold text-center">Sign up</h1>
          <p className="text-gray-500">
            Already have an account{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              login
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
                  placeholder="Email"
                  id="email"
                  type="email"
                  label="Email"
                />
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
                Sign up
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
