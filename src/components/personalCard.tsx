"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getMyProfile } from "@/lib/spotify";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconBrandSpotify,
  IconUsers,
  IconFlag,
  IconPremiumRights,
} from "@tabler/icons-react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import type { Profile } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";

export const dynamic = "force-dynamic";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[260px] w-full gap-y-4">
      <Skeleton className="rounded-full w-36 h-36" />
      <div className="flex flex-col gap-y-2">
        <Skeleton className="rounded-xl w-36 h-6" />
        <Skeleton className="rounded-xl w-36 h-6" />
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <Skeleton className="rounded-xl w-14 h-4" />
        <Skeleton className="rounded-xl w-14 h-4" />
        <Skeleton className="rounded-xl w-14 h-4" />
      </div>
    </div>
  );
};

const PersonalCard = () => {
  const { data: session, status } = useSession();
  const [profileData, setProfileData] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        if (session) {
          const fetchProfileData = async () => {
            const data = await getMyProfile();
            setProfileData(data);
            setIsLoading(false);
          };
          fetchProfileData();
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
    <Card className="flex flex-col justify-center items-center p-3">
      <CardHeader className="flex flex-col items-center justify-center gap-y-5">
        <CardTitle>My Spotify Stats</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-y-4">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="flex flex-col justify-center items-center gap-y-4">
              <div className="relative">
                {profileData?.images[1].url && (
                  <Image
                    src={profileData?.images[1].url || ""}
                    width={150}
                    height={150}
                    alt={`${profileData?.display_name}'s image.`}
                    className="rounded-full border-4 border-[#1DB954]"
                    priority
                  />
                )}
                <span className="absolute right-[7px] top-[99px]">
                  <IconBrandSpotify className="fill-[#1DB954] w-14 h-14" />
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-2 cursor-default">
                <CardTitle className="group relative">
                  <span className="absolute opacity-50 hover:opacity-100 bottom-1 left-[155px]">
                    <a
                      href={profileData?.external_urls.spotify}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <ExternalLinkIcon />
                    </a>
                  </span>
                  <p className="font-bold group-hover:underline">
                    {profileData?.display_name}
                  </p>
                </CardTitle>
                <CardDescription className="font-medium">
                  {profileData?.email}
                </CardDescription>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-5">
              <p
                className="opacity-70 flex justify-center items-center gap-x-1"
                title="Current followers"
              >
                <IconUsers className="scale-75" />
                {profileData?.followers.total}
              </p>
              <p
                className="opacity-70 flex justify-center items-center gap-x-1"
                title="Country"
              >
                <IconFlag className="scale-75" />
                {profileData?.country}
              </p>
              <p
                className="opacity-70 flex justify-center items-center gap-x-1"
                title={`Spotify ${profileData?.product} plan`}
              >
                <IconPremiumRights />
                {profileData?.product.charAt(0).toUpperCase()}
                {profileData?.product.slice(1)}
              </p>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-center items-center gap-x-6">
        <Link href="/home/top-tracks">
          <Button className="rounded-full bg-[#1DB954] hover:scale-105 hover:bg-[#1DB954] transition-all p-4">
            Top Tracks
          </Button>
        </Link>
        <Link href="/home/top-artists">
          <Button className="rounded-full bg-[#1DB954] hover:scale-105 hover:bg-[#1DB954] transition-all p-4">
            Top Artists
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PersonalCard;
