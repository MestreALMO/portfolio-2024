import { ReactNode } from "react";
import { BottomBar } from "../bottomBar";
import { TopBar } from "../topBar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopBar />
      {children}
      <BottomBar />
    </>
  );
};
