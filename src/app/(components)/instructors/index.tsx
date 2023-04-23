import { FC } from "react";

import Image from "next/image";

import { IInstructorsComponent, IInstructorBlock } from "./index.d";

import { FlowAnimation } from "@/animations";

const InstructorBlock: FC<IInstructorBlock> = ({
  Img,
  name,
  width,
  height,
}) => {
  return (
    <>
      <div className="rounded-full w-full h-full flex justify-center items-center">
        <Image
          placeholder="blur"
          className="rounded-full"
          src={Img}
          alt={name}
          width={width}
          height={height}
          draggable={false}
        />
      </div>
      <div className="font-bold text-[16px] leading-[1.02] text-center whitespace-nowrap">
        {name}
      </div>
    </>
  );
};

const InstructorsComponent: FC<IInstructorsComponent> = ({
  main,
  focus,
  small,
}) => {
  return (
    <>
      <div className="relative flex justify-center items-center h-[500px] w-full max-xl:hidden">
        <FlowAnimation
          once={true}
          transitionDuration={0.5}
          transitionDelay={0}
          initialOpacity={0.1}
          initialScale={0}
          finalScale={1}
          className="absolute border border-slate-200 translate-y-[-5px] rounded-full w-[320px] h-[320px]"
        />
        <FlowAnimation
          once={true}
          transitionDuration={0.5}
          transitionDelay={0.2}
          initialOpacity={0.1}
          initialScale={0}
          finalScale={1}
          className="absolute border border-slate-400 rounded-full w-[480px] h-[480px]"
        />
        <FlowAnimation
          once={true}
          transitionDuration={0.5}
          transitionDelay={0.6}
          initialOpacity={0.1}
          initialScale={0}
          finalScale={1}
          className="flex absolute flex-col items-center w-[150px] h-[150px] gap-1"
        >
          <InstructorBlock
            name={main.name}
            Img={main.Img}
            width={145}
            height={145}
          />
        </FlowAnimation>
        {/* focus */}
        <FlowAnimation
          once={true}
          transitionDuration={0.5}
          transitionDelay={0.8}
          initialX={0}
          initialY={0}
          finalX={small ? "-170px" : "0px"}
          finalY={small ? "-170px" : "-240px"}
          className="flex absolute flex-col items-center w-[125px] h-[125px] gap-1"
        >
          <InstructorBlock
            name={focus[0].name}
            Img={focus[0].Img}
            width={120}
            height={120}
          />
        </FlowAnimation>
        <FlowAnimation
          once={true}
          transitionDuration={0.5}
          transitionDelay={1}
          initialX={0}
          initialY={0}
          finalX={small ? "170px" : "210px"}
          finalY={small ? "-170px" : "-80px"}
          className="flex absolute flex-col items-center w-[125px] h-[125px] gap-1"
        >
          <InstructorBlock
            name={focus[1].name}
            Img={focus[1].Img}
            width={120}
            height={120}
          />
        </FlowAnimation>
        <FlowAnimation
          once={true}
          transitionDuration={0.5}
          transitionDelay={1.2}
          initialX={0}
          initialY={0}
          finalX={small ? "-170px" : "-210px"}
          finalY={small ? "170px" : "-80px"}
          className="flex absolute flex-col items-center w-[125px] h-[125px] gap-1"
        >
          <InstructorBlock
            name={focus[2].name}
            Img={focus[2].Img}
            width={120}
            height={120}
          />
        </FlowAnimation>
        <FlowAnimation
          once={true}
          transitionDuration={0.5}
          transitionDelay={1.4}
          initialX={0}
          initialY={0}
          finalX={small ? "170px" : "-155px"}
          finalY={small ? "170px" : "175px"}
          className="flex absolute flex-col items-center w-[125px] h-[125px] gap-1"
        >
          <InstructorBlock
            name={focus[3].name}
            Img={focus[3].Img}
            width={120}
            height={120}
          />
        </FlowAnimation>
        {!small && (
          <FlowAnimation
            once={true}
            transitionDuration={0.5}
            transitionDelay={1.6}
            initialX={0}
            initialY={0}
            finalX={"155px"}
            finalY={"175px"}
            className="flex absolute flex-col items-center w-[125px] h-[125px] gap-1"
          >
            <InstructorBlock
              name={focus[4].name}
              Img={focus[4].Img}
              width={120}
              height={120}
            />
          </FlowAnimation>
        )}
        {/* small */}
        {small && (
          <>
            <FlowAnimation
              once={true}
              transitionDuration={0.5}
              transitionDelay={1.8}
              initialX={0}
              finalX={"150px"}
              className="flex absolute flex-col justify-center items-center w-[80px] h-[80px] gap-1"
            >
              <InstructorBlock
                name={small[0].name}
                Img={small[0].Img}
                width={75}
                height={75}
              />
            </FlowAnimation>
            <FlowAnimation
              once={true}
              transitionDuration={0.5}
              transitionDelay={2}
              initialX={0}
              finalX={"-150px"}
              className="flex absolute flex-col justify-center items-center w-[80px] h-[80px] gap-1"
            >
              <InstructorBlock
                name={small[1].name}
                Img={small[1].Img}
                width={75}
                height={75}
              />
            </FlowAnimation>
            <FlowAnimation
              once={true}
              transitionDuration={0.5}
              transitionDelay={2.2}
              initialY={0}
              finalY={"-160px"}
              className="flex absolute flex-col justify-center items-center w-[80px] h-[80px] gap-1"
            >
              <InstructorBlock
                name={small[2].name}
                Img={small[2].Img}
                width={75}
                height={75}
              />
            </FlowAnimation>
            <FlowAnimation
              once={true}
              transitionDuration={0.5}
              transitionDelay={2.4}
              initialY={0}
              finalY={"170px"}
              className="flex absolute flex-col justify-center items-center w-[80px] h-[80px] gap-1"
            >
              <InstructorBlock
                name={small[3].name}
                Img={small[3].Img}
                width={75}
                height={75}
              />
            </FlowAnimation>
          </>
        )}
      </div>
      <div className="xl:hidden flex flex-wrap justify-center">
        <div className="flex items-start justify-center gap-7 flex-wrap">
          <FlowAnimation
            once={true}
            transitionDuration={0.5}
            transitionDelay={0}
            initialX={"-20%"}
            initialY={"-50%"}
            finalX={0}
            finalY={0}
            className="flex flex-col items-center w-[125px] text-center max-md:w-[75px] gap-1"
          >
            <InstructorBlock
              name={main.name}
              Img={main.Img}
              width={120}
              height={120}
            />
          </FlowAnimation>
          {focus.map((fcs, i) => {
            return (
              <FlowAnimation
                once={true}
                transitionDuration={0.5}
                transitionDelay={i * 0.2 + 0.2}
                initialX={"-20%"}
                initialY={"-50%"}
                finalX={0}
                finalY={0}
                key={fcs.name}
                className="flex flex-col items-center w-[125px] text-center max-md:w-[75px] gap-1"
              >
                <InstructorBlock
                  name={fcs.name}
                  Img={fcs.Img}
                  width={120}
                  height={120}
                />
              </FlowAnimation>
            );
          })}
          {small &&
            small.map((sm, i) => {
              return (
                <FlowAnimation
                  once={true}
                  transitionDuration={0.5}
                  transitionDelay={i * 0.2 + focus.length * 0.2}
                  initialX={"-20%"}
                  initialY={"-50%"}
                  finalX={0}
                  finalY={0}
                  key={sm.name}
                  className="flex flex-col items-center w-[125px] text-center max-md:w-[75px] gap-1"
                >
                  <InstructorBlock
                    name={sm.name}
                    Img={sm.Img}
                    width={120}
                    height={120}
                  />
                </FlowAnimation>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default InstructorsComponent;
