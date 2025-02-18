"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import InsightsModal from "@/components/InsightsModal";

export default function ViewInsights() {
  const pathname = usePathname();
  const [insightsModalOpen, setInsightsModalOpen] = useState(false);
  const { currentUser } = useAuth();

  if (
    !currentUser ||
    pathname === "/" ||
    pathname === "/signup" ||
    pathname === "/login"
  ) {
    return null;
  }

  return (
    <>
      <Button
        text="View Insights"
        variant="dark"
        onClick={() => setInsightsModalOpen(true)}
      />
      {insightsModalOpen && (
        <InsightsModal onCloseAction={() => setInsightsModalOpen(false)} />
      )}
    </>
  );
}
