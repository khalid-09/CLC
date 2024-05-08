import { P } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLC | LogIn",
  description: "A stand up comedy streaming website",
};

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <P className="px-16">CLC</P>
      {children}
    </>
  );
};

export default LoginLayout;
