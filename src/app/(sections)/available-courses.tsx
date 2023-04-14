import { Wave1 } from "../(internal-assets)";

const AvailableCourses = () => {
  return (
    <section
      id="available-courses"
      className="relative flex flex-col w-full h-auto"
    >
      <div className="absolute top-0 left-0 w-full h-auto z-[200] translate-y-[-110px]">
        <Wave1 />
      </div>
      <div className="flex 2xl:max-w-[1400px] w-[90%] justify-between h-full my-[50px]"></div>
    </section>
  );
};

export default AvailableCourses;
