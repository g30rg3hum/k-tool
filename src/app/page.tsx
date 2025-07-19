/* eslint-disable @next/next/no-img-element */
import ContentContainer from "@/components/layout/content-container";
import PrimaryButton from "@/components/standard/primary-button";
import { ClockIcon, HomeIcon, TrophyIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

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
        <div className="lg:w=[60%]">
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
          <div className="flex flex-col lg:flex-row gap-3 font-medium">
            {heroPoints.map(({ icon, text }, index) => (
              <div key={index} className="flex items-center w-full gap-2">
                {icon}
                <p>{text}</p>
                {index < heroPoints.length - 1 && (
                  <div className="hidden lg:block w-px h-6 bg-gray-700 ml-3" />
                )}
              </div>
            ))}
          </div>
        </div>
        <img
          src="/images/hero-image.png"
          className="w-full max-w-lg lg:max-w-sm self-center lg:w-[40%]"
          alt="Hero image"
        />
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
