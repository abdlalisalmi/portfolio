"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import SectionHeader from "./ui/sectionHeader";

export function Clients() {
  return (
    <div>
      <SectionHeader
        title="Clients I've Worked With"
        id={"clients"}
        className="mt-12"
      />
      <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="left" speed="fast">
          {clients.map((client, index) => (
            <a
              href={client.link}
              target="_blank"
              rel="noreferrer"
              className="w-[200px] relative flex-shrink-0 p-4 rounded-2xl transition-all duration-400 ease-in-out hover:bg-gray-200"
              key={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="aspect-[3/2] w-full object-contain h-16"
              />
            </a>
          ))}
        </InfiniteMovingCards>
      </div>
    </div>
  );
}

const clients = [
  {
    name: "OCP",
    logo: "/images/clients/ocp.svg",
    link: "https://www.ocpgroup.ma/",
  },
  {
    name: "UM6P",
    logo: "/images/clients/um6p.png",
    link: "https://www.um6p.ma/",
  },
  {
    name: "1337",
    logo: "/images/clients/1337.svg",
    link: "https://www.1337.ma/",
  },
  {
    name: "AAIT",
    logo: "/images/clients/aait.png",
    link: "https://aait.um6p.ma/",
  },
  {
    name: "Lycee Mohammed VI d'Excellence",
    logo: "/images/clients/lm6e.png",
    link: "https://lm6e.ma/",
  },
];
