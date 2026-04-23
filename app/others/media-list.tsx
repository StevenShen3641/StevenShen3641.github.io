import React from "react";
import type { MediaItem } from "./media-data";

interface MediaListProps {
  mediaItems: MediaItem[];
}

export function MediaList({ mediaItems }: MediaListProps) {
  return (
    <>
      <div className="space-y-6">
        {mediaItems.map((mediaItem, index) => (
          <a
            key={index}
            href={mediaItem.url === "" ? undefined : mediaItem.url}
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
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l10.937 6.015c1.3.715 1.3 2.572 0 3.287L7.279 19.327C6.03 20.014 4.5 19.11 4.5 17.684V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {mediaItem.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm group-hover:opacity-80 transition-opacity duration-200">
                  {mediaItem.time}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
