import { FC } from "react";

import { ICourseBox } from "../";

const CourseBox: FC<ICourseBox> = ({ title, desc, color }) => {
  return (
    <div
      className="col-span-1 items-center justify-center flex flex-col h-[230px] p-5 text-center rounded-md shadow-[3px_4px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-[3px_4px_10px_2px_rgba(0,0,0,0.2)] cursor-pointer hover:scale-[1.02] transition-all"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-[30px] font-bold">{title}</h2>
      <h3 className="text-[18px] leading-[1.1]">{desc}</h3>
    </div>
  );
};

export default CourseBox;
