"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IconBrandSpotify } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-40 min-h-screen p-5">
      <Card className="p-3">
        <CardHeader>
          <CardTitle>
            <p className="text-center">
              You need to be logged in first before you can access the page.
            </p>
          </CardTitle>
        </CardHeader>
      </Card>
      <Button
        onClick={() => signIn("spotify")}
        className="p-8 gap-x-1 rounded-full bg-[#1DB954] border-2 border-[#1DB954] hover:bg-green-600 hover:border-2"
      >
        <p className="text-lg">SIGN IN ON</p>
        <span>
          <IconBrandSpotify />
        </span>
      </Button>
    </div>
  );
};

export default LoginPage;
