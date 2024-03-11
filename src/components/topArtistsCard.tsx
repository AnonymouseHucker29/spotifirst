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
import { IconUserCircle, IconUsers } from "@tabler/icons-react";
import SpotifyIcon from "@/components/svg/spotify";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Artists } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="grid gap-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="grid gap-4" key={i}>
          <div className="flex items-center gap-4">
            <Skeleton className="w-[15px] h-[15px] rounded-full" />
            <Skeleton className="w-[64px] h-[64px] rounded-xl" />
            <div className="flex flex-col gap-y-3">
              <Skeleton className="w-[150px] h-[15px] rounded-full" />
              <div className="flex justify-start items-center gap-x-3">
                <Skeleton className="w-[10px] h-[10px] rounded-full" />
                <Skeleton className="w-[100px] h-[15px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TopArtistsCard = () => {
  const [topArtists, setTopArists] = useState<Artists[]>([]);
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        if (session) {
          const fetchTopTracksData = async () => {
            const data = await getTopArtists();
            setTopArists(data.items);
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
    <Card className="w-auto mx-auto flex-col px-4">
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
          My Top 10 Spotify Artists 🎤
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {topArtists.map((artist, index) => (
              <div className="grid gap-4" key={artist.id}>
                <div className="flex items-center gap-4">
                  <span className="overflow-hidden w-[18px]">{index + 1}</span>
                  <Image
                    src={artist.images[1].url}
                    width={64}
                    height={64}
                    alt="cover"
                    className="rounded-xl object-cover"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
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

export default TopArtistsCard;
