import { Screen } from "@/shared/ui/screen";

import ModalProvider from "./ModalProvider";
import QueryProvider from "./QueryProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Screen>
        <ModalProvider>{children}</ModalProvider>
      </Screen>
    </QueryProvider>
  );
};

export default AppProviders;
