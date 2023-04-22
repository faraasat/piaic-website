import { FC } from "react";

import Link from "next/link";

import { CourseBox, IBoxGrid } from "../";

const BoxGrid: FC<IBoxGrid> = ({
  gridData,
  heading,
  link,
  colors,
  hideHeading,
}) => {
  return (
    <>
      {!hideHeading && (
        <h1 className="text-[45px] font-bold mb-4 text-[color:var(--primary-color-3)]">
          {heading}
        </h1>
      )}
      {link ? (
        <Link href={link} className="grid grid-cols-4 gap-4">
          {gridData.map((gd, i) => (
            <CourseBox key={i} {...gd} color={colors[i]} />
          ))}
        </Link>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {gridData.map((gd, i) => (
            <CourseBox key={i} {...gd} color={colors[i]} />
          ))}
        </div>
      )}
    </>
  );
};

export default BoxGrid;
