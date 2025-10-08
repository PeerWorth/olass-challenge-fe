import { LoginPage } from "@/views/login";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoginPage />
      {children}
    </>
  );
};

export default LoginLayout;
