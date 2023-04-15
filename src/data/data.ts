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
import {
  SiAmazonaws,
  SiAwslambda,
  SiContentful,
  SiCss3,
  SiEthereum,
  SiFauna,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiHiveBlockchain,
  SiHtml5,
  SiJavascript,
  SiLinuxcontainers,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiNpm,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRust,
  SiSass,
  SiShopify,
  SiSolidity,
  SiStripe,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";
import { TbAugmentedReality2 } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";

import {
  IFooterQuickNavData,
  IFooterSocialsData,
  INavigationData,
  IAvailableCoursesData,
} from "@/data";

import { Ai, Blockchain, Cloud, Iot, Metaverse } from "@/assets";

import { IBootcamp } from "@/sections";

import { Coding1, Coding2 } from "@/internal-assets";

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

export const bootcampData: Array<IBootcamp> = [
  {
    title: "Bootcamp 2020",
    subTitle:
      "Learn to Build Modern Full Stack Serverless Multi-Tenant SaaS Apps and APIs in Baby Steps and Build Your SaaS Startup",
    about:
      "We will teach you online to Build Modern Full Stack Serverless Mobile Web Apps and Websites including e-commerce apps using React, Gatsby.js, Redux, GraphQL, RESTful OpenAPI, Serverless, AWS Lambda Functions, AWS Lambda Containers, AWS Aruora Serverless, AWS Neptune, AWS EventBridge, MongoDB, FaunaDB, Git, GitHub, GitHub Actions, Netlify, Contentful, Stripe, SnipCart, Shopify, etc.",
    wave: true,
    baseBgColor: "var(--primary-color-1)",
    Illustration: Coding1,
    techIcons: [
      {
        title: "HTML",
        Icon: SiHtml5,
      },
      {
        title: "CSS",
        Icon: SiCss3,
      },
      {
        title: "SASS",
        Icon: SiSass,
      },
      {
        title: "JavaScript",
        Icon: SiJavascript,
      },
      {
        title: "React",
        Icon: SiReact,
      },
      {
        title: "Gatsby",
        Icon: SiGatsby,
      },
      {
        title: "Redux",
        Icon: SiRedux,
      },
      {
        title: "GraphQL",
        Icon: SiGraphql,
      },
      {
        title: "OpenAPI",
        Icon: SiOpenapiinitiative,
      },
      {
        title: "Labmda",
        Icon: SiAwslambda,
      },
      {
        title: "Containers",
        Icon: SiLinuxcontainers,
      },
      {
        title: "AWS",
        Icon: SiAmazonaws,
      },
      {
        title: "MongoDB",
        Icon: SiMongodb,
      },
      {
        title: "FaunaDB",
        Icon: SiFauna,
      },
      {
        title: "Git",
        Icon: SiGit,
      },
      {
        title: "GitHub",
        Icon: SiGithub,
      },
      {
        title: "Actions",
        Icon: SiGithubactions,
      },
      {
        title: "Netlify",
        Icon: SiNetlify,
      },
      {
        title: "Contentful",
        Icon: SiContentful,
      },
      {
        title: "Stripe",
        Icon: SiStripe,
      },
      {
        title: "Shopify",
        Icon: SiShopify,
      },
    ],
  },
  {
    title: "Bootcamp 2021",
    subTitle:
      "Become a Certified Unicorn Developer (CUD) and Participant in the API Token Economy",
    about: `Covid-19 propelled businesses into the future, ready or not. “Covid has acted like a time machine: it brought 2030 to 2020,” said Loren Padelford, vice president at Shopify Inc. “All those trends, where organizations thought they had more time, got rapidly accelerated.” We at Panacloud are trying to respond to these challenges and trying to lead from the front. For this purpose are starting a not-for-profit movement called Operation Unicorn.`,
    wave: false,
    baseBgColor: "var(--primary-color-3)",
    Illustration: Coding2,
    techIcons: [
      {
        title: "JavaScript",
        Icon: SiJavascript,
      },
      {
        title: "TypeScript",
        Icon: SiTypescript,
      },
      {
        title: "React",
        Icon: SiReact,
      },
      {
        title: "Python",
        Icon: SiPython,
      },
      {
        title: "Rust",
        Icon: SiRust,
      },
      {
        title: "Solidity",
        Icon: SiSolidity,
      },
      {
        title: "NPM",
        Icon: SiNpm,
      },
      {
        title: "GraphQL",
        Icon: SiGraphql,
      },
      {
        title: "Labmda",
        Icon: SiAwslambda,
      },
      {
        title: "PostgreSQL",
        Icon: SiPostgresql,
      },
      {
        title: "AWS",
        Icon: SiAmazonaws,
      },
      {
        title: "Swagger",
        Icon: SiSwagger,
      },
      {
        title: "Nodejs",
        Icon: SiNodedotjs,
      },
      {
        title: "Git",
        Icon: SiGit,
      },
      {
        title: "GitHub",
        Icon: SiGithub,
      },
      {
        title: "Ethereum",
        Icon: SiEthereum,
      },
      {
        title: "SmartContracts",
        Icon: SiHiveBlockchain,
      },
    ],
  },
];
