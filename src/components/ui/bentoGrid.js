import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

import { GoRepoForked } from "react-icons/go";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  link,
  title,
  description,
  header,
  stats,
}) => {
  return (
    <a
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 cursor-pointer",
        className
      )}
      href={link}
      target="_blank"
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-bold text-zinc-800 dark:text-zinc-300 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300 truncate">
          {description}
        </div>
        <div className="flex flex-row items-center gap-2 text-neutral-600 text-xs dark:text-neutral-300 mt-2 border-t border-zinc-800/95 pt-2">
          <div className="flex flex-row items-center gap-1">
            <FaCodeFork />
            {stats?.forks ? `+${stats?.forks}` : "---"}
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaStar />
            {stats?.stars ? `+${stats?.stars}` : "---"}
          </div>
        </div>
      </div>
    </a>
  );
};
