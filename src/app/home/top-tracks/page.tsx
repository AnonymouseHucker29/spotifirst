import TopTracksCard from "@/components/topTracksCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Top Tracks | SpotiFirst",
  description: "Identify your first and favorite artists on Spotify.",
  applicationName: "SpotiFirst",
  authors: {
    name: "Brent Baylon",
    url: "https://github.com/AnonymouseHucker29",
  },
};

export const dynamic = "force-dynamic";

const TopTracksPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <TopTracksCard />
    </div>
  );
};

export default TopTracksPage;
