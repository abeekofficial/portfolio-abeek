import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Links from "@/data/links";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const location = useLocation();
  const pathname = location.pathname;

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
        <CiMenuFries className="text-2xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <Link to={"/"}>
          <h1 className="my-10 font-bold text-3xl font-jetbrains text-green-500">
            &lt;WEB<span className="text-rose-600 font-bold">DEV/&gt;</span>
          </h1>
        </Link>
        <nav className="flex flex-col gap-4">
          {Links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-accent bg-gray-700  border-accent"
              }font-medium  font-jetbrains md:px-[153px] px-[140px] hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}