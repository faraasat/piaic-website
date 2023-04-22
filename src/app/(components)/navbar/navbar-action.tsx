"use client";

import dynamic from "next/dynamic";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import {
  HeaderWrapper,
  MainNavWrapper,
  SmallNavContent,
} from "./navbar-static";

const NavbarTheme = dynamic(() => import("./navbar-theme"), { ssr: false });

const NavbarAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MainNavWrapper>
        <div
          className="border border-[color:var(--primary-color-2])] rounded-md w-[40px] h-[40px] cursor-pointer flex justify-center items-center md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <GiHamburgerMenu className="text-[25px]" />
        </div>
        <div className="cursor-pointer ml-5" suppressHydrationWarning={true}>
          <NavbarTheme />
        </div>
      </MainNavWrapper>
      <SmallNavContent open={open} />
    </HeaderWrapper>
  );
};

export default NavbarAction;
