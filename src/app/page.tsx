import { AvailableCourses, Bootcamp, HomeSection, Partners } from "@/sections";

import { bootcampData, metaverseCourseData } from "@/data";

const Home = () => {
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
};

export default Home;
