import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { TfiYoutube } from "react-icons/tfi";

import { IContent } from "@/sections";

import { FlowAnimation } from "@/animations";

const ContentComponent: FC<IContent> = ({ channel, details }) => {
  return (
    <div className="flex justify-start items-center gap-4 max-sm:hidden">
      <div className="flex gap-4">
        {details.map((d, i) => {
          return (
            <FlowAnimation
              transitionDuration={0.5}
              transitionDelay={i * 0.4}
              initialX={"100%"}
              finalX={"0%"}
              once={true}
              key={d.title}
            >
              <Link
                href={d.url}
                className="flex flex-col items-center"
                target="_blank"
              >
                <div className="relative w-[270px] h-[150px] max-md:w-[220px] max-md:h-[120px]">
                  <Image
                    src={d.imgUrl}
                    alt={d.title}
                    fill={true}
                    sizes="270px"
                  />
                </div>
                <div className="whitespace-break-spaces text-center">
                  {d.title}
                </div>
              </Link>
            </FlowAnimation>
          );
        })}
      </div>
      <FlowAnimation
        transitionDuration={0.5}
        transitionDelay={1}
        initialX={"100%"}
        finalX={"0%"}
        once={true}
      >
        <Link
          href={channel}
          className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-red-600"
          target="_blank"
        >
          <TfiYoutube className="text-white text-[35px]" />
        </Link>
      </FlowAnimation>
    </div>
  );
};

export default ContentComponent;
