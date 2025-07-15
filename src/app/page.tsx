import PrimaryButton from "@/components/standard/primary-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="rounded-b-[5rem] bg-linear-to-t from-[#CBF3FF] to-[#E5F9FF] pt-[5.25rem] pb-[5rem] px-8 lg:px-16">
      <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-6xl font-bold mb-4">
            Setting the standard in{" "}
            <span className="text-primary lg:block">precision engineering</span>
          </h2>
          <p className="mb-6 text-xl">
            We are experts in advanced tooling, crafting high-accuracy solutions
            for tomorrow’s technology.
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
    </div>
  );
}
