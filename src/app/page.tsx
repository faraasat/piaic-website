import { AvailableCourses, Bootcamp, HomeSection } from "@/sections";

import { bootcampData } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <AvailableCourses />
      {bootcampData.map((bd) => (
        <Bootcamp key={bd.title} {...bd} />
      ))}
    </div>
  );
}
