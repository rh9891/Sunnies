"use client";
import { usePathname } from "next/navigation";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();
  const isSydneyCityscape =
    pathname === "/" || pathname === "/signup" || pathname === "/login";

  return (
    <footer className={"flex justify-center " + className}>
      <img
        src={isSydneyCityscape ? "/Sydney.png" : "/Clouds.png"}
        alt="Sydney, Australia cityscape"
      />
    </footer>
  );
}
