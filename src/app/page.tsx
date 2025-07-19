import ContentContainer from "@/components/layout/content-container";
import PrimaryButton from "@/components/standard/primary-button";
import precedingAnimationDelay from "@/lib/consts/motion/preceding-animation-delay";
import { ClockIcon, HomeIcon, TrophyIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import * as motion from "motion/react-client";
import Image from "next/image";

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

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <ContentContainer className="pt-31 flex flex-col items-left gap-6 lg:flex-row lg:items-center">
        <div className="lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
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

      {/*  */}
      {/* <ContentContainer></ContentContainer> */}
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
