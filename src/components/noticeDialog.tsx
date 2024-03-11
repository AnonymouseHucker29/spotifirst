"use client";

import { signIn } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconBrandSpotify } from "@tabler/icons-react";

const NoticeDialog = () => {
  return (
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
            <span className="font-black">won&apos;t work</span> on your Spotify
            account unless I granted you access to test this app in development
            mode.
          </span>
          <span>
            If you wish to test this app in development mode, please reach me on
            my socials.
          </span>
          <span>
            If you have successfully been granted by me to access the app, you
            can now proceed in using the app.
          </span>
        </DialogDescription>
        <DialogFooter className="pt-4">
          <Button
            className="rounded-full bg-[#1DB954] hover:bg-[#1DB954] p-5"
            onClick={() => {
              signIn("spotify");
            }}
          >
            I understand, proceed
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NoticeDialog;
