import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";

const SignUp = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-6">
        <div className="">
          <h1 className="text-3xl font-bold text-center">Sign up</h1>
          <p className="text-gray-500">
            Already have an account{" "}
            <span className="underline cursor-pointer">login</span>
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-4">
          <InputWithLabel
            placeholder="Email"
            id="email"
            type="email"
            label="Email"
          />
          <InputWithLabel
            placeholder="Username"
            id="username"
            type="text"
            label="Username"
          />
          <InputWithLabel
            placeholder="Password"
            id="password"
            type="password"
            label="Password"
          />
          <Button className="w-full">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
