import { CardWithBg } from "@/components";

import { availableCoursesData } from "@/data";

import { Wave1 } from "@/internal-assets";

const AvailableCourses = () => {
  return (
    <section
      id="available-courses"
      className="relative flex flex-col w-full h-auto items-center bg-[color:var(--primary-color-2)] z-[500]"
    >
      <div className="relative top-0 left-0 w-full h-auto z-[200] mt-[-110px] max-xl:mt-[-90px] max-lg:mt-[-65px] max-md:mt-[-55px] max-sm:mt-[-40px]">
        <Wave1 fillColor="var(--primary-color-2)" />
      </div>
      <div className="flex 2xl:max-w-[1400px] w-[90%] flex-col h-full my-[60px] max-md:w-[95%]">
        <h1 className="self-center text-[50px] text-[color:var(--primary-color-1)] font-black max-md:text-[40px]">
          Available Programs
        </h1>
        <div className="grid grid-cols-3 gap-[5%] mt-[30px] mb-6 max-xl:gap-[10px] max-lg:gap-[30px] max-lg:grid-cols-2 max-lg:mb-10 max-lg:h-auto max-sm:grid-cols-1 max-sm:gap-[10px] max-xs:gap-[5px]">
          {availableCoursesData.map((acd, i) => {
            return <CardWithBg {...acd} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailableCourses;
