"use client";

import { ThemeToggle } from "@/components/themeToggle";
import { useSession, signOut } from "next-auth/react";
import {
  TriangleUpIcon,
  TriangleDownIcon,
  DashboardIcon,
  MagnifyingGlassIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [userButtonOpen, setUserButtonOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
    <nav
      className={`sticky top-0 z-30 overflow-hidden flex justify-end items-center p-2 gap-x-5 ${
        colorChange && "bg-[#EADDFF] dark:bg-[#1D1B20]"
      }`}
    >
      {!session ? null : (
        <>
          <DropdownMenu
            open={userButtonOpen}
            onOpenChange={toggleUserButtonOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full shadow-lg bg-[#EADDFF] dark:bg-[#1D1B20] hover:bg-[#EADDFF]/80 hover:dark:bg-[#1D1B20]/60"
                onClick={() => setUserButtonOpen(true)}
              >
                <span className="flex justify-center items-center md:gap-x-2 font-bold">
                  <Avatar>
                    <AvatarImage
                      src={session.user?.image || ""}
                      className="scale-75 rounded-full"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  {!isMobile && session?.user?.name}
                  {userButtonOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto">
              {isMobile && (
                <>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="flex justify-start items-center gap-x-6">
                      <h1 className="text-base font-medium">
                        Hi,{" "}
                        <span className="font-bold">{session?.user?.name}</span>
                      </h1>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator></DropdownMenuSeparator>
                </>
              )}
              <DropdownMenuGroup className="text-base font-medium">
                <Link href="/">
                  <DropdownMenuItem className="flex justify-start items-center gap-x-5">
                    <DashboardIcon />
                    Menu
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/search">
                  <DropdownMenuItem className="flex justify-start items-center gap-x-5">
                    <MagnifyingGlassIcon />
                    Search
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex justify-start items-center gap-x-5"
                  onClick={() => signOut()}
                >
                  <ExitIcon />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
