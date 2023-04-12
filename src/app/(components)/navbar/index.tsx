import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full text-[color:var(--primary-color-2)] h-[60px] flex justify-between items-center px-[50px] py-[10px] bg-gradient-to-r from-[color:var(--primary-color-1)] to-[color:var(--primary-color-3)]">
      <div className="relative w-[87.5px] h-[120px] self-start">
        <div className="absolute top-0 left-0">
          <Image
            src={Logo}
            alt="PIAIC Logo"
            width={134}
            height={184}
            priority
            placeholder="blur"
          />
        </div>
      </div>
      <nav className="flex lg:gap-[40px] text-lg font-medium items-center md:gap-[30px] sm:gap-[10px]">
        <Link href={"/"}>Home</Link>
        <Link href={"/apply"}>Apply</Link>
        <Link href={"/available-programs"}>Available Programs</Link>
        <Link href={"/about"}>About</Link>
        <Link
          className="flex bg-[color:var(--primary-color-2)] text-[color:var(--primary-color-1)] leading-[1] py-[6px] px-[10px] rounded-sm items-center"
          href={"/portal"}
        >
          Portal
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
