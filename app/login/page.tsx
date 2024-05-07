import LoginForm from '@/components/auth/login-form';
import { H3, P } from '@/components/typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const LoginPage = () => {
  return (
    <div className="md:flex md:-translate-y-20 md:items-center md:justify-center h-dvh">
      <div className="rounded-lg w-full md:border md:w-[400px] p-16">
        <div className="flex flex-col">
          <H3>Log In</H3>
          <LoginForm />
          <p className="mt-4 text-sm text-gray-300">
            New to CLC?{' '}
            <span className="text-red-500">
              <Link href="/">
                <span>Sign Up</span>
              </Link>
            </span>
          </p>
          <p className="text-sm text-gray-300">Forgot your password?</p>
        </div>
      </div>
      <div className="my-4 h-px w-20 bg-gray-300 sm:mx-4 sm:h-20 sm:w-px" />
      <div className="flex items-center justify-center ">
        <div className="flex w-2/3 items-center justify-center flex-col gap-2 ">
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
    </div>
  );
};

export default LoginPage;
