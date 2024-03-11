"use client";

import TypewriterComponent from "typewriter-effect";
import { useSession } from "next-auth/react";
import Link from "next/link";
import MainButton from "@/components/mainButton";
import NoticeDialog from "@/components/noticeDialog";

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
        <NoticeDialog />
      ) : (
        <Link href="/home">
          <MainButton />
        </Link>
      )}
    </>
  );
};

export default LandingText;
