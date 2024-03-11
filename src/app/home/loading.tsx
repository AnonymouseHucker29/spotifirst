import { ReloadIcon } from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <ReloadIcon
        className="animate-spin transition-all"
        width={30}
        height={30}
      />
    </div>
  );
}
