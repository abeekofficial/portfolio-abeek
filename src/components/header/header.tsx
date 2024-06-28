import { useEffect, useState } from "react";
import DesktopNav from "./desktop";
import { Switch } from "../ui/switch";
import MobileNav from "./mobile";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { useTheme } from "@/context/ThemeContext";
import { LanguagesIcon } from "lucide-react";

const Header = (): JSX.Element => {
  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const { theme, toggleTheme } = useTheme();

  return (
    <section
      className={`sticky z-20 right-0 left-0 top-0 py-8 ${
        theme === "light" ? `bg-white shadow-lg` : ``
      } ${
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
            <Switch onClick={toggleTheme} />
            <Select>
              <SelectTrigger className={`w-[90px] px-2 text-gray-500`}>
                <LanguagesIcon className={``} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="eng"
                    className={`${theme === "light" ? `text-black` : ""}`}
                  >
                    Eng
                  </SelectItem>
                  <SelectItem
                    value="rus"
                    className={`${theme === "light" ? `text-black` : ""}`}
                  >
                    Rus
                  </SelectItem>
                  <SelectItem
                    value="uz"
                    className={`${theme === "light" ? `text-black` : ""}`}
                  >
                    Uz
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </header>
    </section>
  );
};
export default Header;
