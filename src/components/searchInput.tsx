import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchInput = ({ searchValue, setSearchValue }: any) => {
  return (
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
        <SearchIcon className="absolute right-3 top-3 h-4 w-4" />
      </div>
      <p className="flex flex-col items-end text-xs">Powered by Spotify</p>
    </div>
  );
};

export default SearchInput;
