"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getTopTracks } from "@/lib/spotify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SpotifyIcon from "@/components/svg/spotify";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Loading from "@/app/loading";
import { PersonIcon } from "@radix-ui/react-icons";
import type { Tracks } from "@/types/types";

export const dynamic = "force-dynamic";

const TopTracksPage = () => {
  const [topTracks, setTopTracks] = useState<Tracks[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        if (session) {
          const fetchTopTracksData = async () => {
            const data = await getTopTracks();
            setTopTracks(data.items);
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
      <Card className="w-auto mx-auto flex-col">
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
            My Top 10 Spotify Tracks 🎶
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center gap-4">
          {topTracks.map((track, index) => (
            <div className="flex items-center gap-4 py-2" key={track.id}>
              <span className="overflow-hidden w-[18px]">{index + 1}</span>
              <Image
                src={track.album.images[2].url}
                width={50}
                height={50}
                alt="cover"
                className="rounded-xl"
              />
              <div className="leading-none">
                <CardTitle className="text-base font-bold">
                  <a
                    href={track.album.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline"
                  >
                    {track.name}
                  </a>
                </CardTitle>
                <CardDescription className="text-sm flex flex-col">
                  {track.album.name} • {track.album.release_date.slice(0, 4)}
                  <span className="flex">
                    {track.artists
                      .map((artist) => (
                        <a
                          href={artist.external_urls.spotify}
                          target="_blank"
                          rel="noreferrer noopener"
                          key={artist.id}
                          className="hover:underline"
                        >
                          {artist.name}
                        </a>
                      ))
                      .reduce((prev, curr) => (
                        <>
                          {prev}, {curr}
                        </>
                      ))}
                  </span>
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

export default TopTracksPage;
