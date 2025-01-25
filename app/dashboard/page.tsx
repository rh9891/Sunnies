import type { Metadata } from "next";

import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

export const metadata: Metadata = {
  title: "Sunnies | Dashboard",
};

export default function DashboardPage() {
  const isAuthenticated: boolean = true;

  let children = <Login />;

  if (isAuthenticated) {
    children = <Dashboard />;
  }

  return <Main>{children}</Main>;
}
