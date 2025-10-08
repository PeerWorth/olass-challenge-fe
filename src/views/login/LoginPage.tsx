import KaKaoLogin from "./ui/KaKaoLogin";
import LoginHeader from "./ui/LoginHeader";

const LoginPage = () => {
  return (
    <div className="bg-login-background flex flex-1 px-5">
      <div className="bg-coolNeutral00 my-auto flex h-fit w-full flex-col gap-10 rounded-3xl px-5 pt-8 pb-9">
        <LoginHeader />
        <KaKaoLogin />
      </div>
    </div>
  );
};

export default LoginPage;
