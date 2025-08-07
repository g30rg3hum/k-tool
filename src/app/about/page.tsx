import ContentContainer from "@/components/layout/content-container";
import SmoothScrollSection from "@/components/lenis/smooth-scroll-section";
import SectionHeading from "@/components/standard/section-heading";
import precedingAnimationDelay from "@/lib/consts/motion/preceding-animation-delay";
import { RocketLaunchIcon, UsersIcon } from "@heroicons/react/16/solid";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <SmoothScrollSection />
      {/* Who are we */}
      <ContentContainer className="pt-29 lg:pt-36 pb-16 lg:pb-16 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: precedingAnimationDelay,
            type: "spring",
          }}
          className="lg:w-[60%]"
        >
          <h2 className="font-bold text-3xl mb-4 md:text-4xl">
            <span className="underline decoration-primary decoration-6 underline-offset-5">
              Who
            </span>{" "}
            are we? <UsersIcon className="size-10 inline-block" />
          </h2>
          <p>
            Founded in 1995 by Mr. Tan Hoo Peng, K-Tool Engineering is a leading
            <span className="font-semibold text-primary">
              {" "}
              precision engineering
            </span>{" "}
            company based in Malaysia, supplying high-precision tooling to key
            sectors of the electronics industry, including semiconductors,
            connectors, stamping, and more.
          </p>
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: precedingAnimationDelay,
              type: "spring",
            }}
            className="absolute inset-0 -z-10"
          >
            <div className="w-full h-full bg-slate rounded-md translate-6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: precedingAnimationDelay + 0.4,
              type: "spring",
            }}
          >
            <Image
              src="/images/company/image-1.jpg"
              alt="Company image"
              width="1000"
              height="1000"
              className="rounded-md shadow-sm border border-gray-200 w-full lg:max-w-lg"
            />
          </motion.div>
        </div>
      </ContentContainer>
      {/* Mission section */}
      <div className="pb-8">
        <ContentContainer>
          <div className="w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: precedingAnimationDelay,
                type: "spring",
              }}
              className="absolute inset-0 -z-10"
            >
              <div className="w-full h-full bg-slate rounded-md -translate-x-6 translate-y-6" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: precedingAnimationDelay + 0.3,
                type: "spring",
              }}
              className="bg-primary rounded-md shadow-sm p-7 text-white border border-primary-dark flex flex-col items-center justify-center bg-[url('/images/backgrounds/blue-blob-1.png')] bg-cover bg-center transition-transform ease-linear hover:scale-[1.02] cursor-default"
            >
              <SectionHeading spaceBelow>
                Our mission <RocketLaunchIcon className="size-6 inline-block" />
              </SectionHeading>
              <p className="max-w-2xl text-center">
                To be a world-class provider of precision engineering and
                tooling solutions, dedicated to serving high-value semiconductor
                customers. We aim to deliver exceptional quality, innovation,
                and total customer satisfaction—striving to be the trusted
                partner and supplier of choice in the precision tooling
                industry.
              </p>
            </motion.div>
          </div>
        </ContentContainer>
      </div>
      {/* Origin */}`
      <div className="pb-10 lg:pb-16">
        <ContentContainer className="flex flex-col items-center">
          <div className="text-center w-full mb-4">
            <SectionHeading spaceBelow>
              How it all{" "}
              <span className="underline decoration-primary decoration-6 underline-offset-5">
                started
              </span>
            </SectionHeading>
            <p className="max-w-2xl mx-auto">
              With decades of experience in the industry, we have made gradual
              improvements and expansions to our facilities and equipment.
            </p>
          </div>
          <div className="w-full relative mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: precedingAnimationDelay,
                type: "spring",
              }}
              className="absolute inset-0 -z-10"
            >
              <div className="w-full h-full bg-slate rounded-md translate-6" />
            </motion.div>
            <div className="rounded-md h-96 w-full border-gray-200 border flex shadow-sm">
              <div className="w-[40%] bg-background-dark text-white p-8 rounded-l-md">
                <h4 className="font-bold text-xl">Establishment</h4>
                <p className="font-semibold mb-4 text-lg text-primary-light">
                  1990
                </p>
                <p className="text-sm">
                  We began as a small, humble workshop in a rented space,
                  initially focused on producing spare parts. Since then,
                  we&apos;ve experienced rapid growth in both our workforce and
                  machinery.
                </p>
              </div>
              <div className="w-[60%] bg-[url('/images/stock/1.jpg')] bg-cover bg-center rounded-r-md" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="rounded-full w-4 h-4 bg-background-dark opacity-100" />
            <div className="rounded-full w-4 h-4 bg-background-dark opacity-50" />
            <div className="rounded-full w-4 h-4 bg-background-dark opacity-50" />
          </div>
        </ContentContainer>
      </div>
    </div>
  );
}
