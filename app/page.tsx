import AuthGuardProvider from "@/app/providers/AuthGuardProvider";
import { HomePage } from "@/views/home";

export default function Home() {
  return (<AuthGuardProvider>
    <HomePage />
  </AuthGuardProvider>);
}
