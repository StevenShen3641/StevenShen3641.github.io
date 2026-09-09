"use client";

import React, { useEffect, useState } from "react";
import { ImageGrid } from "app/components/image-grid";
import { MediaList } from "./media-list";
import { mediaItems } from "./media-data";
// If you decide to use it again, just uncomment:
// import ModelViewer from "./ModelViewer";

type GridImage = {
  src: string;
  alt: string;
  href: string;
};

const albumImages: GridImage[] = [
  {
    src: "/photos/photo1.webp",
    alt: "Roman columns",
    href: "https://open.spotify.com/track/6fafcFLhx2AfUK4ERJ6i0f",
  },
  {
    src: "/photos/photo2.webp",
    alt: "Big Ben",
    href: "https://open.spotify.com/track/6ldtGfNQLRB1YtG1EBlFtJ",
  },
  {
    src: "/photos/photo3.webp",
    alt: "Sacré-Cœur Basilica",
    href: "https://open.spotify.com/track/0cc4FyNTyTpek3hNuoslgj",
  },
  {
    src: "/photos/photo4.webp",
    alt: "Eiffel Tower",
    href: "https://open.spotify.com/track/0tuRAYSJeG3OkRrC2cfI7J",
  },
  {
    src: "/photos/photo5.webp",
    alt: "Taj Mahal",
    href: "https://open.spotify.com/track/5UuhMOxcgfBgYq7YUpEE8R",
  },
  {
    src: "/photos/photo6.webp",
    alt: "Colosseum",
    href: "https://open.spotify.com/track/1HhGLa3SEcLS7i3pQfGY2g",
  },
  {
    src: "/photos/photo7.webp",
    alt: "Colosseum",
    href: "https://open.spotify.com/track/03m7VN3A1zSCF0hYJo41MG",
  },
  {
    src: "/photos/photo8.webp",
    alt: "Colosseum",
    href: "https://open.spotify.com/track/2cfjOzSSHGp2iYCkmtbeZe",
  },
];

const podcastImages: GridImage[] = [
  {
    src: "/photos/photo10.webp",
    alt: "Roman columns",
    href: "https://music.163.com/#/djradio?id=969234750",
  },
  {
    src: "/photos/photo11.webp",
    alt: "Roman columns",
    href: "https://music.163.com/#/djradio?id=981091277",
  },
];

// external (non-Next/static) images you want to wait for as well
const externalImages: string[] = [
  "https://openflights.org/banner/StevenShen.png",
];

const allImageUrls: string[] = [
  ...albumImages.map((img) => img.src),
  ...podcastImages.map((img) => img.src),
  ...externalImages,
];

export default function InterestsContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // don't block on error
        img.src = src;
      });

    Promise.all(allImageUrls.map(loadImage)).then(() => {
      if (!cancelled) {
        setIsLoaded(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Only opacity is animated here.
  // The vertical offset comes from your global PageTransition wrapper.
  const sectionClassName =
    "transition-opacity duration-500 " +
    (isLoaded ? "opacity-100" : "opacity-0");

  return (
    <section className={sectionClassName}>
      <div className="mb-8 text-2xl font-medium tracking-tight">Music</div>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-8">
          I am an amateur electronic music composer. My artist name is{" "}
          <a
            href="https://open.spotify.com/artist/3SabvlpJbjgPlXk9RkhiaM"
            target="_blank"
            rel="noreferrer"
          >
            Crystal Sand
          </a>{" "}
          (Also{" "}
          <a
            href="https://music.163.com/#/artist?id=33349866"
            target="_blank"
            rel="noreferrer"
          >
            S.S.
          </a>{" "}
          where I post some interesting demos). I make Melodic Progressive
          House, a traditional progressive music genre (If interested, take a
          listen to{" "}
          <a
            href="https://emergent-music.com/"
            target="_blank"
            rel="noreferrer"
          >
            Emergent Shores Music
          </a>
          ). My works have been released by Summer Melody, Soluna Music, 
          Sunset Horizon and other melodic music labels.
        </p>
      </div>

      <div className="mb-6 text-xl font-medium tracking-tight">Albums</div>
      <ImageGrid columns={3} images={albumImages} />

      <div className="mb-6 text-xl font-medium tracking-tight">Podcasts</div>
      <ImageGrid columns={3} images={podcastImages} />

      <div className="mb-8 text-2xl font-medium tracking-tight">
        Flight Records
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-8">Click to see my flight data records.</p>
      </div>

      <a
        href="https://openflights.org/user/StevenShen"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://openflights.org/banner/StevenShen.png"
          alt="OpenFlights banner"
        />
      </a>

      <p className="mb-8" />

      <div className="mb-8 text-2xl font-medium tracking-tight">Media</div>
      <MediaList mediaItems={mediaItems} />

      {/* Optional future section:
      <div className="mb-8 text-2xl font-medium tracking-tight">
        Current Learning Path
      </div>
      <div className="relative left-1/2 -translate-x-1/2 w-[90vw]">
        <ModelViewer />
      </div>
      */}
    </section>
  );
}
