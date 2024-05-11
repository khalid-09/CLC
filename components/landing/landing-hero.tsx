import { ChevronRightIcon } from "@radix-ui/react-icons";
import { H1, P } from "../typography";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="flex h-dvh items-center justify-center p-4 text-center"
      >
        <div className={`flex flex-col items-center justify-center `}>
          <H1>Endless laughs, stand-up specials, and much more.</H1>
          <P>Watch from anywhere, anytime. </P>
          <div className="mt-8">
            <P>
              <span className="font-medium text-primary/80">
                Ready to chuckle?{" "}
              </span>
              Enter your email or mobile number to start or resume your
              subscription.
            </P>
          </div>
          <div className="mt-3 flex flex-col items-center gap-2 md:flex-row">
            <Input type="email" placeholder="Email" />
            <Button>
              Get Started <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
