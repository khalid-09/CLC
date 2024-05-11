import { faqs } from "@/contansts/faqs";
import { H1, P } from "../typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { GeistSans } from "geist/font/sans";

const FAQS = () => {
  return (
    <section className="my-10 md:p-10 ">
      <H1>Frequnetly Asked Questions</H1>
      <Accordion
        type="single"
        collapsible
        className={` m-auto mt-3 p-4 md:w-2/3`}
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.item} value={faq.item}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className={`${GeistSans.className}`}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10 space-y-4 p-4">
        <P>
          Ready to chuckle? Enter your email or mobile number to start or resume
          your subscription.
        </P>
        <div className="m-auto flex items-center  justify-center gap-2">
          <Input type="email" placeholder="Email" className="w-fit" />
          <Button className="grow-0">
            Get Started <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
