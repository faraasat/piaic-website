import { CardWithBg } from "@/components";

import { availableCoursesData } from "@/data";

import { Wave1 } from "@/internal-assets";

const AvailableCourses = () => {
  return (
    <section
      id="available-courses"
      className="relative flex flex-col w-full h-auto items-center"
    >
      <div className="relative top-0 left-0 w-full h-auto z-[200] mt-[-130px]">
        <Wave1 fillColor="var(--primary-color-2)" />
      </div>
      <div className="flex 2xl:max-w-[1400px] w-[90%] flex-col h-full my-[60px]">
        <h1 className="self-center text-[50px] text-[color:var(--primary-color-1)] font-black">
          Available Programs
        </h1>
        <div className="grid grid-cols-3 gap-5 mt-[30px]">
          {availableCoursesData.map((acd, i) => {
            return <CardWithBg {...acd} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailableCourses;
