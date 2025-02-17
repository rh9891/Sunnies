import { atmaSans } from "@/fonts";
import ButtonBar from "@/components/ButtonBar";

export default function Hero() {
  return (
    <div className="py-4 sm:py-10 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-text-6xl md:text-7xl text-center " +
          atmaSans.className
        }
      >
        Reflect, grow, and embrace&nbsp;
        <span className="text-gradient">brighter</span> days with&nbsp;
        <span className="text-gradient">Sunnies</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Track your journey, explore insights, and
        <span className="font-semibold">&nbsp;find hope in your every day</span>
        .
      </p>
      <ButtonBar />
    </div>
  );
}
