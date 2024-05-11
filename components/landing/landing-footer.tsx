import Link from "next/link";
import { H1, H3, P } from "../typography";

const Footer = () => {
  return (
    <footer className="px-4 py-5">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <H3 className="text-center md:text-start">CLC</H3>
            <P className="text-center text-sm text-muted-foreground">
              Laugh with us
            </P>
          </div>
          <div className="flex flex-row  flex-wrap items-center justify-center gap-5 text-sm md:flex-col md:items-start">
            <P>Links:</P>
            <Link
              href="/about"
              className="text-muted-foreground hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:underline"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CLC Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
