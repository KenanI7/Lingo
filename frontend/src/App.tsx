import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useEffect, useRef } from "react";
import LearnMore from "./pages/learn-more";

const App = () => {
  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center overflow-auto">
        <div className="w-2/3 flex justify-center items-center flex-col gap-4">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
            Learn a new language with{" "}
            <span className="text-primary-accent">confidence</span>
          </h1>
          <p className="text-2xl max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
            Access immersive, interactive language learning experiences that
            adapt to your learning style and learn a new language with{" "}
            <span className="text-primary-accent font-extrabold text-4xl">
              Lingo
            </span>
          </p>
          <div className="flex gap-4">
            <Button
              className="h-12 w-32 bg-blue-600"
              onClick={() => navigate("/signUp")}
            >
              Sign up
            </Button>
            <Button
              className="h-12 w-32"
              onClick={() =>
                ref.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div ref={ref} className="w-full h-[100vh]">
        <LearnMore />
      </div>
    </div>
  );
};

export default App;
