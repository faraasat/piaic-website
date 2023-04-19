import { AvailableCourses, Bootcamp, HomeSection, Partners } from "@/sections";

import { bootcampData, metaverseCourseData } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <AvailableCourses />
      {bootcampData.map((bd) => (
        <Bootcamp key={bd.title} {...bd} />
      ))}
      <Bootcamp {...metaverseCourseData} />
      <Partners />
    </div>
  );
}
