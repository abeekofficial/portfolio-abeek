import Links from "@/data/links";
import { Link, useLocation } from "react-router-dom";

export default function DesktopNav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex gap-8 items-center">
      {Links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`${
            pathname === link.path && "text-accent border-b-2 border-accent "
          } font-medium font-jetbrains hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
