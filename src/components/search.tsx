"use client";

import { useEffect, useMemo, useState } from "react";
import { montserrat } from "@/fonts/fonts";
import { Tracks } from "@/types/types";
import { searchTracks } from "@/lib/spotify";
import SearchInput from "@/components/searchInput";
import SearchResults from "@/components/searchResults";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cachedResults, setCachedResults] = useState<{
    [key: string]: Tracks[];
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchResults = useMemo(() => {
    return cachedResults[searchValue] || [];
  }, [cachedResults, searchValue]);

  useEffect(() => {
    if (!searchValue.trim()) return;

    if (cachedResults[searchValue]) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);

    const fetchSpotifyData = async () => {
      try {
        const data = await searchTracks(searchValue);
        setCachedResults((prevState) => ({
          ...prevState,
          [searchValue]: data.tracks.items,
        }));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(`An error occurred while fetching data. ${error}`);
      }
    };

    const timerId = setTimeout(() => {
      fetchSpotifyData();
    }, 200);

    return () => clearTimeout(timerId);
  }, [searchValue, cachedResults]);

  return (
    <>
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
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <SearchResults
        searchResults={searchResults}
        searchValue={searchValue}
        loading={isLoading}
        error={error}
      />
    </>
  );
};

export default Search;
