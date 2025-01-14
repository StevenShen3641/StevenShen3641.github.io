import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Albums",
  description: "My Albums",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Albums</h1>
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

      {/* <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
        ]}
      /> */}

      {/* <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
        ]}
      /> */}
    </section>
  );
}
