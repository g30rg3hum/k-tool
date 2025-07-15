import Container from "@/components/layout/container";
import PrimaryButton from "@/components/standard/primary-button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <Container className="rounded-b-[5rem] bg-linear-to-t from-[#CBF3FF] to-[#E5F9FF] pt-[5.25rem] pb-[5rem]">
        <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-6">
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
            height="500"
            width="500"
            alt="Hero collage image"
          />
        </div>
      </Container>

      {/* "Our capabilities" section */}
      <Container className="py-16">
        <h3 className="text-4xl font-semibold mb-4">Our capabilities</h3>
        <p>
          From microns to metal, we specialise in turning complex engineering
          challenges into perfectly executed parts and tools. With full in-house
          capabilities, K-Tool delivers accuracy, repeatability, and reliability
          at every stage of production. Whether it’s a one-off prototype or
          intricate molds, we engineer with purpose - and precision.
        </p>
      </Container>
    </div>
  );
}
