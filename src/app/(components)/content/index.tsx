import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { TfiYoutube } from "react-icons/tfi";

import { IContent } from "@/sections";

const ContentComponent: FC<IContent> = ({ channel, details }) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex gap-4">
        {details.map((d) => {
          return (
            <Link
              href={d.url}
              key={d.title}
              className="flex flex-col items-center"
              target="_blank"
            >
              <div className="relative w-[270px] h-[150px]">
                <Image src={d.imgUrl} alt={d.title} fill={true} />
              </div>
              <div className="whitespace-break-spaces">{d.title}</div>
            </Link>
          );
        })}
      </div>
      <div>
        <Link
          href={channel}
          className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-red-600"
          target="_blank"
        >
          <TfiYoutube className="text-white text-[35px]" />
        </Link>
      </div>
    </div>
  );
};

export default ContentComponent;
