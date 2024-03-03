"use client";

import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { searchTracks } from "@/lib/spotify";
import { SearchIcon } from "lucide-react";
import { montserrat } from "@/fonts/fonts";
import { ReloadIcon } from "@radix-ui/react-icons";
import type { Tracks } from "@/types/types";
import Image from "next/image";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cachedResults, setCachedResults] = useState<{
    [key: string]: Tracks[];
  }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchResults = useMemo(() => {
    return cachedResults[searchValue] || [];
  }, [cachedResults, searchValue]);

  useEffect(() => {
    if (!searchValue.trim()) return;

    if (cachedResults[searchValue]) {
      setLoading(false);
      return;
    }
    setLoading(true);

    const timerId = setTimeout(() => {
      fetchSpotifyData();
    }, 200);

    return () => clearTimeout(timerId);
  }, [searchValue]);

  const fetchSpotifyData = async () => {
    try {
      const data = await searchTracks(searchValue);
      setCachedResults((prevState) => ({
        ...prevState,
        [searchValue]: data.tracks.items,
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(`An error occurred while fetching data. ${error}`);
    }
  };

  return (
    <section className="px-7 md:px-6 py-6 md:py-12 min-h-screen">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto md:items-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-8">
          <div
            className={`${montserrat.className} flex flex-col justify-center items-center md:items-start gap-1`}
          >
            <h1 className="text-3xl font-bold tracking-tight">
              Search for Music
            </h1>
            <p className="font-medium">Find your groove.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[400px]">
              <div className="relative">
                <Input
                  className="w-full inset-y-0 pr-10 peer h-10"
                  placeholder="Search for Spotify tracks"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  autoFocus
                  type="search"
                />
                <SearchIcon className="absolute right-3 top-3 h-4 w-4 peer-readonly:opacity-50" />
              </div>
              <p className="flex flex-col items-end text-xs">
                Powered by Spotify
              </p>
            </div>
          </div>
        </div>
        {searchValue && (
          <p>
            Showing 10 personalized results related to:{" "}
            <span className="font-bold">"{searchValue}"</span>
          </p>
        )}
        {loading && (
          <div className="flex justify-center items-center w-full">
            <ReloadIcon
              className="animate-spin transition-all"
              width={30}
              height={30}
            />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid md:grid-cols-2 gap-4 md:justify-center">
          {searchResults.map((track) => (
            <div className="grid gap-4" key={track.id}>
              <div className="flex items-center gap-4">
                <Image
                  alt="Album cover"
                  className="rounded-xl object-cover w-auto h-auto"
                  height={64}
                  src={track.album.images[0].url}
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width={64}
                />
                <div className="grid gap-1.5">
                  <h3 className="font-semibold hover:underline leading-tight">
                    <a
                      href={track.album.external_urls.spotify}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline"
                    >
                      {track.name}
                    </a>
                  </h3>
                  <p className="text-sm leading-none font-normal">
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
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
