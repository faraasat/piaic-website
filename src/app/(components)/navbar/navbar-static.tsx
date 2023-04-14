import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/assets";

import { navigationData, smallNavigationData } from "@/data";

export const HeaderWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <header className="w-full fixed text-[color:var(--primary-color-2)] h-[60px] flex justify-center items-center py-[10px] bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] max-md:h-[80px] max-md:flex-col z-[10000] max-md:justify-start">
      {children}
    </header>
  );
};

export const MainNavWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="2xl:max-w-[1400px] w-[90%] flex items-center">
      <div className="flex relative self-start ml-0 mr-auto">
        <Link
          href={"/"}
          className="absolute w-[87.5px] h-[120px] max-md:relative max-lg:w-[70px] max-lg:h-[105px] max-md:w-[40px] max-md:h-[60px]"
        >
          <Image
            src={Logo}
            alt="PIAIC Logo"
            fill
            sizes="87.5px"
            priority
            placeholder="empty"
            draggable={false}
          />
        </Link>
      </div>
      <nav className="flex gap-[30px] text-lg font-medium items-center max-md:hidden max-lg:gap-[18px] mr-0 ml-auto">
        {navigationData.map((nd, i) => {
          return (
            <Link
              href={nd.url}
              key={i}
              className={`${
                nd.Icon
                  ? "flex items-center gap-2 max-lg:gap-1"
                  : "flex bg-[color:var(--primary-color-2)] text-[color:var(--primary-color-3)] leading-[1] py-[6px] px-[10px] rounded-sm items-center"
              }`}
            >
              <div className="translate-y-[-2px]">
                {nd.Icon && <nd.Icon className="text-[18px]" />}
              </div>
              <div>{nd.name}</div>
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
};

export const SmallNavContent = ({ open }: { open: boolean }) => {
  return (
    <nav
      className={`${
        open ? "flex" : "hidden"
      } justify-center fixed bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] h-auto mt-[70px] w-full md:hidden transition-all z-[10000]`}
    >
      <div className="flex flex-col gap-[5px] 2xl:max-w-[1400px] w-[90%] text-[color:var(--primary-color-2)] py-4">
        {smallNavigationData.map((snd, i) => {
          return (
            <Link href={snd.url} key={i} className="flex gap-2 items-center">
              <div>
                <snd.Icon />
              </div>
              <div>{snd.name}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
