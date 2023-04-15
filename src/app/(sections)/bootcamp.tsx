import { FC } from "react";

import { IBootcamp } from "@/sections";

const Bootcamp: FC<IBootcamp> = ({
  title,
  subTitle,
  wave,
  about,
  baseBgColor,
  Illustration,
  techIcons,
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
          <div className="grid grid-cols-6 items-center gap-5">
            <div className="col-span-2">
              <Illustration />
            </div>
            <div className="col-span-4 flex flex-col">
              <p className="text-justify text-white text-[18px]">{about}</p>
              <div className="flex flex-wrap mt-5 gap-5">
                {techIcons.map((ti, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center text-slate-300 w-[50px]">
                      <div className="text-[40px]">
                        <ti.Icon />
                      </div>
                      <p className="text-[12px] translate-y-[-1px]">{ti.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      {wave && <div></div>}
    </div>
  );
};

export default Bootcamp;
