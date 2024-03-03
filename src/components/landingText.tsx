"use client";

import TypewriterComponent from "typewriter-effect";
import { IconBrandSpotify } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const LandingText = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-center lg:text-start">
        Identify which{" "}
        <span className="inline-block w-[150px] md:w-[200px] lg:w-[290px]">
          <TypewriterComponent
            options={{
              strings: ["tracks", "artists"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: "natural",
              cursor: "|",
            }}
          />
        </span>
        are on the loop on your <span className="text-[#1DB954]">Spotify </span>
        account.
      </h1>
      {!session ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-[#1DB954] scale-110 hover:scale-125 hover:bg-[#1DB954] transition-all p-6">
              <span className="font-bold flex items-center justify-center">
                SIGN IN ON <IconBrandSpotify fill="#1DB954" className="mx-1" />
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="p-10 w-full max-w-sm">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Notice</DialogTitle>
            </DialogHeader>
            <DialogDescription className="flex flex-col font-normal text-sm gap-y-4">
              <span>
                Due to Spotify&apos;s policies, this app{" "}
                <span className="font-black">won&apos;t work</span> on your
                Spotify account unless I granted you access to test this app in
                development mode.
              </span>
              <span>
                If you wish to test this app in development mode, please reach
                me on my socials.
              </span>
              <span>
                If you have successfully been granted by me to access the app,
                you can now proceed in using the app.
              </span>
            </DialogDescription>
            <DialogFooter>
              <Button
                className="rounded-full bg-[#1DB954] hover:bg-[#1DB954] transition-all p-3"
                onClick={() => {
                  signIn("spotify");
                }}
              >
                I understand, proceed
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Link href="/home">
          <Button className="rounded-full bg-[#1DB954] scale-110 hover:scale-125 hover:bg-[#1DB954] transition-all p-6">
            <span className="font-bold flex items-center justify-center">
              TRY NOW!
            </span>
          </Button>
        </Link>
      )}
    </>
  );
};

export default LandingText;
