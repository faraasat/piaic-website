"use client";

import { useState } from "react";

import { useTheme } from "next-themes";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonFill, BsSun } from "react-icons/bs";

import {
  HeaderWrapper,
  MainNavWrapper,
  SmallNavContent,
} from "./navbar-static";

const NavbarAction = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <HeaderWrapper>
      <MainNavWrapper>
        <div
          className="border border-[color:var(--primary-color-2])] rounded-md w-[40px] h-[40px] cursor-pointer flex justify-center items-center md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <GiHamburgerMenu className="text-[25px]" />
        </div>
        <div className="cursor-pointer ml-5">
          {theme === "dark" ? (
            <BsSun
              title="light"
              className="fill-yellow-400 text-[25px]"
              onClick={() => setTheme("light")}
            />
          ) : (
            <BsMoonFill
              title="dark"
              className="fill-slate-400 text-[25px]"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </MainNavWrapper>
      <SmallNavContent open={open} />
    </HeaderWrapper>
  );
};

export default NavbarAction;
