import { FC } from "react";

import Image from "next/image";

import { ILearningCard } from "../";

const LearningCard: FC<ILearningCard> = ({
  id,
  title,
  Img,
  desc,
  reverse,
  baseColor,
  technicalColor,
}) => {
  return (
    <div
      className="flex justify-between items-center gap-5"
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <div className="w-[500px]"></div>
      <div
        className="flex w-[50px] h-[50px] rounded-full self-center items-center justify-center"
        style={{ backgroundColor: technicalColor }}
      >
        {id}
      </div>
      <div className="w-[500px]">
        <div className="flex flex-col w-full rounded-md shadow-[0px_0px_7px_1px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.25)] dark:shadow-[0px_0px_7px_1px_rgba(255,255,255,0.25)] dark:hover:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.25)] transition-all cursor-pointer">
          <h1
            className="py-3 px-4 rounded-t-md font-montserrat font-bold"
            style={{ backgroundColor: baseColor }}
          >
            {title}
          </h1>
          <div className="flex gap-5 my-3 py-3 px-4">
            {Img && (
              <>
                <div className="relative flex justify-center items-center w-[120px] h-[100px] border border-slate-600 dark:border-white">
                  <Image
                    src={Img}
                    alt={title}
                    sizes="120px"
                    placeholder="blur"
                    draggable={false}
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex text-justify leading-5 w-[calc(120%-120px-20px)]">
                  {desc}
                </div>
              </>
            )}
            {!Img && (
              <div className="flex text-justify leading-5 w-full">{desc}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
