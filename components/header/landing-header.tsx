import Link from "next/link";
import { ModeToggle } from "../toggle-theme";
import { Button } from "../ui/button";

const LandingHeader = () => {
  return (
    <nav
      id="nav"
      className=" fixed inset-x-0 left-0 top-0  z-10 flex w-full items-center justify-between  border-muted px-8 py-5 shadow-sm backdrop-blur md:px-12 md:py-6"
    >
      <p>CLC</p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/login">LogIn</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default LandingHeader;
