import { Screen } from "@/shared/ui/screen";

import AuthGuardProvider from "./AuthGuardProvider";
import HeaderProvider from "./HeaderProvider";
import KakaoProvider from "./KakaoProvider";
import ModalProvider from "./ModalProvider";
import QueryProvider from "./QueryProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <KakaoProvider />
      <Screen>
        <ModalProvider>
          <HeaderProvider>
            <AuthGuardProvider>{children}</AuthGuardProvider>
          </HeaderProvider>
        </ModalProvider>
      </Screen>
    </QueryProvider>
  );
};

export default AppProviders;
