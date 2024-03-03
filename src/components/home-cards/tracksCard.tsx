import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTracksHomeCard } from "@/data/homeCardData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { IconUserCircle } from "@tabler/icons-react";
import { ImageIcon } from "lucide-react";
import SpotifyIcon from "@/components/svg/spotify";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const TracksCard = () => {
  return (
    <Card className="flex flex-col justify-center items-center w-full max-w-sm md:max-w-md h-full mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-x-20 font-bold cursor-default">
          <IconUserCircle width={45} height={45} />
          TRACKS
          <SpotifyIcon />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Separator className="w-full" />
        {DataTracksHomeCard.map((track, index) => (
          <div
            className="flex items-center justify-start gap-x-5 py-3"
            key={track.id}
          >
            {index + 1}
            <Avatar>
              <AvatarImage src={track.album.imageUrl} alt="albums" />
              <AvatarFallback>
                <ImageIcon />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-center leading-none">
              <h3 className="text-base font-bold">{track.songTitle}</h3>
              <h6 className="text-sm text-muted-foreground dark:font-extralight">
                {track.artist} <span className="font-semibold">•</span>{" "}
                {track.album.date}
              </h6>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="gap-x-3">
        <InfoCircledIcon />
        <p className="text-xs font-normal">
          This is only a sample list. Please login first to view your own list.
        </p>
      </CardFooter>
    </Card>
  );
};

export default TracksCard;
