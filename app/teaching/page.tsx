import React from "react";
import type { Metadata } from "next";
import { LectureList } from "./lecture-list";
import { lecturesTA, lecturesIns } from "./teaching-data";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching Experiences",
};

export default function Teaching() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Teaching</h1>
      {/* <LectureList heading="Instructor" lectures={lecturesIns} /> */}
      <LectureList heading="Teaching Assistant" lectures={lecturesTA} />
    </section>
  );
}
