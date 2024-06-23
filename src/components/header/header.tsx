import { useEffect, useState } from "react";
import DesktopNav from "./desktop";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import MobileNav from "./mobile";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <section
      className={` sticky z-20 right-0 left-0 top-0 py-8 ${
        !top &&
        `bg-[#0F1924] shadow-lg duration-500 ease-in-out shadow-green-700`
      }`}
    >
      <header
        className={`container sticky z-20 flex items-center justify-between mx-auto `}
      >
        <h1 className="font-bold text-3xl font-jetbrains text-green-500">
          &lt;WEB<span className="text-rose-600 font-bold">DEV/&gt;</span>
        </h1>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-20">
          <DesktopNav />
          <div className="flex gap-6 items-center">
            {" "}
            <Button className="border-[1px] hover:border-accent">
              Hire me
            </Button>
            <Switch />
          </div>
        </div>

        {/* Mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </header>
    </section>
  );
}
