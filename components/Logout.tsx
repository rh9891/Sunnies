"use client";
import { usePathname } from "next/navigation";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";

export default function Logout() {
  const { logout, currentUser } = useAuth();
  const pathname = usePathname();

  if (
    !currentUser ||
    pathname === "/" ||
    pathname === "/signup" ||
    pathname === "/login"
  ) {
    return null;
  }

  return <Button text="Logout" variant="light" onClick={() => logout()} />;
}
