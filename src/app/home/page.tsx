import PersonalCard from "@/components/personalCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | SpotiFirst",
  description: "Identify your first and favorite artists on Spotify.",
  applicationName: "SpotiFirst",
  authors: {
    name: "Brent Baylon",
    url: "https://github.com/AnonymouseHucker29",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <PersonalCard />
    </div>
  );
}
