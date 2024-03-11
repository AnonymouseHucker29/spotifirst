import { Button } from "@/components/ui/button";

const MainButton = () => {
  return (
    <Button className="rounded-full bg-[#1DB954] scale-110 hover:scale-125 hover:bg-[#1DB954] transition-all p-6">
      <span className="font-bold flex items-center justify-center">
        TRY NOW!
      </span>
    </Button>
  );
};

export default MainButton;
