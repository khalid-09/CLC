import SocialLogin from "@/components/auth/social-login";
import { P } from "@/components/typography";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <P className="px-16">CLC</P>
      <main
        className={`mt- mt-16 flex h-dvh flex-col items-center p-6 md:mt-0 md:-translate-y-20 md:flex-row md:justify-center md:p-0`}
      >
        {children}
        <SocialLogin />
      </main>
    </>
  );
};

export default AuthLayout;
