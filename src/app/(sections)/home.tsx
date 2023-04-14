import Image from "next/image";
import Link from "next/link";

import { Typewriter } from "@/components";

import { Fg1 } from "@/assets";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex relative justify-center h-[800px] py-10 w-full bg-gradient-to-b from-[color:var(--primary-color-5)] to-[color:var(--primary-color-6)]"
    >
      <div
        className="absolute h-full w-full top-0 left-0 bg-no-repeat bg-center"
        style={{ backgroundImage: "url(bg1.png)" }}
      />
      <div className="flex 2xl:max-w-[1400px] w-[90%] justify-between h-full mt-[50px]">
        <div className="w-[calc(100%-450px-50px-10px)] flex flex-col justify-center">
          <h2 className="text-[65px] leading-none font-black text-[color:var(--primary-color-1)]">
            Presidential Intitiative
          </h2>
          <h3 className="font-montserrat text-[31px] mb-4 text-[color:var(--primary-color-1)]">
            for Artificial Intelligence & Computing (PIAIC)
          </h3>
          <p className="text-[18px]">
            Leading Pakistan in Following Technologies 👇
          </p>
          <h3 className="font-montserrat text-[35px] font-bold mb-4 text-[color:var(--primary-color-3)] h-[57px]">
            <Typewriter
              words={[
                "Blockchain Development",
                "Cloud Development",
                "AI and ML",
                "Internet of Things",
                "Web3 and Metaverse",
              ]}
              loop={0}
            />
          </h3>
          <p className="text-justify text-[22px] mb-4">
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </p>
          <div className="flex gap-2 items-center">
            <Link
              href={"/available-programs"}
              target="_blank"
              className="text-[color:var(--primary-color-2)] bg-[color:var(--primary-color-1)] py-2 px-4 rounded-md text-[22px] cursor-pointer"
            >
              Available Programs
            </Link>
            <Link
              href={"/apply"}
              target="_blank"
              className="text-[color:var(--primary-color-3)] border border-[color:var(--primary-color-3)] py-2 px-4 rounded-md text-[22px] cursor-pointer"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="w-[450px] flex relative items-center scale-x-[-1]">
          <Image
            src={Fg1}
            alt="piaic president"
            fill
            sizes="302px"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
