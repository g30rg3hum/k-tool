import ContentContainer from "@/components/layout/content-container";
import PrimaryButton from "@/components/standard/primary-button";
import SectionHeading from "@/components/standard/section-heading";
import precedingAnimationDelay from "@/lib/consts/motion/preceding-animation-delay";
import {
  ClockIcon,
  CogIcon,
  HomeIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import * as motion from "motion/react-client";
import Image from "next/image";

// Hero section
const heroPointIconClassName =
  "size-6 flex-shrink-0 transition-transform duration-300";
const heroPoints = [
  {
    icon: (
      <ClockIcon className={clsx(heroPointIconClassName, "hover:rotate-12")} />
    ),
    text: "30+ years of excellence",
  },
  {
    icon: (
      <TrophyIcon
        className={clsx(heroPointIconClassName, "hover:-rotate-12")}
      />
    ),
    text: "Recognised certifications",
  },
  {
    icon: (
      <HomeIcon className={clsx(heroPointIconClassName, "hover:rotate-12")} />
    ),
    text: "Cutting-edge technologies",
  },
];

// Capabilities section
const capabilitiesIconClassName = "size-6";
const capabilities = [
  {
    title: "Profile grinding",
    description:
      "Delivers micron-level accuracy and exceptional surface finishes for complex parts like punches and dies, ideal for critical applications where CNC machining or wire cutting fall short.",
    icon: <SparklesIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "CNC machining",
    description:
      "Provides high-accuracy milling with tight tolerances and fast turnaround for complex parts in various materials, supporting both prototypes and production runs.",
    icon: <CogIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "Design & Reverse Engineering",
    description:
      "We design high-precision die sets and advanced tooling solutions, especially for the electronics industry. Our reverse engineering expertise enables accurate replication or modification of existing parts to meet evolving needs.",
    icon: <PuzzlePieceIcon className={capabilitiesIconClassName} />,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <ContentContainer className="pt-29 lg:pt-30 flex flex-col items-left gap-6 lg:flex-row lg:items-center mb-10">
        <div className="lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: precedingAnimationDelay,
              type: "spring",
            }}
          >
            <h2 className="font-bold text-3xl mb-1 md:text-4xl">
              Setting the standard in{" "}
              <span className="text-primary">precision engineering</span>
            </h2>
            <p className="mb-4 text-lg">
              We are a team of experts in advanced tooling and mold-making,
              crafting high-quality and intricate solutions for tomorrow&apos;s
              technology.
            </p>
            <PrimaryButton className="mb-4">
              Learn more about what we do
            </PrimaryButton>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-3 font-medium">
            {heroPoints.map(({ icon, text }, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: precedingAnimationDelay + 0.25 + index * 0.4,
                }}
                key={index}
                className="flex items-center w-full gap-2"
              >
                {icon}
                <p>{text}</p>
                {index < heroPoints.length - 1 && (
                  <div className="hidden lg:block w-px h-6 bg-gray-700 ml-3" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay:
              precedingAnimationDelay +
              0.25 +
              (heroPoints.length - 1) * 0.4 +
              0.25,
            type: "spring",
          }}
          className="w-full max-w-lg lg:max-w-sm self-center lg:w-[40%]"
        >
          <Image
            src="/images/hero-image.png"
            alt="Hero image"
            width="1000"
            height="1000"
          />
        </motion.div>
      </ContentContainer>

      {/* Capabilities section */}
      <div className="bg-background-dark text-white py-10">
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: precedingAnimationDelay,
              type: "spring",
            }}
            className="mb-6"
          >
            <SectionHeading spaceBelow>Our capabilities</SectionHeading>
            <p>
              A one-stop tooling solution that specialises in turning complex
              engineering challenges into perfectly executed parts and tool.
              With full in-house capabilities, K-Tool delivers accuracy,
              repeatability, and reliability at every stage of production.
              Whether it&apos;s a one-off prototype or intricate molds, we
              engineer with purpose -{" "}
              <span className="italic">and precision.</span>
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 lg:flex-row">
            {capabilities.map(({ title, description, icon }, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: precedingAnimationDelay + 0.25 + index * 0.4,
                }}
                key={title}
                className="border p-4 rounded-md lg:w-1/3"
              >
                <h4 className="font-semibold mb-1 flex gap-2 items-center">
                  {icon} {title}
                </h4>
                <p className="text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </ContentContainer>
      </div>
    </div>
  );
}

{
  /* <Container className="rounded-b-[5rem] bg-linear-to-t from-[#CBF3FF] to-[#E5F9FF] pt-[5.5rem] pb-[4rem]">
        <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-6">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              Setting the standard in{" "}
              <span className="text-primary lg:block">
                precision engineering
              </span>
            </h2>
            <p className="mb-6 text-lg">
              We are experts in advanced tooling, crafting high-accuracy
              solutions for tomorrow’s technology.
            </p>
            <PrimaryButton text="Learn more about us" />
          </div>

          <Image
            src="/images/hero-image.png"
            className="w-[600px] lg:w-[500px]"
            height="500"
            width="500"
            alt="Hero collage image"
          />
        </div>
      </Container> */
}

{
  /* "Our capabilities" section */
}
// <Container className="py-16">
//   <div className="mb-8 flex justify-between">
//     <h3 className="text-4xl font-semibold">Our capabilities</h3>
//     <PrimaryButton text="View all capabilities" />
//   </div>

//   <p className="mb-4">
//     A one-stop tooling solution that specialises in turning complex
//     engineering challenges into perfectly executed parts and tools. With
//     full in-house capabilities, K-Tool delivers accuracy, repeatability,
//     and reliability at every stage of production. Whether it’s a one-off
//     prototype or intricate molds, we engineer with purpose - and
//     precision.
//   </p>

//   <div>
//     <div></div>
//   </div>
// </Container>
