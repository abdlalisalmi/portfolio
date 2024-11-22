"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import SectionHeader from "./ui/sectionHeader";
import { clients } from "@/database/clients";

export function Clients() {
  return (
    <div>
      <SectionHeader
        title="Clients I've worked with"
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
              className="w-[200px] relative flex-shrink-0 p-4 rounded-2xl transition-all duration-400 ease-in-out hover:bg-gray-500/25"
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
