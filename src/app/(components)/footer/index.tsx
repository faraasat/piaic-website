import Image from "next/image";
import Link from "next/link";

import { BiLink } from "react-icons/bi";
import { BsFillTelephoneFill, BsPinAngleFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";

import { Logo } from "@/assets";

import { footerQuickNavData, footerSocialsData } from "@/data";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="mt-[100px] flex justify-center bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] text-[color:var(--primary-color-2)]">
        <div className="2xl:max-w-[1400px] w-[90%] py-8 flex justify-between flex-row max-md:flex-col">
          <div className="flex flex-col items-center w-[35%] max-md:mb-8 max-md:flex-row max-md:w-[100%] max-md:gap-5">
            <div className="flex">
              <Link href={"/"} className="relative w-[134px] h-[184px]">
                <Image
                  src={Logo}
                  alt="PIAIC Logo"
                  fill
                  sizes="184"
                  priority
                  placeholder="empty"
                  draggable={false}
                />
              </Link>
            </div>
            <div className="flex flex-col items-center w-auto">
              <h3 className="text-center my-4 font-montserrat font-bold text-lg max-md:mt-0 max-md:mb-2">
                Modernizing Pakistan with Cutting Edge Technologies
              </h3>
              <p className="text-justify">
                The mission of PIAIC is to reshape Pakistan by revolutionizing
                education, research, and business by adopting latest,
                cutting-edge technologies. Experts are calling this the 4th
                industrial revolution. We want Pakistan to become a global hub
                for AI, data science, cloud native computing, edge computing,
                blockchain, augmented reality, and internet of things.
              </p>
            </div>
          </div>
          <div className="h-[100%] w-[1px] bg-[color:var(--primary-color-2)] max-md:hidden" />
          <div className="flex items-center flex-col w-auto max-md:mb-8 max-md:w-[100%] max-md:gap-5">
            <h3 className="flex font-montserrat items-center gap-2 font-black text-xl mb-4 max-md:font-bold max-md:font-lg max-md:gap-1 max-md:mb-0 max-md:whitespace-nowrap">
              <BiLink className="text-[28px] max-md:text-[30px] max-md:mr-2" />{" "}
              Quick Navigation
            </h3>
            <ul className="flex ml-10 flex-col max-md:flex-row max-md:flex-wrap max-md:ml-0">
              {footerQuickNavData.map((fqn, i) => (
                <li
                  key={i}
                  className="flex text-lg list-disc mt-3 md:mr-0 max-md:text-md max-md:mr-4 max-md:mt-0 max-md:list-none"
                >
                  <div className="hidden max-md:flex">⚡ </div>
                  <Link href={fqn.url}>{fqn.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[100%] w-[1px] bg-[color:var(--primary-color-2)] max-md:hidden" />
          <div className="flex flex-col w-auto max-md:flex-row max-md:justify-between">
            <div className="flex flex-col">
              <h3 className="flex font-montserrat items-center gap-2 font-black text-xl mb-2 max-md:font-bold max-md:font-lg">
                <BsPinAngleFill /> Locations
              </h3>
              <p className="mt-1">Karachi</p>
              <p className="mt-1">Lahore</p>
              <p className="mt-1">Islamabad</p>
              <p className="mt-1">Peshawar</p>
            </div>
            <div>
              <h3 className="flex font-montserrat items-center gap-2 font-black text-xl mb-2 mt-5 max-md:font-bold max-md:font-lg  max-md:mt-0">
                <BsFillTelephoneFill /> Helpline
              </h3>
              <p className="mt-1">
                +92-308-2220203
                <br />
                (WhatsApp as well)
              </p>
            </div>
            <div>
              <h3 className="flex font-montserrat flex-wrap items-center gap-2 font-black text-xl mb-2 mt-5 max-md:font-bold max-md:font-lg  max-md:mt-0">
                <IoShareSocialSharp /> Socials
              </h3>
              <div className="flex gap-5">
                {footerSocialsData.map((fsd, i) => (
                  <Link href={fsd.url} key={i}>
                    <fsd.Icon className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[color:var(--primary-color-4)] flex justify-center py-2">
        <div className="2xl:max-w-[1400px] w-[90%] text-[color:var(--primary-color-2)] text-center">
          Copyright &copy; PIAIC 2023. All Rights Reserved!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
