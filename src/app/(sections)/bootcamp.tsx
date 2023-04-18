import { FC } from "react";

import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import { IBootcamp } from "@/sections";

import { ContentComponent, InstructorsComponent } from "@/components";

import { Wave2 } from "@/internal-assets";
import Image from "next/image";
import { BiLock } from "react-icons/bi";

const Bootcamp: FC<IBootcamp> = ({
  title,
  subTitle,
  wave,
  about,
  baseBgColor,
  secBgColor,
  Illustration,
  techIcons,
  instructors,
  content,
  blendMode = "normal",
  nonContentLink,
}) => {
  return (
    <div
      id={title}
      className={`relative flex flex-col w-full h-auto items-center`}
      style={{ backgroundColor: baseBgColor }}
    >
      <div
        className="absolute self-center top-[550px] left-[25%] h-[0.1px] w-[0.1px] rounded-full bg-[color:var(--primary-color-5)] z-[50] shadow-[0px_0px_500px_500px] shadow-orange-300 opacity-50"
        style={{ mixBlendMode: blendMode! as any }}
      ></div>
      <div
        className="absolute self-center bottom-[550px] right-[25%] h-[0.1px] w-[0.1px] rounded-full bg-[color:var(--primary-color-5)] z-[50] shadow-[0px_0px_500px_500px] shadow-fuchsia-300 opacity-50"
        style={{ mixBlendMode: blendMode! as any }}
      ></div>
      <div className="relative flex 2xl:max-w-[1400px] w-[90%] flex-col h-full my-[60px] z-[300]">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-[65px] text-center">{title}</h1>
          <h3 className="text-white text-[25px] text-center font-montserrat">
            {subTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-8 mt-10">
          <div className="grid grid-cols-12 items-center gap-5 max-lg:flex max-lg:flex-col">
            <div className="col-span-4 max-lg:w-[400px]">
              <Illustration />
            </div>
            <div className="col-span-8 flex flex-col max-lg:w-full">
              <p className="text-justify text-white text-[22px] leading-[1.02] max-sm:text-[18px]">
                {about}
              </p>
              <div className="flex flex-wrap mt-5 gap-5 max-lg:justify-center max-sm:gap-3">
                {techIcons.map((ti, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-slate-300 w-[50px] max-sm:w-[28px]"
                    >
                      <div className="text-[40px] max-sm:text-[25px]">
                        <ti.Icon />
                      </div>
                      <p className="text-[12px] translate-y-[-1px] max-sm:text-[8px] max-sm:translate-y-0">
                        {ti.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-[40px] items-center justify-between max-xl:flex-col">
            <div className="flex flex-col text-white w-[500px] max-xl:mt-4 max-xl:w-full">
              <h1 className="self-center text-[40px] mb-16 max-xl:mb-3">
                Instructors
              </h1>
              <div className="mt-3">
                {Array.isArray(instructors) ? (
                  <div className="flex items-start gap-7 max-xl:flex-wrap max-xl:justify-center max-sm:gap-4">
                    {instructors.map((ins) => {
                      return (
                        <div
                          key={ins.name}
                          className="flex flex-col items-center text-center w-[300px] max-xl:w-[125px] max-md:w-[75px]"
                        >
                          <div className="rounded-full">
                            <Image
                              placeholder="blur"
                              className="rounded-full"
                              src={ins.Img}
                              alt={ins.name}
                              width={120}
                              height={120}
                              draggable={false}
                            />
                          </div>
                          <div className="font-bold text-[16px] leading-[1.02]">
                            {ins.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <InstructorsComponent
                    main={instructors.main}
                    focus={instructors.focus}
                    small={instructors?.small}
                  />
                )}
              </div>
            </div>
            {content ? (
              <div className="flex flex-col text-white w-auto">
                <div className="self-center text-[40px] mb-3">Content</div>
                <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-4">
                  <div className="text-[32px] mb-2">Urdu</div>
                  <ContentComponent
                    channel={content.urdu.channel}
                    details={content.urdu.details}
                  />
                  <div className="sm:hidden max-sm:flex max-sm:items-center">
                    <Link
                      href={content.urdu.channel}
                      className="flex items-center gap-3 rounded-full py-3 px-6 bg-red-500"
                    >
                      <BiLock /> <div>Access Now</div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col mt-5 max-sm:flex-row max-sm:items-center max-sm:gap-4">
                  <div className="text-[32px] mb-2">English</div>
                  <ContentComponent
                    channel={content.english.channel}
                    details={content.english.details}
                  />
                  <div className="sm:hidden max-sm:flex max-sm:items-center">
                    <Link
                      href={content.english.channel}
                      className="flex items-center gap-3 rounded-full py-3 px-6 bg-red-500"
                    >
                      <BiLock /> <div>Access Now</div>
                    </Link>
                  </div>
                </div>
                <div className="flex self-center mt-14">
                  <Link
                    className="py-3 px-5 flex items-center justify-center rounded-full text-white bg-purple-500 gap-2"
                    href={content.link}
                    target="_blank"
                  >
                    <div>Check Out the Roadmap</div>
                    <BsArrowRight className="translate-y-1" />
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <Link
                  className="py-3 px-5 flex items-center justify-center rounded-full text-white bg-purple-500 gap-2"
                  href={nonContentLink!}
                  target="_blank"
                >
                  <div>Check Out the Roadmap</div>
                  <BsArrowRight className="translate-y-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {wave && (
        <div className="relative w-full translate-y-[1px] z-500">
          <Wave2 fillColor={secBgColor} />
        </div>
      )}
    </div>
  );
};

export default Bootcamp;
