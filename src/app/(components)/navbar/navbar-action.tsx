"use client";

import dynamic from "next/dynamic";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import {
  HeaderWrapper,
  MainNavWrapper,
  SmallNavContent,
} from "./navbar-static";

import styles from "./style.module.css";

import { FlowAnimation } from "@/animations";

const NavbarTheme = dynamic(() => import("./navbar-theme"), { ssr: false });

const NavbarAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper className={styles.navbar}>
      <MainNavWrapper>
        <div
          className="border border-[color:var(--primary-color-2])] rounded-md w-[40px] h-[40px] cursor-pointer flex justify-center items-center md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <GiHamburgerMenu className="text-[25px]" />
        </div>
        <FlowAnimation
          transitionDuration={0.7}
          transitionDelay={2.4}
          initialRotate={"180deg"}
          finalRotate={"0deg"}
          className="cursor-pointer ml-5"
        >
          <NavbarTheme />
        </FlowAnimation>
      </MainNavWrapper>
      <SmallNavContent open={open} />
    </HeaderWrapper>
  );
};

export default NavbarAction;
