"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { IconBrandSpotify } from "@tabler/icons-react";
import { forwardRef } from "react";

const LoginButton = forwardRef(() => {
  return (
    <Button
      className="rounded-full bg-[#1DB954] scale-110 hover:scale-125 hover:bg-[#1DB954] transition-all p-6"
      onClick={() => signIn("spotify")}
    >
      <span className="font-bold flex items-center justify-center">
        SIGN IN ON <IconBrandSpotify fill="#1DB954" className="mx-1" />
      </span>
    </Button>
  );
});

export default LoginButton;
