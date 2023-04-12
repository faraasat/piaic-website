import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import { Logo } from "@/assets";

const Navbar = () => {
  return (
    <header className="w-full fixed text-[color:var(--primary-color-2)] h-[60px] flex justify-center items-center py-[10px] bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)] max-md:h-[80px]">
      <div className="2xl:max-w-[1400px] w-[90%] flex justify-between items-center">
        <div className="flex relative text-white self-start">
          <Link
            href={"/"}
            className="absolute w-[87.5px] h-[120px] max-md:relative max-md:w-[40px] max-md:h-[60px]"
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
        <nav className="flex gap-[40px] text-lg font-medium items-center max-md:hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/available-programs"}>Available Programs</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/apply"}>Apply</Link>
          <Link
            className="flex bg-[color:var(--primary-color-2)] text-[color:var(--primary-color-3)] leading-[1] py-[6px] px-[10px] rounded-sm items-center"
            href={"/portal"}
          >
            Portal
          </Link>
        </nav>
        <div className="border border-[color:var(--primary-color-2])] rounded-md w-[40px] h-[40px] cursor-pointer flex justify-center items-center md:hidden">
          <GiHamburgerMenu className="text-[25px]" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
