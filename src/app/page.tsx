import ContentContainer from "@/components/layout/content-container";
import Accordion, { AccordionItem } from "@/components/standard/accordion";
import Hyperlink from "@/components/standard/hyperlink";
import PrimaryButton from "@/components/standard/primary-button";
import SectionHeading from "@/components/standard/section-heading";
import precedingAnimationDelay from "@/lib/consts/motion/preceding-animation-delay";
import {
  ArrowPathIcon,
  BoltIcon,
  ClockIcon,
  CogIcon,
  CubeIcon,
  HomeIcon,
  HomeModernIcon,
  MagnifyingGlassCircleIcon,
  PuzzlePieceIcon,
  ScissorsIcon,
  ShieldCheckIcon,
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
    description: (
      <>
        Micron-level accuracy and fine surface finishes for complex parts like
        punches and dies—ideal when CNC or wire cutting can&apos;t deliver.
      </>
    ),
    icon: <SparklesIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "CNC machining",
    description: (
      <>
        High-accuracy milling for complex parts in{" "}
        <Hyperlink>various materials</Hyperlink>, ensuring tight tolerances and
        fast turnaround for both prototypes and production.
      </>
    ),
    icon: <CogIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "Design & reverse engineering",
    description: (
      <>
        We create high-precision die sets, and replicate or modify existing
        tools or parts, guided by specialised expertise in advanced tooling for
        the electronics industry.
      </>
    ),
    icon: <PuzzlePieceIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "CAD/CAM Software",
    description: (
      <>
        Advanced CAD/CAM solutions turn your ideas into precise tooling,
        improving accuracy, shortening lead times, and ensuring seamless
        production.
      </>
    ),
    icon: <CubeIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "Sinker EDM",
    description: (
      <>
        High-precision spark erosion for detailed cavities, fine details, and
        hardened materials—perfect for advanced tooling and mold applications.
      </>
    ),
    icon: <BoltIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "Wire cutting",
    description: (
      <>
        Precision wire cutting for fine-finish cuts, tight tolerances, and small
        internal radii—ideal for detailed profiles and high-accuracy parts.
      </>
    ),
    icon: <ScissorsIcon className={capabilitiesIconClassName} />,
  },
  {
    title: "Steel and carbide grinding",
    description: (
      <>
        Expert grinding of steel and carbide to tight tolerances, ensuring
        high-dimensional accuracy and durability for demanding tooling needs.
      </>
    ),
    icon: <ShieldCheckIcon className={capabilitiesIconClassName} />,
  },
];

// Product highlights section
const productHighlights: AccordionItem[] = [
  {
    title: "Product highlight 1",
    content: "Product highlight 1 description",
  },
  {
    title: "Product highlight 2",
    content: "Product highlight 2 description",
  },
  {
    title: "Product highlight 3",
    content: "Product highlight 3 description",
  },
];

// Choose us section
const chooseUsIconClassName = "size-6";
const chooseUsReasons = [
  {
    title: "In-house expertise",
    description:
      "From design to machining - all services are handled under one roof for full control and accountability.",
    icon: <HomeModernIcon className={chooseUsIconClassName} />,
  },
  {
    title: "Micron-level precision",
    description:
      "Our work meets the highest standards of accuracy and quality, backed by decades of experience.",
    icon: <MagnifyingGlassCircleIcon className={chooseUsIconClassName} />,
  },
  {
    title: "End-to-end solutions",
    description:
      "We support every stage of production, from prototyping to tooling, molding, and final component delivery.",
    icon: <ArrowPathIcon className={chooseUsIconClassName} />,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <ContentContainer className="pt-29 lg:pt-36 flex flex-col items-left gap-6 lg:flex-row lg:items-center mb-10 lg:mb-16">
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
                  type: "spring",
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
      <div className="bg-background-dark text-white py-10 lg:py-16">
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

          <div className="overflow-y-auto lg:overflow-x-auto scroll-smooth capabilities-scroll">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    delay: precedingAnimationDelay + 0.25,
                    type: "spring",
                    delayChildren: 0.5,
                    staggerChildren: 0.4,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-4 flex-col h-[390px] pr-4 lg:pr-0 lg:pb-4 lg:flex-row lg:w-max lg:h-auto"
            >
              {capabilities.map(({ title, description, icon }) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.8, type: "spring" },
                    },
                  }}
                  key={title}
                  className="p-4 rounded-md bg-[#121212] transition duration-300 hover:bg-primary cursor-default w-full lg:w-[294px]"
                >
                  <h4 className="font-semibold mb-1 flex gap-2 items-center">
                    {icon} {title}
                  </h4>
                  <p className="text-sm">{description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentContainer>
      </div>

      {/* Product highlights section */}
      <div className="py-10 lg:py-16">
        <ContentContainer className="flex flex-col lg:flex-row gap-6 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: precedingAnimationDelay,
              type: "spring",
            }}
            className="lg:w-[55%]"
          >
            <SectionHeading spaceBelow>Product highlights</SectionHeading>
            <p className="mb-4">
              Our precision engineering capabilities power real-world solutions
              across a wide range of applications - helping you stay ahead in a
              rapidly evolving technological world.
            </p>
            <PrimaryButton>More of our work</PrimaryButton>
          </motion.div>
          <Accordion
            className="lg:w-[45%]"
            items={productHighlights}
            delay={precedingAnimationDelay + 0.25}
          />
        </ContentContainer>
      </div>

      {/* Why choose us section */}
      <div className="text-white">
        <Image
          src="/images/triangle-transition.png"
          alt="Triangle transition background"
          className="w-full h-5 md:h-7 lg:h-9"
          height={1000}
          width={1000}
        />
        <div className="bg-primary w-full py-10 lg:py-16">
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
              className="text-center flex flex-col items-center mb-8"
            >
              <SectionHeading spaceBelow>Why choose us?</SectionHeading>
              <p className="max-w-2xl">
                Trusted by leading manufacturers, we combine craftsmanship,
                technology, and commitment to deliver unmatched precision -
                every time.
              </p>
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-6">
              {chooseUsReasons.map(({ title, description, icon }, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: precedingAnimationDelay + 0.25 + index * 0.4,
                    type: "spring",
                  }}
                  key={title}
                  className="text-center flex justify-center"
                >
                  <div className="cursor-default hover:scale-[1.02] transition-transform">
                    <h4 className="font-semibold mb-1 flex gap-2 items-center justify-center">
                      {icon} {title}
                    </h4>
                    <p className="text-sm">{description}</p>
                  </div>

                  {index < chooseUsReasons.length - 1 && (
                    <div className="hidden lg:block w-px h-full bg-white ml-6"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </ContentContainer>
        </div>
      </div>
    </div>
  );
}
