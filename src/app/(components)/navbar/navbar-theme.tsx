"use client";

import { useTheme } from "next-themes";

import { BsMoonFill, BsSun } from "react-icons/bs";

const NavbarTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
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
    </>
  );
};

export default NavbarTheme;
