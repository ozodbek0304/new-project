import FormInput from "@/components/form/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Form = {
  email: string;
  password: string;
};

function Login() {
  const methods = useForm<Form>({});

  const onSubmit = methods.handleSubmit((vals) => {
    toast.warning(JSON.stringify(vals))
  });

  return (
    <div className="max-w-md m-auto  h-screen flex flex-col justify-center items-start relative">
      <div className="flex justify-center w-full mb-5">
        <img src="./logo.png" />
      </div>
      <h1 className="font-medium text-xl my-4 ">Welcome Back</h1>
      <form
        onSubmit={onSubmit}
        className="w-full  flex justify-center flex-col gap-4"
      >
        <FormInput
          methods={methods}
          name="email"
          placeholder="Your email"
          required
        />
        <FormInput
          methods={methods}
          name="password"
          type="password"
          placeholder="Your password"
          required
        />
        <div className="flex justify-end">
          <a href="#" className="text-blue-500 text-sm hover:text-blue-400">
            Forgot Password?
          </a>
        </div>
        <Button
          type="submit"
          variant={"outline"}
          className="  w-full bg-blue-500 text-white  hover:bg-blue-400 hover:text-white"
        >
          Sign In
        </Button>
      </form>
      <div className="flex justify-center mt-4 w-full">
        <h2 className="font-medium ">
          Do'nt have an account?{" "}
          <span className="text-blue-500">Start the quiz</span>
        </h2>
      </div>
    </div>
  );
}

export default Login;
