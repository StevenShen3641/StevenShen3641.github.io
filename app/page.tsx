import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    // <>
    <section>
      <a href={socialLinks.spotify} target="_blank">
        <Image
          src="/profile.webp"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 filter-purple hover:grayscale-0"
          unoptimized
          width={200}
          height={200}
          priority
        />
      </a>

      {/* <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Portfolio, made simple!
      </h1> */}

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am currently a Ph.D. student in the Department of Computer Science at {" "}
          <a href={"https://umd.edu/"} target="_blank">
            University of Maryland
          </a> advised by Prof.{" "}
          <a href={"https://surrealyz.github.io/index.html"} target="_blank">
            Yizheng Chen
          </a>.
          Before that, I received my B.E. in Computer Science and Engineering at{" "}
          <a href={"https://www.cuhk.edu.cn/en"} target="_blank">
            The Chinese University of Hong Kong, Shenzhen
          </a>{" "}in 2025 advised by Prof.{" "}
          <a href={"https://pinjiahe.github.io/"} target="_blank">
            Pinjia He
          </a>.
          My research focus broadly spans Software Engineering and Software
          Security. I was very fortunate to work with Prof.{" "}
          <a
            href={"https://sites.google.com/site/kexinpeisite/"}
            target="_blank"
          >
            Kexin Pei
          </a>{" "}
          at The University of Chicago as an undergraduate intern in the summer
          of 2024.
        </p>

        <p></p>
        <p></p>
        <p></p>
      </div>

      {/* <div className="mb-6 text-xl font-medium tracking-tight">News</div> */}
    </section>
    // <tbody>
    //   <tr className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm group-hover:opacity-80 transition-opacity duration-200">Mar 19, 2025</tr>
    // </tbody>
    //  </>
  );
}
