"use client";

import { ThemeToggle } from "@/components/themeToggle";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import LogoIcon from "@/components/svg/logoIcon";
import ProfileButton from "./profileButton";

const Navbar = () => {
  const { data: session } = useSession();
  const [userButtonOpen, setUserButtonOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const toggleUserButtonOpen = () => {
    setUserButtonOpen((prevState) => !prevState);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 overflow-hidden flex justify-between items-center p-[10px] px-4 ${
        colorChange && "bg-[#EADDFF] dark:bg-[#1D1B20]"
      }`}
    >
      <div className="rounded-full bg-[#EADDFF] dark:bg-[#1D1B20]">
        <LogoIcon />
      </div>
      <nav className="flex justify-end items-center gap-x-5">
        {!session ? null : (
          <ProfileButton
            userButtonOpen={userButtonOpen}
            toggleUserButtonOpen={toggleUserButtonOpen}
            setUserButtonOpen={setUserButtonOpen}
          />
        )}
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
