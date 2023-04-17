import { FC } from "react";

import Image from "next/image";

import { IInstructorsComponent } from "./index.d";

const InstructorsComponent: FC<IInstructorsComponent> = ({
  main,
  focus,
  small,
}) => {
  return (
    <div className="relative flex justify-center items-center h-[500px] w-full">
      <div className="absolute border border-slate-200 translate-y-[-5px] rounded-full w-[320px] h-[320px]"></div>
      <div className="absolute border border-slate-400 rounded-full w-[480px] h-[480px]"></div>
      <div className="flex absolute flex-col items-center">
        <div className="rounded-full">
          <Image
            placeholder="blur"
            className="rounded-full"
            src={main.Img}
            alt={main.name}
            width={160}
            height={160}
            draggable={false}
          />
        </div>
        <div className="font-bold text-[16px]">{main.name}</div>
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
        <div className="rounded-full">
          <Image
            placeholder="blur"
            className="rounded-full"
            src={focus[0].Img}
            alt={focus[0].name}
            width={120}
            height={120}
            draggable={false}
          />
        </div>
        <div className="font-bold text-[16px]">{focus[0].name}</div>
      </div>
      <div
        className="flex absolute flex-col items-center translate-x-[170px] translate-y-[-170px]"
        style={{
          transform: `${
            small ? "translate(170px, -170px)" : "translate(210px, -80px)"
          }`,
        }}
      >
        <div className="rounded-full">
          <Image
            placeholder="blur"
            className="rounded-full"
            src={focus[1].Img}
            alt={focus[1].name}
            width={120}
            height={120}
            draggable={false}
          />
        </div>
        <div className="font-bold text-[16px]">{focus[1].name}</div>
      </div>
      <div
        className="flex absolute flex-col items-center translate-x-[-170px] translate-y-[170px]"
        style={{
          transform: `${
            small ? "translate(-170px, 170px)" : "translate(-210px, -80px)"
          }`,
        }}
      >
        <div className="rounded-full">
          <Image
            placeholder="blur"
            className="rounded-full"
            src={focus[2].Img}
            alt={focus[2].name}
            width={120}
            height={120}
            draggable={false}
          />
        </div>
        <div className="font-bold text-[16px]">{focus[2].name}</div>
      </div>
      <div
        className="flex absolute flex-col items-center translate-x-[170px] translate-y-[170px]"
        style={{
          transform: `${
            small ? "translate(170px, 170px)" : "translate(-155px, 175px)"
          }`,
        }}
      >
        <div className="rounded-full">
          <Image
            placeholder="blur"
            className="rounded-full"
            src={focus[3].Img}
            alt={focus[3].name}
            width={120}
            height={120}
            draggable={false}
          />
        </div>
        <div className="font-bold text-[16px]">{focus[3].name}</div>
      </div>
      {!small && (
        <div
          className="flex absolute flex-col items-center translate-x-[170px] translate-y-[170px]"
          style={{
            transform: `translate(155px, 175px)`,
          }}
        >
          <div className="rounded-full">
            <Image
              placeholder="blur"
              className="rounded-full"
              src={focus[3].Img}
              alt={focus[3].name}
              width={120}
              height={120}
              draggable={false}
            />
          </div>
          <div className="font-bold text-[16px]">{focus[4].name}</div>
        </div>
      )}
      {/* small */}
      {small && (
        <>
          <div className="flex absolute flex-col items-center translate-x-[150px]">
            <div className="rounded-full">
              <Image
                placeholder="blur"
                className="rounded-full"
                src={small[0].Img}
                alt={small[0].name}
                width={75}
                height={75}
                draggable={false}
              />
            </div>
            <div className="font-bold text-[16px]">{small[0].name}</div>
          </div>
          <div className="flex absolute flex-col items-center translate-x-[-150px]">
            <div className="rounded-full">
              <Image
                placeholder="blur"
                className="rounded-full"
                src={small[1].Img}
                alt={small[1].name}
                width={75}
                height={75}
                draggable={false}
              />
            </div>
            <div className="font-bold text-[16px]">{small[1].name}</div>
          </div>
          <div className="flex absolute flex-col items-center translate-y-[150px]">
            <div className="rounded-full">
              <Image
                placeholder="blur"
                className="rounded-full"
                src={small[2].Img}
                alt={small[2].name}
                width={75}
                height={75}
                draggable={false}
              />
            </div>
            <div className="font-bold text-[16px]">{small[2].name}</div>
          </div>
          <div className="flex absolute flex-col items-center translate-y-[-150px]">
            <div className="rounded-full">
              <Image
                placeholder="blur"
                className="rounded-full"
                src={small[3].Img}
                alt={small[3].name}
                width={75}
                height={75}
                draggable={false}
              />
            </div>
            <div className="font-bold text-[16px]">{small[3].name}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default InstructorsComponent;
