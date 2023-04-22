import { GrFacebook, GrLinkedin, GrTwitter, GrYoutube } from "react-icons/gr";
import {
  AiFillBulb,
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
  SiFigma,
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
  SiNextdotjs,
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
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbAugmentedReality2 } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";

import {
  IFooterQuickNavData,
  IFooterSocialsData,
  INavigationData,
  IAvailableCoursesData,
  INavigationWithDropDown,
  IAvailableCoursesPageData,
} from "@/data";

import {
  AcBg1,
  AcBg2,
  AcBg3,
  AcBg4,
  AcBg5,
  Ai,
  Ai10,
  Ai11,
  Ai2,
  Ai3,
  Ai4,
  Ai5,
  Ai6,
  Ai9,
  Bd1,
  Bd10,
  Bd11,
  Bd12,
  Bd13,
  Bd14,
  Bd2,
  Bd3,
  Bd4,
  Bd5,
  Bd6,
  Bd7,
  Bd8,
  Bd9,
  Blockchain,
  Cd1,
  Cd2,
  Cd3,
  Cd4,
  Cd5,
  Cd6,
  Cd7,
  Cd8,
  Cloud,
  Instructor1,
  Instructor2,
  Instructor3,
  Instructor4,
  Instructor5,
  Instructor6,
  Instructor7,
  Instructor8,
  Instructor9,
  Io1,
  Iot,
  It1,
  It10,
  It11,
  It12,
  It13,
  It14,
  It2,
  It3,
  It4,
  It7,
  It8,
  Logo,
  Metaverse,
  P1,
  P2,
  P3,
  P4,
  P5,
} from "@/assets";

import { IBootcamp } from "@/sections";

import { Coding1, Coding2, Coding3 } from "@/internal-assets";

export const navigationData: Array<INavigationWithDropDown> = [
  {
    name: "Home",
    url: "/",
    Icon: AiFillHome,
  },
  {
    name: "Available Programs",
    url: "/available-programs",
    Icon: MdEventAvailable,
    dropdown: true,
    dropdownItems: [
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
        url: "https://panaverse-farasat.vercel.app",
        Icon: TbAugmentedReality2,
      },
      {
        name: "4IR Innovation",
        url: "/innovation-track",
        Icon: AiFillBulb,
      },
    ],
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
    url: "https://panaverse-farasat.vercel.app",
  },
  {
    name: "4IR Innovation",
    url: "/innovation-track",
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
    url: "https://panaverse-farasat.vercel.app",
    Icon: TbAugmentedReality2,
  },
  {
    name: "4IR Innovation",
    url: "/innovation-track",
    Icon: AiFillBulb,
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
    url: "/artificial-intelligence",
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
  // {
  //   title: "4IR Innovation",
  //   content:
  //     "A NINE-MONTH SUPPLEMENTARY PROGRAM COMPULSORY FOR ALL PIAIC STUDENTS REQUIRED FROM THE 2ND QUARTER OF THE MAJOR COURSE OF STUDY.",
  //   url: "/innovation-track",
  //   Img: AiFillBulb,
  //   alt: "innovation",
  // },
  {
    title: "Web3 and Metaverse",
    content:
      "Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users.",
    url: "https://panaverse-farasat.vercel.app",
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
    secBgColor: "var(--primary-color-3)",
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
    instructors: {
      main: {
        Img: Instructor9,
        name: "Zia Khan",
      },
      focus: [
        {
          Img: Instructor3,
          name: "Aamir Pinger",
        },
        {
          Img: Instructor6,
          name: "Mohsin Khalid",
        },
        {
          Img: Instructor8,
          name: "Zeeshan Hanif",
        },
        {
          Img: Instructor4,
          name: "Daniyal Nagori",
        },
      ],
      small: [
        {
          Img: Instructor1,
          name: "Adil Altaf",
        },
        {
          Img: Instructor2,
          name: "Ameen Aalam",
        },

        {
          Img: Instructor5,
          name: "Hina Khan",
        },
        {
          Img: Instructor7,
          name: "Waris Hasan",
        },
      ],
    },
    content: {
      urdu: {
        channel:
          "https://www.youtube.com/playlist?list=PLF32E4w-uhaP0SVwqlC8De-En-4CEQnAk",
        details: [
          {
            title: "Bootcamp 2020 - Expense Tracker App",
            url: "https://www.youtube.com/watch?v=dkMba8oK55w",
            imgUrl: "https://img.youtube.com/vi/dkMba8oK55w/0.jpg",
          },
          {
            title: "Bootcamp 2020 - Class 5",
            url: "https://www.youtube.com/watch?v=_UUlRvbJPfQ",
            imgUrl: "https://img.youtube.com/vi/_UUlRvbJPfQ/0.jpg",
          },
        ],
      },
      english: {
        channel:
          "https://www.youtube.com/playlist?list=PLfE-eWQ6cwuMBzR-bDU9FFzSvs0wQvR0J",
        details: [
          {
            title: "BootCamp 2020 - Expense Tracker App",
            url: "https://www.youtube.com/watch?v=q6GmIxnflfM",
            imgUrl: "https://img.youtube.com/vi/q6GmIxnflfM/hq3.jpg",
          },
          {
            title: "Bootcamp 2020 - Class 5",
            url: "https://www.youtube.com/watch?v=h27ABSn-27g",
            imgUrl: "https://img.youtube.com/vi/h27ABSn-27g/0.jpg",
          },
        ],
      },
      link: "https://panacloud.github.io/bootcamp-2020/",
    },
  },
  {
    title: "Bootcamp 2021",
    subTitle:
      "Become a Certified Unicorn Developer (CUD) and Participant in the API Token Economy",
    about: `Covid-19 propelled businesses into the future, ready or not. “Covid has acted like a time machine: it brought 2030 to 2020,” said Loren Padelford, vice president at Shopify Inc. “All those trends, where organizations thought they had more time, got rapidly accelerated.” We at Panacloud are trying to respond to these challenges and trying to lead from the front. For this purpose are starting a not-for-profit movement called Operation Unicorn.`,
    wave: true,
    baseBgColor: "var(--primary-color-3)",
    secBgColor: "var(--primary-color-6)",
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
    instructors: {
      main: {
        Img: Instructor9,
        name: "Zia Khan",
      },
      focus: [
        {
          Img: P1,
          name: "Inam ul Haq",
        },
        {
          Img: P2,
          name: "Qasim",
        },
        {
          Img: P3,
          name: "Anees",
        },
        {
          Img: P4,
          name: "Faheem",
        },
        {
          Img: P5,
          name: "Shahrukh",
        },
      ],
    },
    content: {
      urdu: {
        channel:
          "https://www.youtube.com/@certifiedunicorndeveloperi6307/videos",
        details: [
          {
            title: "Bootcamp 2021 URDU - Class 1",
            url: "https://www.youtube.com/watch?v=V4z6KC3ENmM",
            imgUrl: "https://img.youtube.com/vi/V4z6KC3ENmM/0.jpg",
          },
          {
            title: "Bootcamp 2021 URDU - Class 2",
            url: "https://www.youtube.com/watch?v=CJNtss-KKxI",
            imgUrl: "https://img.youtube.com/vi/CJNtss-KKxI/0.jpg",
          },
        ],
      },
      english: {
        channel:
          "https://www.youtube.com/playlist?list=PLCD4H0tiu6FXq4fP5PmMu3vdGKN2kmqzp",
        details: [
          {
            title: "Bootcamp 2021 ENGLISH - Class 1",
            url: "https://www.youtube.com/watch?v=1ztdYFRyCyE",
            imgUrl: "https://img.youtube.com/vi/1ztdYFRyCyE/0.jpg",
          },
          {
            title: "Bootcamp 2021 ENGLISH - Class 2",
            url: "https://www.youtube.com/watch?v=-WQ2DHpeaFs",
            imgUrl: "https://img.youtube.com/vi/-WQ2DHpeaFs/0.jpg",
          },
        ],
      },
      link: "https://panacloud.github.io/bootcamp-2021/",
    },
  },
];

export const metaverseCourseData: IBootcamp = {
  title: "[NEW] Web3 and Metaverse",
  subTitle:
    "Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users",
  about:
    "The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.",
  wave: false,
  baseBgColor: "var(--primary-color-6)",
  secBgColor: "var(--primary-color-6)",
  blendMode: "difference",
  Illustration: Coding3,
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
      title: "NextJs",
      Icon: SiNextdotjs,
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
      title: "Solidity",
      Icon: SiSolidity,
    },
    {
      title: "NPM",
      Icon: SiNpm,
    },
    {
      title: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      title: "Ethereum",
      Icon: SiEthereum,
    },
    {
      title: "SmartContracts",
      Icon: SiHiveBlockchain,
    },
    {
      title: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      title: "Figma",
      Icon: SiFigma,
    },
  ],
  instructors: [
    { Img: Instructor9, name: "Zia Khan" },
    {
      Img: Instructor4,
      name: "Daniyal Nagori",
    },
    {
      Img: Instructor2,
      name: "Ameen Aalam",
    },
    {
      Img: Instructor5,
      name: "Hina Khan",
    },
  ],
  nonContentLink: "https://www.panaverse.co/",
};

export const availableCoursesPageData: IAvailableCoursesPageData = {
  "blockchain-development": {
    title: "Blockchain Development",
    desc: "A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS",
    colors: {
      technical: ["#aa4cff", "#9944e6", "#883dcc", "#7735b3"],
      innovative: ["#f8b9e1", "#f48bcd", "#ef5cb9"],
      base: "#662e99",
    },
    Img: AcBg1,
    programDets: "Four Quarters of Blockchain Course Work",
    technicalBlocks: [
      {
        title: "Quarter 1",
        desc: "Foundations of Blockchain",
      },
      {
        title: "Quarter 2",
        desc: "Smart Contract Development",
      },
      {
        title: "Quarter 3",
        desc: "Dapp Development",
      },
      {
        title: "Quarter 4",
        desc: "Advanced Blockchain Topics",
      },
    ],
    innovationBlock: [
      {
        title: "Quarter 1",
        desc: "Innovation Methodologies",
      },
      {
        title: "Quarter 2",
        desc: "Infrastructure as Code DevOps",
      },
      {
        title: "Quarter 3",
        desc: "Lean UI/UX and Bot Design",
      },
    ],
    learningItems: [
      {
        id: "1A",
        title: "Digital Money, Bitcoin and Blockchain",
        Img: Bd1,
        desc: "In this module, students will get an introduction to digital money, bitcoin and the blockchain. Students will learn about trestles systems and proof of work. Students will also learn the difference between private, consortium, and public blockchai networks. This module will also provide an introduction to hashing and cryptography.",
        colorId: 1,
      },
      {
        id: "1B",
        title: "Crypto Tokens",
        Img: Bd2,
        desc: "In this module, students will learn about crypto tokens, how intrinsic tokens come into existence, how bitcoins, ripples, ethereal, and NXT come into existence. Students will also learn the difference between utility and security tokens. This module will also cover the legal implications of token classification. Students will also learn the eight categories of tokens. In this module, students will learn how to create their own utility tokens.",
        colorId: 1,
      },
      {
        id: "1C",
        title: "Blockchain Revolution",
        Img: Bd3,
        desc: "In this module, students will learn how permissionless systems work. Students will also learn about enterprise blockchain and the future of finance. This module will cover how blockchain can disrupt industries including finance, banking, insurance, and even music.",
        colorId: 1,
      },
      {
        id: "1D",
        title: "Introduction to Decentralized Apps",
        Img: Bd4,
        desc: "In this module, students will learn about Ethereum, Decentralized Apps, Smart Contracts, and the EVM. Students will learn the benefits of the Ethereum Decentralized Platform and the fourth generation blockchain.",
        colorId: 1,
      },
      {
        id: "1E",
        title: "Ethereum and Hyperledger Fabric Basics",
        Img: Bd5,
        desc: "In this module, students will learn about blockchain nodes and how to run them. Students will also learn about the Ethereum ecosystem, Mist, and Faucets. After this completing this module, students will be able to compile, deploy and instantiate contracts. Students will also have an understanding of the different stages of a contract deployment.",
        colorId: 1,
      },
      {
        id: "1F",
        title: "Crypto Mining and Operations",
        Img: Bd6,
        desc: "In this module students will learn the process by which Bitcoins are mined and what roles do miners play in creation of Bitcoins. The details of this module would help students understand in great details how various mining strategies are applied by various miners and the powerful hardware custom built for mining. The students would also learn about the role of consensus in mining and the 51% attacks, how the incentives of mining attract miners and the energy consumption and ecological impact of mining.",
        colorId: 1,
      },
      {
        id: "2A",
        title: "Introduction to Smart Contracts",
        Img: Bd7,
        desc: "In this module students will be introduced to the programming and development side of Blockchain, especially that of Ethereum. The students will learn how to use a Remix IDE to program in Solidity. The students will go over various Blockchain concepts again such as Blockchain Basics, Blockchain Transactions, and Blockchain Blocks. The students will learn the infrastructural concepts of the Ethereum Blockchain, such as The Ethereum Virtual Machine, how Ethereum Accounts are formed and how Ethereum Transactions occur. They will also go over other concepts like Gas, Storage, Memory and the Stack, Instruction Set, Message Calls, Delegatecall / Callcode and Libraries, Logs, Creating contracts, and Self-destruct.",
        colorId: 2,
      },
      {
        id: "2B",
        title: "Solidity in Depth",
        Img: Bd8,
        desc: "In this module students will take an in depth look at Solidity language and learn about concepts like mapping, data types, events, operators, parameters, control structures, and error handling.Students will also begin creating Solidity contracts, event handling and layout of memory and storage variables.",
        colorId: 2,
      },
      {
        id: "3A",
        title: "HTML, CSS, and JavaScriptCrash Course",
        Img: Bd9,
        desc: "In this module the students finally move over to Dapp development. To accomodate Dapp development students will be given a crash course in HTML, CSS, and JavaScript and taught about various concepts of javascript in depth to help understand the interaction of Solidity and Web3.js",
        colorId: 3,
      },
      {
        id: "3B",
        title: "Blockchain WebApplications",
        Img: Bd10,
        desc: "The students will now be ready to develop a front-end for Solidity contracts. They’ll be taught about the Basics of React, REST API’s, in Node.js, Using Nginx to host Single Page Apps, and using Docker to deploy web apps in the cloud.",
        colorId: 3,
      },
      {
        id: "3C",
        title: "Web3 and Truffle",
        Img: Bd11,
        desc: "In this module the students will learn how to to work with Web3 & Truffle. They’ll also learn about toolkit to aid development of decentralised applications. This course introduces the two most currently relevant and covers everything from installation and setup to custom configuration and scripting. Building an interface to interact with a smart contract.Setting up event-driven interfaces. It also exposes the students to Adapting Truffle’s default behavior and Writing functional tests for smart contract.",
        colorId: 3,
      },
      {
        id: "4A",
        title: "BaaS (Blockchain-as-a-Service)",
        Img: Bd12,
        desc: "The students will begin to finally finish off will very high level concepts in Solidity and Blockchain, such as BaaS (Blockchain-as-a-Service). Working with Azure Blockchain as a Service, Deploy an Ethereum Consortium network on Azure, DevOps for Blockchains on Azure, Trying out the Visual Studio Code extension for Smart Contracts, and Building Dapps with Visual Studio.",
        colorId: 4,
      },
      {
        id: "4B",
        title: "The Art of Initial Coin Offering (ICO)",
        Img: Bd13,
        desc: "In this module the students will move over the the business side of Blockchain and learn about ICO. They will learn what is an ICO, how to create and verify Your Altcoin, What are steps in launching a ICO, how to write an ICO White Paper and how to do ICO marketing?",
        colorId: 4,
      },
      {
        id: "4C",
        title:
          "Blockchain Projects for Islamic Finance -A Match Made in Heaven",
        Img: Bd14,
        desc: "In the last module of this course the students will also get an opportunity to look at the Blockchain Projects for Islamic Finance. They will learn about developing Sharia-Compliant Financial and Blockchain Products, applications of Smart Contracts in Islamic Finance, private Chains in Islamic Banking, Emirates “Cheque Chain”, Islamic Trade Finance, Capital Markets-Musharaka Mutanaqisa (Diminishing Partnerships), as well as Automatic Sharia Compliance and Commodity Murabaha.",
        colorId: 4,
      },
    ],
  },
  "cloud-development": {
    title: "Cloud Development",
    desc: "A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.",
    colors: {
      technical: ["#f6c788", "#f2b159", "#ef9b2a", "#d58110"],
      innovative: ["#f8b9e1", "#f48bcd", "#ef5cb9"],
      base: "#a6640d",
    },
    Img: AcBg2,
    programDets: "A four-quarter cloud computing program.",
    technicalBlocks: [
      {
        title: "Quarter 1",
        desc: "Cloud Native Computing Foundations",
      },
      {
        title: "Quarter 2",
        desc: "Developing Cloud Native Microservices",
      },
      {
        title: "Quarter 3",
        desc: "Kubernetes in Practice",
      },
      {
        title: "Quarter 4",
        desc: "AWS Application Development",
      },
    ],
    innovationBlock: [
      {
        title: "Quarter 1",
        desc: "Innovation Methodologies",
      },
      {
        title: "Quarter 2",
        desc: "Infrastructure as Code DevOps",
      },
      {
        title: "Quarter 3",
        desc: "Lean UI/UX and Bot Design",
      },
    ],
    learningItems: [
      {
        id: "1A",
        title: "Introduction to Cloud Native Computing",
        Img: Cd1,
        desc: "Cloud native computing uses open-source software stacks to deploy applications as microservices, packaging each part into its own container and dynamically orchestrating those containers to optimize resource utilization. In the last 15 years, cloud application delivery has moved from being bound to physical servers to running on virtual machines with a full operating system and now to containers with Docker, where developers can specify every aspect of deployment.",
        colorId: 1,
      },
      {
        id: "1B",
        title: "Introduction to Linux and Bash using Python",
        Img: Cd2,
        desc: "Linux containers are poised to take over the world; we will start our course with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started.",
        colorId: 1,
      },
      {
        id: "1C",
        title: "Docker Deep Dive",
        Img: Cd3,
        desc: "This course provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.",
        colorId: 1,
      },
      {
        id: "1D",
        title: "JavaScript/TypeScript Programming",
        Img: Cd4,
        desc: "JavaScript is the default language of the web and the first universal programming language. In this module, students will dig through all the genuinely elegant parts of JavaScript, including syntax, objects, functions, inheritance, arrays, methods, etc. This module will build a solid foundation in functional and object-oriented programming using JavaScript (ES 2016) and TypeScript using Node.js. Assuming no prior programming experience on the part of the student, this module starts by focusing on the fundamentals of composing code with JavaScript. Introduction to only server based JavaScript/TypeScript is covered i.e. Node.js. Students will also learn about the syntax and structure of the language including operators and expressions, control structures, methods, and arrays using Node.",
        colorId: 1,
      },
      {
        id: "2A",
        title: "Developing Microservices using Node.js and Express",
        Img: Cd5,
        desc: "This module includes how to build microservices using Node.js. It starts by introducing Node’s powerful traits and shows students how they map to the features of microservices using JavaScript. Students will explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will see how easy it is to create a RESTful web service using Node.js, TypeScript and the Express micro-framework. Students will also learn gRPC and GraphQL based microservices. By the end of the module, students will be able to use JavaScript/Typescript to build a Node microservice and know how to test it, hook it up to a database, and automate the development process.",
        colorId: 2,
      },
      {
        id: "2B",
        title: "Version Control with Git",
        Img: Cd6,
        desc: "You won’t find a top programmer, cloud developer, or AI engineer who doesn’t use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.",
        colorId: 2,
      },
      {
        id: "2C",
        title: "Cloud Automation using Ansible",
        Img: Cd7,
        desc: "Ansible is an open-source IT automation engine which can remove drudgery from work life and will also dramatically improve the scalability, consistency, and reliability of your IT environment. In this module, students will start to explore how to automate repetitive cloud administration tasks using Ansible.",
        colorId: 2,
      },
      {
        id: "3A",
        title: "Kubernetes in Practice",
        Img: Cd8,
        desc: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam.",
        colorId: 3,
      },
      {
        id: "4A",
        title: "Cloud Native Application Development",
        desc: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices.",
        colorId: 4,
      },
    ],
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    desc: "A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.",
    colors: {
      technical: ["#94eac3", "#6ae2ab", "#3fd993", "#26c07a"],
      innovative: ["#f8b9e1", "#f48bcd", "#ef5cb9"],
      base: "#1d955f",
    },
    Img: AcBg3,
    programDets:
      "A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.",
    technicalBlocks: [
      {
        title: "Quarter 1",
        desc: "AI Foundations",
      },
      {
        title: "Quarter 2",
        desc: "Introduction to Data Science & Deep Learning",
      },
      {
        title: "Quarter 3",
        desc: "Deploying AI Solutions",
      },
      {
        title: "Quarter 4",
        desc: "AI In Practice",
      },
    ],
    innovationBlock: [
      {
        title: "Quarter 1",
        desc: "Innovation Methodologies",
      },
      {
        title: "Quarter 2",
        desc: "Infrastructure as Code DevOps",
      },
      {
        title: "Quarter 3",
        desc: "Lean UI/UX and Bot Design",
      },
    ],
    learningItems: [
      {
        id: "1A",
        title: "Version Control with Git",
        Img: Cd6,
        desc: "You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.",
        colorId: 1,
      },
      {
        id: "1B",
        title: "Object Oriented and Functional Programming using Python",
        Img: Ai2,
        desc: "In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time.",
        colorId: 1,
      },
      {
        id: "1C",
        title: "Introduction to Linear Algebra and Statistics",
        Img: Ai3,
        desc: "In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow.",
        colorId: 1,
      },
      {
        id: "2A",
        title: "Advanced Python Libraries with Anaconda",
        Img: Ai4,
        desc: "In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python. The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc.",
        colorId: 2,
      },
      {
        id: "2B",
        title: "Data Science Essentials",
        Img: Ai5,
        desc: "In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python.",
        colorId: 2,
      },
      {
        id: "2B",
        title:
          "The Fundamentals of Deep Learning with Keras with TensorFlow Backend",
        Img: Ai6,
        desc: "Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice.",
        colorId: 2,
      },
      {
        id: "3A",
        title: "Introduction to Linux and Bash",
        Img: Cd2,
        desc: "Linux containers are poised to take over the world. In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, knowledge of only a handful of basic commands is enough to start feeling comfortable. In this module, we will cover the basic commands to get you started.",
        colorId: 3,
      },
      {
        id: "3B",
        title: "Docker Deep Dive",
        Img: Cd3,
        desc: "This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.",
        colorId: 3,
      },
      {
        id: "3C",
        title: "Python Microservices Development",
        Img: Ai9,
        desc: "In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will learn how easy it is to create a RESTfulweb service using Python and Flask.",
        colorId: 3,
      },
      {
        id: "3C",
        title: "Build AI Microservices for ContainerDeployments",
        Img: Ai10,
        desc: "In this module, students will learn to use containers to simplify AI solution deployments and implement continuous integration and deployment strategies.",
        colorId: 3,
      },
      {
        id: "4A",
        title: "Artificial Intelligence (AI) in Practice",
        Img: Ai11,
        desc: "This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design.",
        colorId: 4,
      },
    ],
  },
  "internet-of-things": {
    title: "Internet of Things",
    desc: "A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI",
    colors: {
      technical: [
        "#85f0fa",
        "#54eaf8",
        "#23e4f6",
        "#09cadc",
        "#079dab",
        "#05707a",
      ],
      innovative: ["#f8b9e1", "#f48bcd", "#ef5cb9"],
      base: "#034349",
    },
    Img: AcBg4,
    programDets: "Six Quarters of IOT Course Work",
    technicalBlocks: [
      {
        title: "Quarter 1",
        desc: "Introduction to IoT Concepts and Rust Programming",
      },
      {
        title: "Quarter 2",
        desc: "Embedded Rust and Real-time Systems Programming",
      },
      {
        title: "Quarter 3",
        desc: "Micro Services Development for IoT Edge and IoT Cloud using Web Assembly, Node.js, Docker and KubeEdge technologies",
      },
      {
        title: "Quarter 4",
        desc: "Voice Computing for Device Control",
      },
      {
        title: "Quarter 5",
        desc: "Artificial Intelligence (AI) for Internet of Things (IoT)",
      },
      {
        title: "Quarter 6",
        desc: "Blockchain and IOTA Technologies for IoT (Optional)",
      },
    ],
    innovationBlock: [
      {
        title: "Quarter 1",
        desc: "Innovation Methodologies",
      },
      {
        title: "Quarter 2",
        desc: "Infrastructure as Code DevOps",
      },
      {
        title: "Quarter 3",
        desc: "Lean UI/UX and Bot Design",
      },
    ],
    learningItems: [
      {
        id: "1A",
        title: "What Is IoT?",
        Img: Cd1,
        desc: "This course will start by providing a definition of the term. We will talk about how various trends have enabled the Internet of Things, and how it changes the way programming is done. We will also discuss some of the ramifications that IoT is having on society today.",
        colorId: 1,
      },
      {
        id: "1B",
        title: "Embedded Systems",
        Img: Cd1,
        desc: "In this module we explore some of the details involved in the design and implementation of IoT devices. Unlike traditional computer-based systems, IoT devices are “embedded” within other devices in order to provide enhanced functionality without exposing the user to the complexities of a computer. The users interact with the device in a natural way, similar to their interactions with any other objects in the world. In this module we will discuss the structure of embedded systems and describe these interactions with the physical world.",
        colorId: 1,
      },
      {
        id: "1C",
        title: "Hardware and Software for IoT",
        desc: "IoT devices are implemented using both hardware and software components. Dedicated hardware components are used to implement the interface with the physical world, and to perform tasks which are more computationally complex. Microcontrollers are used to execute software that interprets inputs and controls the system. This module discusses the roles of both the hardware and software components in the system.",
        colorId: 1,
      },
      {
        id: "1D",
        title: "Networking and the Internet for IoT",
        desc: "This course will start by providing a definition of the term. We will talk about how various trends have enabled the Internet of Things, and how it changes the way programming is done. We will also discuss some of the ramifications that IoT is having on society today.",
        colorId: 1,
      },
      {
        id: "1E",
        title: "Edge and Cloud Computing for IoT",
        desc: "In IoT architecture, edge computing is a distributed computing paradigm which brings computer data storage closer to the location where it is needed. Computation is largely or completely performed on distributed device nodes. Edge computing pushes applications, data and computing power (services) away from centralized cloud points to locations closer to the user. Edge computing does not need contact with any centralized cloud, although in IoT archetectures it interacts with one.",
        colorId: 1,
      },
      {
        id: "1F",
        title: "Version Control with Git",
        Img: Cd6,
        desc: "You won't find a top programmer, web developer, or AI enginner who doesn't use version control. Because it helps you produce better results and makes collaboration easy. Around the world, in teams large and small, Git is an essential part of the tool chain. We will start learning our learning process by covering Git and Github.",
        colorId: 1,
      },
      {
        id: "1G",
        title: "Fundamentals of Rust Programming",
        desc: "This module explores key Rust concepts in depth, such as ownership, the type system, error handling, and fearless concurrency. This Rust programming language introduction will also show you how to: - Grasp important concepts unique to Rust, like ownership, borrowing, and lifetimes - Use Cargo, Rust’s built-in package manager, to build and maintain your code, including downloading and building dependencies - Effectively use Rust’s zero-cost abstractions and employ your own You’ll learn to develop reliable code that’s speed and memory efficient, while avoiding the infamous and arcane programming pitfalls common at the systems level.",
        colorId: 1,
      },
      {
        id: "2",
        title: "Embedded Rust and Real-time Systems Programming",
        desc: "A hands-on module teaches the Rust programming language in the context of embedded systems. As well as giving students a full grounding in the Rust programming language, this module teaches delegates how to program a modern embedded microcontroller using real-time development tools. The examples and exercises are tuned to the practical requirements of embedded microcontroller programming. What will you learn? The syntax and semantics of the Rust language for embedded programming The principles of embedded software programming and real-time programming How to program an embedded microcontroller in Rust A practical introduction to real-time development tools How to debug a Rust program on an STM32F3 Discovery device How to access memory-mapped peripherals using Rust How to write interrupt handlers in Rust An introduction to Real Time For the Masses (RTFM) framework An introduction to low power software design Best practices for embedded programming",
        colorId: 2,
      },
      {
        id: "3A",
        title: "Introduction to Linux and Bas",
        Img: Cd2,
        desc: "Linux containers are poised to take over the world; we will start this module with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started.",
        colorId: 3,
      },
      {
        id: "3B",
        title: "Docker Deep Dive",
        Img: Cd3,
        desc: "This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.",
        colorId: 3,
      },
      {
        id: "3C",
        title: "Fundamentals of Kubernetes for Edge and Cloud Computing",
        Img: Cd8,
        desc: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter we will teach you to use Kubernetes to deploy container-based distributed IoTapplications.",
        colorId: 3,
      },
      {
        id: "3D",
        title: "Developing Cloud Native IoT Microservices",
        Img: Cd5,
        desc: "This module teaches you how to build microservices using Node.js and WebAssembly/Rust. It starts by introducing Node's powerful traits and shows you how they map to the features of microservices using JavaScript and WebAssembly/Rust. You'll explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module we are going to show you how easy it is to create a RESTful web service using Node.js, WebAssembly/Rust and the Express microframework. We will also learn gRPC and GraphQL based microservices. By the end of the module, you'll be able to use JavaScript/WebAssembly to build a Node microservice and know how to test it, hook it up to a database, and automate the development process.",
        colorId: 3,
      },
      {
        id: "3E",
        title: "Fundamentals of KubeEdge",
        Img: Io1,
        desc: "The key goal for KubeEdge is extending Kubernetes ecosystem from cloud to edge. KubeEdge provides a containerized edge computing platform, which is inherently scalable. The rise of AI makes edge computing more important. Complex models trained in the cloud are deployed at the edge for inferencing. In this module we will go through the fundaments of KubeEdge technology.",
        colorId: 3,
      },
      {
        id: "4",
        title: "Voice Computing for Device Control",
        desc: "In this module we will learn to control IoT devices with the Google Assistant by building apps that integrate Smart functionality.",
        colorId: 4,
      },
      {
        id: "5",
        title: "Artificial Intelligence (AI) for Internet of Things (IoT)",
        desc: "Before implementing deep-learning algorithms in this quarter, we will first familiarize ourselves with mathematical blocks of neural networks theory. We going to start by getting our hands dirty writing some simple TensorFlow 2.0 code in Rust. And then move on to advanced deep learning concepts applicable to IoT projects. This module will also cover some essential advantages of TensorFlow 2.0 to convince you it’s the deep-learning library of choice.",
        colorId: 5,
      },
      {
        id: "6",
        title: "Blockchain and IOTA Technologies for IoT (Optional)",
        desc: "In last optional quarter we will discuss and implement an emerging aspect of the blockchain economy, machine-to-machine (M2M) transactions. We will cover, how machines can use IOTA blockchain to become autonomous market participants with their own bank accounts. We will then merge these blockcain concepts with artificial intelligence (AI) concepts learned in the previous quarters. These combine IoT, AI and Blockchain technologies allow machines in the Internet of Things to be able to lease themselves out, schedule and pay for their own maintenance, purchase their own replacement parts and keep their own transactional records, using blockchain.",
        colorId: 6,
      },
    ],
  },
  "innovation-track": {
    title: "4IR Innovation Leadership and Implementation",
    desc: "A NINE-MONTH SUPPLEMENTARY PROGRAM COMPULSORY FOR ALL PIAIC STUDENTS REQUIRED FROM THE 2ND QUARTER OF THE MAJOR COURSE OF STUDY. TRAINING INNOVATION LEADERS WITH A COMBINATION OF DIFFERENT LEADERSHIP STYLES TO INFLUENCE TEAM MEMBERS TO PRODUCE CREATIVE IDEAS, PRODUCTS, AND SERVICES.",
    colors: {
      innovative: ["#f8b9e1", "#f48bcd", "#ef5cb9"],
      base: ["#d1158c"],
    },
    Img: AcBg5,
    programDets: "Four Quarters of Blockchain Course Work",
    innovationBlock: [
      {
        title: "Quarter 1",
        desc: "Innovation Methodologies",
      },
      {
        title: "Quarter 2",
        desc: "Infrastructure as Code DevOps",
      },
      {
        title: "Quarter 3",
        desc: "Lean UI/UX and Bot Design",
      },
    ],
    learningItems: [
      {
        id: "1A",
        title: "Design Thinking",
        Img: It1,
        desc: "Combining Design Thinking, Lean Startup, Agile, and DevOps for Innovation Innovation doesn’t just happen. It requires an iterative, experimental approach (Source: Gartner): Use Design Thinking to Understand the Customer and Discover the Real Need Evolve the Innovation Using Lean Startup Use Agile to Build Out and Evolve the Technology Elements of the Innovation Use DevOps for Continuous Integration DevOps is a process required for innovation, and is a technology value stream that is required to convert a busi hypothesis into a technology enabled service that delivers value to the customer. The value stream begins when an engi checks in a change in a version control system and ends when the change successfully runs in production, providing valu the customer. The goal is to have testing and operations happening simultaneously with design/development, enabling fast  and high quality.",
        colorId: 1,
      },
      {
        id: "1B",
        title: "Design Thinking to Understand the Customer",
        Img: It2,
        desc: "In this sub module, we will learn to create something new in a rapidly changing world. We will learn how to design digital and physical products, services, business models, and business ecosystems. We take an in-depth understanding of the design thinking process and learn that in order to succeed, we usually need a (customer) need; an interdisciplinary team; the right mindset; and the necessary leeway for experimentation, creativity, and the courage to question what exists.",
        colorId: 1,
      },
      {
        id: "1C",
        title: "Lean Startup to Evolve the Innovation",
        Img: It3,
        desc: "In The Lean Startup, Eric Ries lays out his vision for how to ensure that the ideas that have the most value get the most resources. The method Ries promotes relies on experimentation, rapid iteration of ideas, and evolutionary processes. This Build-Measure-Learn feedback loop is used to develop the minimum viable product. In this sub module, we will learn how to evolve the innovation into something that the customers desire and need.",
        colorId: 1,
      },
      {
        id: "1D",
        title: "Preparing for the PMI Agile Certified Practitioner (PMI-ACP)",
        Img: It4,
        desc: "The PMI-ACP is most significant qualification in the domain of project delivery—not just for leaders and managers, but also for agile and innovation practitioners and team members. In this sub module, we will cover the material required to pass the PMI-ACP certification exam and become experts in Agile methodologies.",
        colorId: 1,
      },
      {
        id: "2A",
        title: "Introduction to Linux and Bash using Python",
        Img: Cd2,
        desc: "Linux containers are poised to take over the world; we will start our course with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started.",
        colorId: 2,
      },
      {
        id: "2B",
        title: "Docker Deep Dive",
        Img: Cd3,
        desc: "This course provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.",
        colorId: 2,
      },
      {
        id: "2C",
        title: "Implementing Agile using Jira",
        Img: It7,
        desc: "Jira supports any agile project management methodology for software development. In this sub module, we will learn to implement Scrum methodology using Jira.",
        colorId: 2,
      },
      {
        id: "2D",
        title: "Continuous Integration and Continuous Delivery using Jenkins",
        Img: It8,
        desc: "In the sub module, we will learn how to use Jenkins as an extensible automation server and turn it into the continuous delivery hub for any software project.",
        colorId: 2,
      },
      {
        id: "2E",
        title: "Agentless IT automation using Ansible",
        Img: Cd7,
        desc: "In this sub module, we will learn Ansible, which is a universal language that unravels the mystery of how work gets done. We will learn how it turns tough tasks into repeatable playbooks and how to roll out enterprise-wide protocols with the push of a button.",
        colorId: 2,
      },
      {
        id: "2F",
        title: "Manage any Cloud, Infrastructure, or Service using Terraform",
        Img: It10,
        desc: "We will learn how to safely and predictably create, change, and improve infrastructure using Terraform. How it enables users to define and provision a datacenter infrastructure using a high-level configuration language.",
        colorId: 2,
      },
      {
        id: "2G",
        title: "Real-time monitoring through Prometheus",
        Img: It11,
        desc: "In this sub module, the student will learn how to use Prometheus as a systems monitoring and alerting toolkit. The student will learn that Prometheus works well for recording any purely numeric time series. It fits both machine-centric monitoring as well as monitoring of highly dynamic service-oriented architectures. In a world of microservices, its support for multi-dimensional data collection and querying is a particular strength.",
        colorId: 2,
      },
      {
        id: "3A",
        title: "Lean UX",
        Img: It12,
        desc: "The junction of Lean Startup and User Experience-based (UX) design and their symbiotic coexistence—is Lean UX. We will learn how the underlying principles of Lean Startup apply to Lean UX. Lean UX provides a prescriptive framework for building better products, moving design away from pixel perfection, toward iterative learning, smarter effort, and outcome-based results. The focus is that the product managers, business owners, team members and startup employees—along with designers— learn from Lean UX.",
        colorId: 3,
      },
      {
        id: "3B",
        title: "Designing and Prototyping Content for Websites and Mobile Apps",
        Img: It13,
        desc: "This sub module covers the material required by the creative professionals and UI/UX designers seeking the fastest, easiest, most comprehensive way to learn to develop content for websites and mobile apps. We will go through multiple project-based lessons which will take you step-by-step through key techniques in UI/UX design using different tools. The student will set up a project, create graphics, add images and text, organize content, and work with symbols and libraries.",
        colorId: 3,
      },
      {
        id: "3C",
        title: "Designing Bots: Creating Conversational Experiences",
        Img: It14,
        desc: "New conversational apps are revolutionizing the way we interact with software. This practical sub module shows you how to design and build great conversational experiences and delightful bots that help people be more productive, whether it’s for a new consumer service or an enterprise efficiency product. The student will learn how to use an effective onboarding process, outline different flows, define a bot personality, and choose the right balance of rich control and text.",
        colorId: 3,
      },
    ],
  },
};
