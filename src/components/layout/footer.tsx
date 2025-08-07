import Image from "next/image";
import ContentContainer from "./content-container";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import navLinks from "@/lib/consts/layout/nav";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] py-14 text-white">
      <ContentContainer className="flex flex-col lg:flex-row gap-6">
        <ul className="flex flex-col gap-5 lg:max-w-[28%]">
          <li>
            <Image
              src="/images/logo-white.png"
              alt="K-Tool Logo"
              width="150"
              height="50"
            />
            <p className="text-sm">
              Your one-stop shop for all precision engineering solutions
            </p>
          </li>
          <li>
            <MapPinIcon className="size-5 inline-block mr-1" /> Plot 159, Jalan
            Sungai Kluang, Bayan Lepas Phase 1 FTZ, 11900 Bayan Lepas, Penang,
            Malaysia
          </li>
          <li>
            <ClockIcon className="size-5 inline-block mr-1" /> 8am - 5:45pm,
            Monday to Friday
          </li>
          <li>
            <PhoneIcon className="size-5 inline-block mr-1" /> +604 645 1518
          </li>
          <li>
            <EnvelopeIcon className="size-5 inline-block mr-1" />{" "}
            sales@ktoolmalaysia.com
          </li>
        </ul>
        <ul>
          <li className="font-bold text-primary-light">Navigation</li>
          {navLinks.map(({ href, text }) => (
            <li key={href}>{text}</li>
          ))}
        </ul>
        <ul>
          <li className="font-bold text-primary-light">Legal & Compliance</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
          <li>Cookie policy</li>
          <li>Copyright notice</li>
          <li>Legal disclaimers</li>
        </ul>
        <ul>
          <li className="font-bold text-primary-light">Business information</li>
          <li>Company registration</li>
          <li>Professional certifications</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-bold text-primary-light">Socials</li>
          <li>
            <SocialIcon
              url="https://www.facebook.com"
              className="max-w-[30px] max-h-[30px]"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.instagram.com"
              className="max-w-[30px] max-h-[30px]"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.linkedin.com"
              className="max-w-[30px] max-h-[30px]"
            />
          </li>
        </ul>
      </ContentContainer>
    </footer>
  );
}
