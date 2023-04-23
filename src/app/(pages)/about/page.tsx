import Image from "next/image";

import { aboutPageData } from "@/data";

import { About } from "@/assets";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center relative w-full">
      <div className="relative flex items-center justify-center h-[400px] w-full">
        <Image
          src={About}
          alt="about"
          fill
          placeholder="blur"
          draggable={false}
          style={{ objectFit: "cover" }}
          className="z-[50]"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] opacity-50 z-[70]"></div>
        <h1 className="text-[45px] z-[100] font-bold">About PIAIC</h1>
      </div>
      <div className="flex bg-gradient-to-r from-[color:var(--primary-color-5)] to-[color:var(--primary-color-6)] w-full h-auto justify-center">
        <div className="relative flex 2xl:max-w-[1000px] w-[70%] max-md:w-[80%] max-sm:w-[90%] py-10">
          <div className="flex flex-col text-justify gap-6">
            {aboutPageData.map((apd, i) => (
              <p className="text-[22px] leading-5" key={i}>
                {apd}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
