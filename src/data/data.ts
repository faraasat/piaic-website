import { GrFacebook, GrLinkedin, GrTwitter, GrYoutube } from "react-icons/gr";
import {
  AiFillCloud,
  AiFillHome,
  AiFillInfoCircle,
  AiFillRobot,
} from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { FaBroadcastTower } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { TbAugmentedReality2 } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";

import {
  IFooterQuickNavData,
  IFooterSocialsData,
  INavigationData,
  IAvailableCoursesData,
} from "@/data";

import { Ai, Blockchain, Cloud, Iot, Metaverse } from "@/assets";

export const navigationData: Array<INavigationData> = [
  {
    name: "Home",
    url: "/",
    Icon: AiFillHome,
  },
  {
    name: "Available Programs",
    url: "/available-programs",
    Icon: MdEventAvailable,
  },
  {
    name: "About",
    url: "/about",
    Icon: AiFillInfoCircle,
  },
  {
    name: "Apply",
    url: "/apply",
    Icon: HiAcademicCap,
  },
  {
    name: "Portal",
    url: "/portal",
  },
];

export const footerQuickNavData: Array<IFooterQuickNavData> = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blockchain Development",
    url: "/blockchain-development",
  },
  {
    name: "Cloud Native Development",
    url: "/cloud-native-development",
  },
  {
    name: "Artificial Intelligence",
    url: "/artificial-intelligence",
  },
  {
    name: "Internet of Things",
    url: "/internet-of-things",
  },
  {
    name: "Web3 and Metaverse",
    url: "/web3-and-metaverse",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Apply",
    url: "/apply",
  },
  {
    name: "Portal",
    url: "/portal",
  },
];

export const footerSocialsData: Array<IFooterSocialsData> = [
  {
    url: "https://facebook.com/",
    Icon: GrFacebook,
  },
  {
    url: "https://facebook.com/",
    Icon: GrTwitter,
  },
  {
    url: "https://facebook.com/",
    Icon: GrLinkedin,
  },
  {
    url: "https://facebook.com/",
    Icon: GrYoutube,
  },
];

export const smallNavigationData: Array<INavigationData> = [
  {
    name: "Home",
    url: "/",
    Icon: AiFillHome,
  },
  {
    name: "Blockchain Development",
    url: "/blockchain-development",
    Icon: SiHiveBlockchain,
  },
  {
    name: "Cloud Development",
    url: "/cloud-development",
    Icon: AiFillCloud,
  },
  {
    name: "Artificial Intelligence",
    url: "/artificial-intelligence",
    Icon: AiFillRobot,
  },
  {
    name: "Internet of Things",
    url: "/internet-of-things",
    Icon: FaBroadcastTower,
  },
  {
    name: "Web3 and Metaverse",
    url: "/web3-and-metaverse",
    Icon: TbAugmentedReality2,
  },
  {
    name: "About",
    url: "/about",
    Icon: AiFillInfoCircle,
  },
  {
    name: "Apply",
    url: "/apply",
    Icon: HiAcademicCap,
  },
  {
    name: "Portal",
    url: "/portal",
    Icon: RiAdminFill,
  },
];

export const availableCoursesData: Array<IAvailableCoursesData> = [
  {
    title: "Blockchain Development",
    content:
      "A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN FINTECH AND SMART CONTRACTS.",
    url: "/blockchain-development",
    Img: Blockchain,
    alt: "blockchain",
  },
  {
    title: "Cloud Development",
    content:
      "A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.",
    url: "/cloud-development",
    Img: Cloud,
    alt: "cloud",
  },
  {
    title: "AI and ML",
    content:
      "A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.",
    url: "/ai-and-ml",
    Img: Ai,
    alt: "ai and ml",
  },
  {
    title: "Internet of Things",
    content:
      "A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI",
    url: "/internet-of-things",
    Img: Iot,
    alt: "iot",
  },
  {
    title: "Web3 and Metaverse",
    content:
      "Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users.",
    url: "web3-and-metaverse",
    Img: Metaverse,
    alt: "web3 and metaverse",
  },
];
