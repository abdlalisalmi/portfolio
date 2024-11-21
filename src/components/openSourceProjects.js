import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid";
import SectionHeader from "./ui/sectionHeader";
import { openSourceProjects as items } from "@/database/openSourceProjects";

export default function OpenSourceProjects() {
  return (
    <div className="w-full">
      <SectionHeader id="open-source" title="Open Source Projects" />
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            stats={item.stats}
            link={item.link}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
