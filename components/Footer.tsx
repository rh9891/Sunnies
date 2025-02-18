"use client";
import { usePathname } from "next/navigation";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className={"flex justify-center " + className}>
      <img
        src={isHome ? "/Sydney.png" : "/Clouds.png"}
        alt="Sydney, Australia cityscape"
      />
    </footer>
  );
}
