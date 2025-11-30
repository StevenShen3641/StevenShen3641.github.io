import React from "react";
import type { Metadata } from "next";
import InterestsContent from "./InterestsContent";

export const metadata: Metadata = {
  title: "Others",
  description: "Personal Interests",
};

export default function InterestsPage() {
  return <InterestsContent />;
}
