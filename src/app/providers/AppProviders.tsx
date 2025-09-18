import { Screen } from "@/shared/ui/screen";

import HeaderProvider from "./HeaderProvider";
import ModalProvider from "./ModalProvider";
import QueryProvider from "./QueryProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Screen>
        <ModalProvider>
          <HeaderProvider>{children}</HeaderProvider>
        </ModalProvider>
      </Screen>
    </QueryProvider>
  );
};

export default AppProviders;
