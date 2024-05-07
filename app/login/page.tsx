import LoginForm from "@/components/auth/login-form";
import { H3 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div
      className={`flex h-dvh flex-col  items-center md:-translate-y-20 md:flex-row md:justify-center`}
    >
      <div className="w-full rounded-lg p-16 md:w-[400px] md:border">
        <div className="flex flex-col">
          <H3>Log In</H3>
          <LoginForm />
          <p className="mt-4 text-sm text-muted-foreground">
            New to CLC?{" "}
            <span className="text-secondary-foreground">
              <Link href="/">
                <span className="font-semibold text-primary">Sign Up</span>
              </Link>
            </span>
          </p>
          <p className="text-sm text-muted-foreground">Forgot your password?</p>
        </div>
      </div>
      <div className="my-4 h-px w-20 bg-gray-300 md:mx-4 md:h-20 md:w-px" />
      <div className="flex flex-col items-center justify-center gap-2 ">
        <Button variant="outline">
          <FaGoogle className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
        <Button>
          <FaGithub className="mr-2 h-4 w-4" />
          Continue with Github
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
