import Image from "next/image";
import Link from "next/link";

import { IoMdArrowDropdown } from "react-icons/io";

import { Logo } from "@/assets";

import { navigationData, smallNavigationData } from "@/data";

import { FlowAnimation } from "@/animations";

import styles from "./style.module.css";

export const HeaderWrapper = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <header
      className={`w-full fixed text-[color:var(--primary-color-2)] h-[60px] flex justify-center items-center py-[10px] bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] max-md:h-[80px] max-md:flex-col z-[10000] max-md:justify-start ${className}`}
    >
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
          className={`absolute w-[87.5px] h-[120px] max-md:relative max-lg:w-[70px] max-lg:h-[105px] max-md:w-[40px] max-md:h-[60px] ${styles.navbar_brand}`}
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
            <FlowAnimation
              transitionDelay={i * 0.4}
              transitionDuration={0.7}
              initialX="50%"
              initialY="5%"
              finalX="0%"
              finalY="0%"
              transitionType="easeInOut"
              once={true}
              key={i}
              className={`${
                nd.Icon
                  ? "flex items-center gap-2 max-lg:gap-1 group"
                  : "flex bg-[color:var(--primary-color-2)] text-[color:var(--primary-color-3)] leading-[1] py-[6px] px-[10px] rounded-sm items-center group"
              }`}
            >
              {nd.dropdown ? (
                <div className="flex flex-col relative items-center cursor-pointer">
                  <div className="flex items-center gap-2 max-lg:gap-1">
                    <div className="flex items-center">
                      {nd.Icon && <nd.Icon className="text-[18px]" />}
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="flex items-center leading-[1]">
                        {nd.name}
                      </div>
                      {nd.dropdown && (
                        <div className="flex items-center group-hover:rotate-180 group-hover:translate-y-[2px] transition-all">
                          <IoMdArrowDropdown className="text-[25px] translate-y-[1px]" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden group-hover:flex absolute rotate-180 mt-[20px] transition-all">
                    <IoMdArrowDropdown className="text-[40px]" />
                  </div>
                  <div className="hidden group-hover:flex group-hover:flex-col absolute pt-[44px]">
                    <div className="w-[270px] py-4 px-5 gap-5 rounded-sm bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] transition-all">
                      {nd.dropdownItems!.map((di) => (
                        <Link
                          href={di.url}
                          key={di.name}
                          className="flex gap-2 max-lg:gap-1 items-center"
                        >
                          <div className="flex items-center">
                            {di.Icon && <di.Icon className="text-[18px]" />}
                          </div>
                          <div className="flex items-center">{di.name}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={nd.url}
                  className={`flex${
                    nd.Icon ? " gap-2 max-lg:gap-1" : ""
                  } items-center`}
                >
                  <div className="flex items-center">
                    {nd.Icon && <nd.Icon className="text-[18px]" />}
                  </div>
                  <div className="flex items-center leading-[1]">{nd.name}</div>
                </Link>
              )}
            </FlowAnimation>
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
      <div className="flex bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] absolutetext-[color:var(--primary-color-2)] py-4 w-full justify-center">
        <div className="2xl:max-w-[1400px] w-[90%] flex flex-col gap-[5px]">
          {smallNavigationData.map((snd, i) => {
            return (
              <FlowAnimation
                transitionDuration={0.5}
                transitionDelay={i * 0.7}
                initialX="-20%"
                finalX="0%"
                transitionType="easeInOut"
                key={i}
                className="flex items-center"
              >
                <Link href={snd.url} className="flex gap-2 items-center">
                  <div>
                    <snd.Icon />
                  </div>
                  <div>{snd.name}</div>
                </Link>
              </FlowAnimation>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
