import ContentContainer from "@/components/layout/content-container";
import SectionHeading from "@/components/standard/section-heading";
import precedingAnimationDelay from "@/lib/consts/motion/preceding-animation-delay";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Who are we */}
      <ContentContainer className="pt-29 lg:pt-36 pb-10 lg:pb-16 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center relative">
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
            are we?
          </h2>
          <p>
            Founded in 1995 by Mr. Tan Hoo Peng, K-Tool Engineering is a leading
            precision engineering company based in Malaysia, supplying
            high-precision tooling to key sectors of the electronics industry,
            including semiconductors, connectors, stamping, and more.
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
              width="425"
              height="300"
              className="rounded-md shadow-sm border border-gray-200"
            />
          </motion.div>
        </div>
      </ContentContainer>

      {/* Mission section */}
      <div className="pt-3 pb-10">
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: precedingAnimationDelay,
              type: "spring",
            }}
            className="bg-primary rounded-md shadow-sm p-7 text-white border border-primary-dark flex flex-col items-center justify-center bg-[url('/images/backgrounds/blue-blob-1.png')] bg-cover bg-center transition-transform ease-linear hover:scale-[1.02] cursor-default"
          >
            <SectionHeading spaceBelow>Our mission</SectionHeading>
            <p className="max-w-2xl text-center">
              To be a{" "}
              <b>world class precision engineering and tooling company</b>,
              focusing on <b>key targeted semiconductor based customers</b>. All
              while providing <b>total customer satisfaction</b> and to be the{" "}
              <b>supplier choice</b> in the precision tooling industry.
            </p>
          </motion.div>
        </ContentContainer>
      </div>

      {/* Origin */}
      <div className="pb-10 lg:pb-16">
        <ContentContainer className="flex flex-col items-center">
          <SectionHeading>
            How it all{" "}
            <span className="underline decoration-primary decoration-6 underline-offset-5">
              started
            </span>
          </SectionHeading>
        </ContentContainer>
      </div>
    </div>
  );
}
