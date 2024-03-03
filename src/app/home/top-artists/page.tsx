"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getTopArtists } from "@/lib/spotify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";
import { IconUsers } from "@tabler/icons-react";
import SpotifyIcon from "@/components/svg/spotify";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Loading from "@/app/loading";
import type { Artists } from "@/types/types";

export const dynamic = "force-dynamic";

const TopArtistsPage = () => {
  const [topArtists, setTopArists] = useState<Artists[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        if (session) {
          const fetchTopTracksData = async () => {
            const data = await getTopArtists();
            setTopArists(data.items);
          };
          fetchTopTracksData();
        }
      } catch (error: any) {
        console.error("Error fetching access token:", error);
      }
    };

    if (status !== "loading") {
      fetchSpotifyData();
    }
  }, [session, status]);

  if (status === "loading") return <Loading />;
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-auto mx-auto flex-col px-4">
        <CardHeader className="gap-y-2">
          <div className="flex items-center justify-between">
            <Avatar>
              <AvatarImage
                src={session?.user?.image || ""}
                alt={session?.user?.name || ""}
              />
              <AvatarFallback>
                <PersonIcon />
              </AvatarFallback>
            </Avatar>
            <SpotifyIcon />
          </div>
          <Separator className="w-full" />
          <CardTitle className="text-2xl font-bold">
            My Top 10 Spotify Artists 🎤
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center gap-4">
          {topArtists.map((artist, index) => (
            <div className="flex items-center gap-4 py-2" key={artist.id}>
              <span className="overflow-hidden w-[18px]">{index + 1}</span>
              <Image
                src={artist.images[0].url}
                width={50}
                height={50}
                alt="cover"
                className="rounded-xl"
              />
              <div className="leading-none">
                <CardTitle className="text-base font-bold">
                  <a
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline"
                  >
                    {artist.name}
                  </a>
                </CardTitle>
                <CardDescription className="text-sm flex justify-start items-center gap-x-2">
                  <IconUsers className="w-[15px] h-[15px]" />
                  {artist.followers.total.toLocaleString()}
                </CardDescription>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="py-4">
          <Button className="w-full rounded-full" variant="outline">
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TopArtistsPage;
