import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import ModelViewer from "./ModelViewer";


export const metadata: Metadata = {
  title: "Others",
  description: "Personal Interests",
};

export default function Interests() {
  return (
    <section>
      <div className="mb-8 text-2xl font-medium tracking-tight">Music</div>
      <div className="prose prose-neutral dark:prose-invert">
      <p className="mb-8">
        I am an amateur electronic music composer. My artist name is{" "}
        <a
          href={"https://open.spotify.com/artist/3SabvlpJbjgPlXk9RkhiaM"}
          target="_blank"
        >
          Crystal Sand
        </a>{" "}
        (Also{" "}
        <a href={"https://music.163.com/#/artist?id=33349866"} target="_blank">
          S.S.
        </a>{" "}
        where I post some interesting demos). I make Melodic Progressive House,
        a traditional progressive music genre (If interested, take a listen to{" "}
        <a href={"https://emergent-music.com/emergent-shores"} target="_blank">
          Emergent Shores Music
        </a>
        ). My works have been released by Soluna Music, Progressive Dreams,
        Sunset Horizon and other melodic music labels.
      </p>
      </div>
      <div className="mb-6 text-xl font-medium tracking-tight">Albums</div>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Roman columns",
            href: "https://open.spotify.com/track/6fafcFLhx2AfUK4ERJ6i0f",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Big Ben",
            href: "https://open.spotify.com/track/6ldtGfNQLRB1YtG1EBlFtJ",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Sacré-Cœur Basilica",
            href: "https://open.spotify.com/track/0cc4FyNTyTpek3hNuoslgj",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "Eiffel Tower",
            href: "https://open.spotify.com/track/0tuRAYSJeG3OkRrC2cfI7J",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Taj Mahal",
            href: "https://open.spotify.com/track/5UuhMOxcgfBgYq7YUpEE8R",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Colosseum",
            href: "https://open.spotify.com/track/1HhGLa3SEcLS7i3pQfGY2g",
          },
          {
            src: "/photos/photo7.jpg",
            alt: "Colosseum",
            href: "https://open.spotify.com/track/03m7VN3A1zSCF0hYJo41MG",
          },
          {
            src: "/photos/photo8.jpg",
            alt: "Colosseum",
            href: "https://open.spotify.com/track/2cfjOzSSHGp2iYCkmtbeZe",
          },
        ]}
      />
      <div className="mb-6 text-xl font-medium tracking-tight">Podcasts</div>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo10.jpg",
            alt: "Roman columns",
            href: "https://music.163.com/#/djradio?id=969234750",
          },
          {
            src: "/photos/photo11.jpg",
            alt: "Roman columns",
            href: "https://music.163.com/#/djradio?id=981091277",
          },
        ]}
      />
      
      <div className="mb-8 text-2xl font-medium tracking-tight">Flight Records</div>
      <div className="prose prose-neutral dark:prose-invert">
      <p className="mb-8">
      Click to see my flight data records.
      </p>
      </div>
      <a href='https://openflights.org/user/StevenShen' target="_blank"><img src='https://openflights.org/banner/StevenShen.png'></img></a>              
      <p className="mb-8"></p>
      {/* <div className="mb-8 text-2xl font-medium tracking-tight">Current Learning Path</div>
      <div className="relative left-1/2 -translate-x-1/2 w-[90vw]">
        <ModelViewer />
      </div> */}
    </section>
  );
}
