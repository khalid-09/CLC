import Link from "next/link";
import { ModeToggle } from "../toggle-theme";
import { Button } from "../ui/button";

const LandingHeader = () => {
  return (
    <nav className="flex w-full items-center justify-between px-8  py-5 md:px-12 md:py-6">
      <div>CLC</div>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/auth/login">LogIn</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default LandingHeader;
