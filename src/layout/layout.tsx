import PageTransition from "@/components/PageTransition";
import Header from "@/components/header/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <PageTransition>{children}</PageTransition>
    </div>
  );
};

export default Layout;
