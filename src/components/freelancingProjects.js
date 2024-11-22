import SectionHeader from "@/components/ui/sectionHeader";
import { WobbleCard } from "./ui/wobbleCard";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function FreelancingProjects() {
  return (
    <section className="w-full">
      <SectionHeader
        id="freelancing"
        title="Freelancing Projects"
        description="Showcasing a range of projects delivered to clients, highlighting professional experience and versatile capabilities."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {freelancingProjects.map((project, index) => (
          <WobbleCard
            containerClassName={cn(
              "h-full min-h-[500px lg:min-h-[300px col-span-1]",
              project.classname
            )}
            key={index}
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {project.title}
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                {project.description}
              </p>
            </div>
            {project.image && (
              <Image
                src={project.image}
                width={500}
                height={500}
                className="absolute -right-4 lg:-right-[40%] md:hidden grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            )}
          </WobbleCard>
        ))}
        {/* 
		<WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/images/freelancing/kno.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
		<WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard> */}
      </div>
    </section>
  );
}

const freelancingProjects = [
  {
    classname: "lg:col-span-2 bg-pink-800",
    title: "Gippity AI powers the entire universe",
    description:
      "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "/images/freelancing/kno.png",
  },
  {
    classname: "bg-blue-800",
    title: "No shirt, no shoes, no weapons.",
    description:
      "If someone yells “stop!”, goes limp, or taps out, the fight is over.",
    image: "",
  },
  {
    classname: "bg-indigo-900",
    title:
      "Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!",
    description:
      "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "",
  },
  {
    classname: "lg:col-span-2 ",
    title:
      "Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!",
    description:
      "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: "",
  },
];
