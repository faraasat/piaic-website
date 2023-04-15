import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { IAvailableCoursesData } from "@/data";

const CardWithBg: FC<IAvailableCoursesData> = ({
  title,
  url,
  content,
  Img,
  alt,
}) => {
  return (
    <Link
      href={url}
      className="flex flex-col relative items-center h-[350px] overflow-hidden rounded-lg group border border-[color:var(--primary-color-3)] group-hover:border-none transition-all max-lg:h-[270px] max-sm:h-[200px]"
    >
      <div className="absolute top-0 left-0 w-full h-full z-[30]">
        <div className="hidden transition-all group-hover:flex relative top-0 left-0 w-full h-[350px] z-[40] bg-[color:rgba(1,1,1,0.6)] bg-cover bg-no-repeat"></div>
        <Image
          src={Img}
          alt={alt}
          fill
          sizes="300px"
          draggable={false}
          className="hidden transition-all group-hover:flex relative top-0 left-0 w-full h-full bg-cover bg-no-repeat z-[35]"
        />
      </div>
      <div className="relative flex flex-col w-full h-full z-[100] px-5 py-8 justify-center gap-8 max-xl:gap-4">
        <div className="leading-[1.5] text-center text-[color:var(--primary-color-3)] transition-colors group-hover:text-[color:var(--primary-color-2)] text-[30px] font-bold max-xl:text-[25px] max-lg:leading-[1]">
          {title}
        </div>
        <div className="leading-[1.5] text-[color:var(--primary-color-3)] transition-colors group-hover:text-[color:var(--primary-color-2)] text-[20px] text-justify capitalize font-montserrat max-xl:text-[18px] max-lg:leading-[1]">
          {content}
        </div>
      </div>
    </Link>
  );
};

export default CardWithBg;
