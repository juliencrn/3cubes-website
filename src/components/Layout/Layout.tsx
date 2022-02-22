import { FC } from "react";
import { useLax } from "use-lax";

import Footer from "./Footer";
import Header from "./Header";

const Layout: FC = ({ children }) => {
  useSetupAnimations();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden sm:text-lg">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

function useSetupAnimations() {
  useLax({
    drivers: [
      {
        name: "scrollY",
        getValueFn: () => window.scrollY,
      },
    ],
  });
}

export default Layout;
