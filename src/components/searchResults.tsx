import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const SearchResults = ({ searchResults, searchValue, loading, error }: any) => {
  return (
    <>
      {searchValue && (
        <p>
          Showing 10 personalized results related to:{" "}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
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
      <div className="grid md:grid-cols-2 gap-4">
        {searchResults.map((track: any) => (
          <div className="grid gap-4" key={track.id}>
            <div className="flex items-center gap-4">
              <a
                href={track.album.external_urls.spotify}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={track.album.images[0].url}
                  alt="Album cover"
                  height={64}
                  width={64}
                  className="rounded-xl object-cover"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                />
              </a>
              <div className="grid gap-1.5">
                <h3 className="font-semibold hover:underline leading-tight">
                  <a
                    href={track.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:underline"
                  >
                    {track.name}
                  </a>
                </h3>
                <p className="text-sm leading-none font-normal">
                  {track.artists
                    .map((artist: any) => (
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
                    .reduce((prev: any, curr: any) => (
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
    </>
  );
};

export default SearchResults;
