import Link from 'next/link';
import { ModeToggle } from '../toggle-theme';
import { Button } from '../ui/button';

const LandingHeader = () => {
  return (
    <nav className="w-full md:px-12 px-8 md:py-6 py-5  flex justify-between items-center">
      <div>CLC</div>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default LandingHeader;
