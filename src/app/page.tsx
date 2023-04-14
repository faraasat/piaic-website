import { AvailableCourses, HomeSection } from "./(sections)";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <AvailableCourses />
    </div>
  );
}
