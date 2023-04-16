import { FC } from "react";

import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import { IBootcamp } from "@/sections";

import { ContentComponent, InstructorsComponent } from "@/components";

const Bootcamp: FC<IBootcamp> = ({
  title,
  subTitle,
  wave,
  about,
  baseBgColor,
  Illustration,
  techIcons,
  instructors,
  content,
}) => {
  return (
    <div
      id={title}
      className={`relative flex flex-col w-full h-auto items-center`}
      style={{ backgroundColor: baseBgColor }}
    >
      <div className="flex 2xl:max-w-[1400px] w-[90%] flex-col h-full my-[60px]">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-[65px] text-center">{title}</h1>
          <h3 className="text-white text-[25px] text-center font-montserrat">
            {subTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-8 mt-10">
          <div className="grid grid-cols-12 items-center gap-5">
            <div className="col-span-4">
              <Illustration />
            </div>
            <div className="col-span-8 flex flex-col">
              <p className="text-justify text-white text-[22px] leading-[1.02]">
                {about}
              </p>
              <div className="flex flex-wrap mt-5 gap-5">
                {techIcons.map((ti, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-slate-300 w-[50px]"
                    >
                      <div className="text-[40px]">
                        <ti.Icon />
                      </div>
                      <p className="text-[12px] translate-y-[-1px]">
                        {ti.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-[40px] items-center">
            <div className="flex flex-col text-white w-[500px]">
              <h1 className="self-center text-[40px]">Instructors</h1>
              <div className="mt-3">
                <InstructorsComponent
                  main={instructors.main}
                  focus={instructors.focus}
                  small={instructors.small}
                />
              </div>
            </div>
            <div className="flex flex-col text-white w-[calc(100%-500px-20px-10px)]">
              <div className="self-center text-[40px] mb-3">Content</div>
              <div className="flex flex-col">
                <div className="text-[32px] mb-2">Urdu</div>
                <div>
                  <ContentComponent
                    channel={content.urdu.channel}
                    details={content.urdu.details}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <div className="text-[32px] mb-2">English</div>
                <div>
                  <ContentComponent
                    channel={content.english.channel}
                    details={content.english.details}
                  />
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
          </div>
        </div>
      </div>
      {wave && <div></div>}
    </div>
  );
};

export default Bootcamp;
