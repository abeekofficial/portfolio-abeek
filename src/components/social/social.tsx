import { Link } from "react-router-dom";
//icons
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
export default function Social() {
  const [showGithub, setShowGithub] = useState<boolean>(false);
  const [showLinkedin, setShowLinkedin] = useState<boolean>(false);
  const [showX, setShowX] = useState<boolean>(false);
  const [showTelegram, setShowTelegram] = useState<boolean>(false);
  const [showIconName, setShowIconName] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-5 mt-3">
      <div className="flex flex-col relative">
        <div
          onMouseEnter={() => setShowGithub(true)}
          onMouseLeave={() => setShowGithub(false)}
          className="rounded-full border flex items-center justify-center border-accent w-9 h-9 text-accent hover:bg-accent hover:transition-all ease-in-out duration-200 hover:text-primary hover:border-primary "
        >
          <Link to={"https://github.com/abeekofficial"}>
            <FaGithub />
          </Link>
        </div>
        {showGithub && (
          <div className="text-sm text-gray-400 text-left absolute top-11">
            Github
          </div>
        )}
      </div>
      <div className="flex flex-col relative">
        <div
          onMouseEnter={() => setShowLinkedin(true)}
          onMouseLeave={() => setShowLinkedin(false)}
          className="rounded-full border flex items-center justify-center border-accent w-9 h-9 text-accent hover:bg-accent hover:transition-all ease-in-out duration-200 hover:text-primary hover:border-primary"
        >
          <Link to={"https://linkedin.com/in/abbosbek-ruzimov/"}>
            <FaLinkedinIn />
          </Link>
        </div>
        {showLinkedin && (
          <div className="text-sm text-gray-400 text-left absolute top-11">
            Linkedin
          </div>
        )}
      </div>
      <div className="flex flex-col relative ">
        <div
          onMouseEnter={() => setShowX(true)}
          onMouseLeave={() => setShowX(false)}
          className="rounded-full border flex items-center justify-center border-accent w-9 h-9 text-accent hover:bg-accent hover:transition-all ease-in-out duration-200 hover:text-primary hover:border-primary"
        >
          <Link to={"https://x.com/abeekofficial"}>
            <FaXTwitter />
          </Link>
        </div>
        {showX && (
          <div className="text-sm text-gray-400 text-left absolute top-11">
            Twitter
          </div>
        )}
      </div>
      <div className="flex flex-col relative ">
        <div
          onMouseEnter={() => setShowTelegram(true)}
          onMouseLeave={() => setShowTelegram(false)}
          className="rounded-full border flex items-center justify-center border-accent w-9 h-9 text-accent hover:bg-accent hover:transition-all ease-in-out duration-200 hover:text-primary hover:border-primary"
        >
          <Link to={"https://t.me/abeekofficial"}>
            <FaTelegram />
          </Link>
        </div>
        {showTelegram && (
          <div className="text-sm text-gray-400 text-left absolute top-11">
            Telegram
          </div>
        )}
      </div>
      <div className="flex flex-col relative ">
        <div
          onMouseEnter={() => setShowIconName(true)}
          onMouseLeave={() => setShowIconName(false)}
          className="rounded-full border flex items-center justify-center border-accent w-9 h-9 text-accent hover:bg-accent hover:transition-all ease-in-out duration-200 hover:text-primary hover:border-primary"
        >
          <Link to={"https://instagram.com/abeekoff/"}>
            <FaInstagram />
          </Link>
        </div>
        {showIconName && (
          <div className="text-sm text-gray-400 text-left absolute top-11">
            Instagram
          </div>
        )}
      </div>
    </div>
  );
}
