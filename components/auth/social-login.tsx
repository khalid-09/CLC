import { FaGoogle } from "react-icons/fa6";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const SocialLogin = () => {
  return (
    <aside className="flex flex-col items-center md:flex-row">
      <div className="my-4 h-px w-20 bg-gray-300 md:mx-4 md:h-20 md:w-px" />
      <div className="flex flex-col items-center justify-center gap-2 ">
        <Button variant="outline">
          <FaGoogle className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
        <Button>
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Continue with Github
        </Button>
      </div>
    </aside>
  );
};

export default SocialLogin;
