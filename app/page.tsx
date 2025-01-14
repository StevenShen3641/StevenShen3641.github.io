import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.spotify} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 filter-purple hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      {/* <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Portfolio, made simple!
      </h1> */}

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a senior undergraduate at{" "}
          <a href={"https://www.cuhk.edu.cn/en"} target="_blank">
            The Chinese University of Hong Kong, Shenzhen
          </a>{" "}
          advised by{" "}
          <a href={"https://pinjiahe.github.io/"} target="_blank">
            Prof. Pinjia He.
          </a>{" "}
          My research focus broadly spans Software Engineering, Software
          Security, and AI for SE. I was very fortunate to work with{" "}
          <a
            href={"https://sites.google.com/site/kexinpeisite/"}
            target="_blank"
          >
            Prof. Kexin Pei
          </a>{" "}
          at The University of Chicago as an undergraduate intern in the summer
          of 2024.
        </p>
        <p>
          I am also an amateur electronic music composer. My artist name is{" "}
          <a
            href={"https://open.spotify.com/artist/3SabvlpJbjgPlXk9RkhiaM"}
            target="_blank"
          >
            Crystal Sand
          </a>
          . My favorite genre is Melodic Progressive House, a traditional music
          type that delivers the feelings of ocean, sunlight, and breeze (If
          interested, take a listen to{" "}
          <a
            href={"https://emergent-music.com/emergent-shores"}
            target="_blank"
          >
            Emergent Shores Music
          </a>
          ). My works have been released by Soluna Music, Progressive Dreams,
          Sunset Horizon and other melodic music labels, and I am working hard
          on it!
        </p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </section>
  );
}
