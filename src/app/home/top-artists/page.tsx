import TopArtistsCard from "@/components/topArtistsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Top Artists | SpotiFirst",
  description: "Identify your first and favorite artists on Spotify.",
  applicationName: "SpotiFirst",
  authors: {
    name: "Brent Baylon",
    url: "https://github.com/AnonymouseHucker29",
  },
};

export const dynamic = "force-dynamic";

const TopArtistsPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <TopArtistsCard />
    </div>
  );
};

export default TopArtistsPage;
