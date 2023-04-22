import { FC } from "react";

import { RiMapPin4Fill } from "react-icons/ri";
import { FaFlagCheckered } from "react-icons/fa";

import LearningCard from "../learning-card";

import { ILearningPath } from "../";

const LearningPath: FC<ILearningPath> = ({
  learningItems,
  baseColor,
  technicalColors,
}) => {
  return (
    <div className="relative flex justify-center min-h-[300px] my-6">
      <div className="absolute flex flex-col justify-between items-center gap-2 h-full z-[50]">
        <RiMapPin4Fill className="text-[60px]" style={{ fill: baseColor }} />
        <div
          className="w-[3px] h-[100%] flex items-center justify-center"
          style={{ backgroundColor: baseColor }}
        ></div>
        <FaFlagCheckered className="text-[60px]" style={{ fill: baseColor }} />
      </div>
      <div className="flex flex-col justify-center my-20 w-full h-auto z-[100]">
        {learningItems.map((lis, i) => (
          <LearningCard
            key={lis.title}
            {...lis}
            baseColor={baseColor}
            reverse={i % 2 === 0}
            technicalColor={technicalColors[lis.colorId - 1]}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
