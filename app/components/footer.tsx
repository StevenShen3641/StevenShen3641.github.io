"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaSpotify,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function EmailLink({ href, icon: Icon }) {
  return (
    <a href={href} rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right">
      <div className="button">
        <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      </div>
      <div className="button">
        <SocialLink href={socialLinks.github} icon={FaGithub} />
      </div>
      {/* <SocialLink href={socialLinks.instagram} icon={FaInstagram} /> */}
      <div className="button">
        <SocialLink href={socialLinks.spotify} icon={FaSpotify} />
      </div>
      <div className="button">
        <EmailLink href={`mailto:${socialLinks.email}`} icon={TbMailFilled} />
      </div>
      {/* <a href="/rss.xml" target="_self">
        <FaRss />
      </a> */}
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        // href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
