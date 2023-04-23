import { BoxGrid, LearningPath } from "../(components)";

import { availableCoursesPageData } from "@/data/data";

import { CourseKeyT, IAvailableCoursesPageData } from "@/data";
import Image from "next/image";

const AvailableCourses = ({
  params,
}: {
  params: {
    courseName: CourseKeyT;
  };
}) => {
  const {
    title,
    desc,
    colors,
    Img,
    programDets,
    technicalBlocks,
    innovationBlock,
    learningItems,
  } =
    availableCoursesPageData[
      params.courseName as keyof IAvailableCoursesPageData
    ];

  return (
    <div className="flex flex-col items-center translate-y-[-1px]">
      <section className="relative h-[calc(100vh-60px-20px)] min-h-[400px] w-full flex flex-col items-center justify-center text-white">
        <div className="absolute z-[50] top-0 left-0 w-full h-full">
          <Image
            src={Img}
            alt={title}
            fill
            sizes="1280px"
            placeholder="blur"
            draggable={false}
          />
        </div>
        <div className="absolute z-[70] top-0 left-0 w-full h-full bg-slate-600/60"></div>
        <div className="flex flex-col items-center justify-center z-[100]">
          <h1 className="text-[50px] font-bold text-center mb-4">{title}</h1>
          <h2 className="2xl:max-w-[1400px] text-[22px] leading-[1.1] w-[70%] text-center">
            {desc}
          </h2>
        </div>
      </section>
      <div className="relative flex 2xl:max-w-[1400px] w-[90%] flex-col py-8">
        <section className="flex flex-col justify-center items-center text-center mb-6">
          <h1 className="font-bold text-[45px] text-[color:var(--primary-color-1)]">
            Program Structure
          </h1>
          <h2 className="text-[25px]">{programDets}</h2>
        </section>
        {technicalBlocks && (
          <>
            <section className="flex flex-col my-6">
              <BoxGrid
                heading="Technical Track"
                gridData={technicalBlocks}
                colors={colors["technical"]}
              />
            </section>
            <hr className="border-slate-900 dark:bg-white" />
          </>
        )}
        <section className="flex flex-col my-6">
          <BoxGrid
            heading="Compulsory Innovation Track"
            link="/innovation-track"
            gridData={innovationBlock}
            colors={colors["innovative"]}
            hideHeading={!technicalBlocks}
          />
        </section>
        <hr className="border-slate-900 dark:bg-white" />
        <section className="flex w-full items-center justify-center">
          <LearningPath
            learningItems={learningItems}
            baseColor={colors["base"]}
            technicalColors={
              technicalBlocks ? colors["technical"] : colors["innovative"]
            }
          />
        </section>
      </div>
    </div>
  );
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { courseName: "blockchain-development" },
    { courseName: "cloud-development" },
    { courseName: "artificial-intelligence" },
    { courseName: "internet-of-things" },
    { courseName: "innovation-track" },
  ];
}

export default AvailableCourses;
