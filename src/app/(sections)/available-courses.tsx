import { CardWithBg } from "@/components";

import { availableCoursesData } from "@/data";

import { Wave1 } from "@/internal-assets";
import { FlowAnimation } from "../(animations)";

const AvailableCourses = () => {
  return (
    <section
      id="available-courses"
      className="relative flex flex-col w-full h-auto items-center bg-[color:var(--primary-color-7)] z-[500]"
    >
      <div className="relative top-0 left-0 w-full h-auto z-[200] mt-[-110px] max-xl:mt-[-90px] max-lg:mt-[-65px] max-md:mt-[-55px] max-sm:mt-[-40px] max-xs:mt-[-22px]">
        <Wave1 fillColor="var(--primary-color-7)" />
      </div>
      <div className="flex 2xl:max-w-[1400px] w-[90%] flex-col h-full my-[60px] max-md:w-[95%]">
        <FlowAnimation
          transitionDuration={0.5}
          initialY={"-200%"}
          finalY={"0%"}
          once={true}
          className="flex items-center self-center"
        >
          <h1 className="text-[50px] text-center text-[color:var(--primary-color-1)] font-black max-md:text-[40px]">
            Available Programs
          </h1>
        </FlowAnimation>
        <div className="grid grid-cols-3 gap-[5%] mt-[30px] mb-6 max-xl:gap-[10px] max-lg:gap-[30px] max-lg:grid-cols-2 max-lg:mb-10 max-lg:h-auto max-sm:grid-cols-1 max-sm:gap-[10px] max-xs:gap-[5px]">
          {availableCoursesData.map((acd, i) => {
            return (
              <FlowAnimation
                transitionDuration={0.7}
                transitionDelay={
                  (i + i + 2) / availableCoursesData.length + 0.5
                }
                initialX={"-100%"}
                finalX={"0%"}
                className="flex justify-center items-center"
                key={i}
              >
                <CardWithBg {...acd} />
              </FlowAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailableCourses;
