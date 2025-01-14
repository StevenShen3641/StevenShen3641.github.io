import React from "react";

export function LectureList({ heading, lectures }) {
    return (
      <>
        <h2 className="mb-6 text-xl font-medium tracking-tight">{heading}</h2>
        <div className="space-y-6">
          {lectures.map((lecture, index) => (
            <a
              key={index}
              href={lecture.url === "" ? undefined : lecture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:cursor-pointer"
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline">
                  <span className="inline-flex items-center text-black dark:text-white font-medium tracking-tight group-hover:text-[#D74fff] transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {lecture.title}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm group-hover:opacity-80 transition-opacity duration-200">
                    {lecture.time}
                  </span>
                </div>
                {/* <p className="prose prose-neutral dark:prose-invert pt-3">
                  {lecture.description}
                </p> */}
              </div>
            </a>
          ))}
        </div>
      </>
    );
  }