import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Links from "@/data/links";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { useTheme } from "@/context/ThemeContext";

export default function MobileNav() {
  const location = useLocation();
  const pathname = location.pathname;
  const { toggleTheme, theme } = useTheme();

  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries
          className={`text-2xl font-semibold text-accent ${
            theme === "light" ? `text-black font-black` : ""
          }`}
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center p-0">
        <Link to={"/"}>
          <h1 className="my-10 font-bold text-3xl font-jetbrains text-green-500">
            &lt;WEB<span className="text-rose-600 font-bold">DEV/&gt;</span>
          </h1>
        </Link>
        <nav className="inline-block w-full text-center">
          {Links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-accent bg-gray-700  border-accent"
              }font-medium  font-jetbrains mt-3 inline-block w-full  hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <Switch onClick={toggleTheme} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
