import { montserrat } from "@/fonts/fonts";
import CardCarousel from "@/components/home-cards/cardCarousel";
import LandingText from "@/components/landingText";

export default function LandingPage() {
  return (
    <div className="flex-col lg:flex lg:flex-row justify-center items-center xl:items-center">
      <div
        className={`${montserrat.className} flex flex-col min-h-screen lg:w-[55%] justify-center items-center lg:items-start gap-y-10 lg:gap-y-8 p-8`}
      >
        <LandingText />
      </div>
      <div className="flex min-h-screen items-center justify-center w-auto lg:pb-10 lg:w-[45%]">
        <CardCarousel />
      </div>
    </div>
  );
}
