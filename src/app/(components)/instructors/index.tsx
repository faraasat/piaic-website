import { FC } from "react";

import Image from "next/image";

import { IInstructorsComponent, IInstructorBlock } from "./index.d";

const InstructorBlock: FC<IInstructorBlock> = ({
  Img,
  name,
  width,
  height,
}) => {
  return (
    <>
      <div className="rounded-full">
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
      <div className="font-bold text-[16px] leading-[1.02]">{name}</div>
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
        <div className="absolute border border-slate-200 translate-y-[-5px] rounded-full w-[320px] h-[320px]"></div>
        <div className="absolute border border-slate-400 rounded-full w-[480px] h-[480px]"></div>
        <div className="flex absolute flex-col items-center">
          <InstructorBlock
            name={main.name}
            Img={main.Img}
            width={160}
            height={160}
          />
        </div>
        {/* focus */}
        <div
          className="flex absolute flex-col items-center translate-x-[-170px] translate-y-[-170px]"
          style={{
            transform: `${
              small ? "translate(-170px, -170px)" : "translate(0px, -240px)"
            }`,
          }}
        >
          <InstructorBlock
            name={focus[0].name}
            Img={focus[0].Img}
            width={120}
            height={120}
          />
        </div>
        <div
          className="flex absolute flex-col items-center translate-x-[170px] translate-y-[-170px]"
          style={{
            transform: `${
              small ? "translate(170px, -170px)" : "translate(210px, -80px)"
            }`,
          }}
        >
          <InstructorBlock
            name={focus[1].name}
            Img={focus[1].Img}
            width={120}
            height={120}
          />
        </div>
        <div
          className="flex absolute flex-col items-center translate-x-[-170px] translate-y-[170px]"
          style={{
            transform: `${
              small ? "translate(-170px, 170px)" : "translate(-210px, -80px)"
            }`,
          }}
        >
          <InstructorBlock
            name={focus[2].name}
            Img={focus[2].Img}
            width={120}
            height={120}
          />
        </div>
        <div
          className="flex absolute flex-col items-center translate-x-[170px] translate-y-[170px]"
          style={{
            transform: `${
              small ? "translate(170px, 170px)" : "translate(-155px, 175px)"
            }`,
          }}
        >
          <InstructorBlock
            name={focus[3].name}
            Img={focus[3].Img}
            width={120}
            height={120}
          />
        </div>
        {!small && (
          <div
            className="flex absolute flex-col items-center translate-x-[170px] translate-y-[170px]"
            style={{
              transform: `translate(155px, 175px)`,
            }}
          >
            <InstructorBlock
              name={focus[4].name}
              Img={focus[4].Img}
              width={120}
              height={120}
            />
          </div>
        )}
        {/* small */}
        {small && (
          <>
            <div className="flex absolute flex-col items-center translate-x-[150px]">
              <InstructorBlock
                name={small[0].name}
                Img={small[0].Img}
                width={75}
                height={75}
              />
            </div>
            <div className="flex absolute flex-col items-center translate-x-[-150px]">
              <InstructorBlock
                name={small[1].name}
                Img={small[1].Img}
                width={75}
                height={75}
              />
            </div>
            <div className="flex absolute flex-col items-center translate-y-[150px]">
              <InstructorBlock
                name={small[2].name}
                Img={small[2].Img}
                width={75}
                height={75}
              />
            </div>
            <div className="flex absolute flex-col items-center translate-y-[-150px]">
              <InstructorBlock
                name={small[3].name}
                Img={small[3].Img}
                width={75}
                height={75}
              />
            </div>
          </>
        )}
      </div>
      <div className="xl:hidden flex flex-wrap justify-center">
        <div className="flex items-start justify-center gap-7 flex-wrap">
          <div className="flex flex-col items-center w-[125px] text-center max-md:w-[75px]">
            <InstructorBlock
              name={main.name}
              Img={main.Img}
              width={120}
              height={120}
            />
          </div>
          {focus.map((fcs) => {
            return (
              <div key={fcs.name} className="flex flex-col items-center w-[125px] text-center max-md:w-[75px]">
                <InstructorBlock
                  name={fcs.name}
                  Img={fcs.Img}
                  width={120}
                  height={120}
                />
              </div>
            );
          })}
          {small &&
            small.map((sm) => {
              return (
                <div key={sm.name} className="flex flex-col items-center w-[125px] text-center max-md:w-[75px]">
                  <InstructorBlock
                    name={sm.name}
                    Img={sm.Img}
                    width={120}
                    height={120}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default InstructorsComponent;
