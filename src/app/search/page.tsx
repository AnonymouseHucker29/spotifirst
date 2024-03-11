import Search from "@/components/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | SpotiFirst",
  description: "Identify your first and favorite artists on Spotify.",
  applicationName: "SpotiFirst",
  authors: {
    name: "Brent Baylon",
    url: "https://github.com/AnonymouseHucker29",
  },
};

const SearchPage = () => {
  return (
    <section className="px-7 md:px-6 py-6 md:py-12 min-h-screen">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto md:items-stretch justify-center">
        <Search />
      </div>
    </section>
  );
};

export default SearchPage;
