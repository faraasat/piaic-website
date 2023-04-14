const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex relative justify-center h-[750px] py-10 w-full bg-gradient-to-b from-[color:var(--primary-color-5)] to-[color:var(--primary-color-6)]"
    >
      <div className="absolute h-full w-full top-0 left-0 bg-no-repeat bg-center z-50" style={{backgroundImage: "url(./../../assets/bg1.png)"}} />
      <div>
        <div className="flex 2xl:max-w-[1400px] w-[90%] h-full mt-[50px]">
          Hello..
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
