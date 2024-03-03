"use client";

import TypewriterComponent from "typewriter-effect";
import { IconBrandSpotify } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

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
        <Button
          className="rounded-full bg-[#1DB954] scale-110 hover:scale-125 hover:bg-[#1DB954] transition-all p-6"
          onClick={() => signIn("spotify")}
        >
          <span className="font-bold flex items-center justify-center">
            SIGN IN ON <IconBrandSpotify fill="#1DB954" className="mx-1" />
          </span>
        </Button>
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
