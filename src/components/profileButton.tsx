import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import {
  DashboardIcon,
  ExitIcon,
  MagnifyingGlassIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const ProfileButton = ({
  userButtonOpen,
  toggleUserButtonOpen,
  setUserButtonOpen,
}: any) => {
  const { data: session } = useSession();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <DropdownMenu open={userButtonOpen} onOpenChange={toggleUserButtonOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full shadow-lg bg-[#EADDFF] dark:bg-[#1D1B20] hover:bg-[#EADDFF]/80 hover:dark:bg-[#1D1B20]/60"
          onClick={() => setUserButtonOpen(true)}
        >
          <span className="flex justify-center items-center md:gap-x-2 font-bold">
            <Avatar>
              <AvatarImage
                src={session?.user?.image || ""}
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
                  Hi, <span className="font-bold">{session?.user?.name}</span>
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
  );
};

export default ProfileButton;
