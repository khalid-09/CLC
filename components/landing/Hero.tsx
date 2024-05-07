import { ChevronRightIcon } from '@radix-ui/react-icons';
import { H1, P } from '../typography';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import LandingHeader from '../header/landing-header';

const Hero = () => {
  return (
    <>
      <section className="flex -translate-y-10 p-4 items-center h-dvh justify-center">
        <div className="flex flex-col justify-center items-center ">
          <H1>Endless laughs, stand-up specials, and much more.</H1>
          <P>Watch from anywhere, anytime. </P>
          <div className="mt-8 md:max-w-none max-w-96">
            <P>
              Ready to chuckle? Enter your email or mobile number to start or
              resume your subscription.
            </P>
          </div>
          <div className="flex md:flex-row flex-col gap-2 mt-3 items-center">
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
