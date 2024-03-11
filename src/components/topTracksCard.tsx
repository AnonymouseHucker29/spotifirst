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
import type { Tracks } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import { IconUserCircle } from "@tabler/icons-react";

const Loading = () => {
  return (
    <div className="grid gap-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="grid gap-4" key={i}>
          <div className="flex items-center gap-4">
            <Skeleton className="w-[15px] h-[15px] rounded-full" />
            <Skeleton className="w-[64px] h-[64px] rounded-xl" />
            <div className="flex flex-col gap-y-3">
              <Skeleton className="w-[100px] h-[15px] rounded-full" />
              <Skeleton className="w-[150px] h-[15px] rounded-full" />
              <Skeleton className="w-[50px] h-[15px] rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TopTracksCard = () => {
  const [topTracks, setTopTracks] = useState<Tracks[]>([]);
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        if (session) {
          const fetchTopTracksData = async () => {
            const data = await getTopTracks();
            setTopTracks(data.items);
            setIsLoading(false);
          };
          fetchTopTracksData();
        }
      } catch (error: any) {
        console.error("Error fetching access token:", error);
      }
    };

    if (status !== "unauthenticated") {
      fetchSpotifyData();
    }
  }, [session, status]);

  return (
    <Card className="w-fit mx-auto flex-col">
      <CardHeader className="gap-y-2">
        <div className="flex items-center justify-between">
          <Avatar>
            <AvatarImage
              src={session?.user?.image || ""}
              alt={session?.user?.name || ""}
            />
            <AvatarFallback>
              <IconUserCircle width={45} height={45} />
            </AvatarFallback>
          </Avatar>
          <SpotifyIcon />
        </div>
        <Separator className="w-full" />
        <CardTitle className="text-xl font-bold">
          My Top 10 Spotify Tracks 🎶
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {topTracks.map((track, index) => (
              <div className="grid gap-4" key={track.id}>
                <div className="flex items-center gap-4">
                  <span className="overflow-hidden w-[18px]">{index + 1}</span>
                  <a
                    href={track.album.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src={track.album.images[1].url}
                      width={64}
                      height={64}
                      alt="Track cover"
                      className="rounded-xl object-cover"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                  <div className="leading-none">
                    <CardTitle className="text-base font-bold">
                      <a
                        href={track.external_urls.spotify}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:underline"
                      >
                        {track.name}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-sm flex flex-col">
                      <a
                        href={track.album.external_urls.spotify}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:underline"
                      >
                        {track.album.name}
                      </a>
                      {/* •{" "}
                        {track.album.release_date.slice(0, 4)} */}
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
              </div>
            ))}
          </>
        )}
      </CardContent>
      <CardFooter className="py-4">
        <Button
          className="w-full rounded-full"
          variant="outline"
          disabled={isLoading}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopTracksCard;
