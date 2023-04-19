import { Panacloud, Saylani } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  return (
    <section className="w-full h-[300px] flex justify-center bg-gradient-to-br from-[color:var(--primary-color-5)] to-[color:var(--primary-color-6)] py-14">
      <div className="relative flex 2xl:max-w-[1400px] w-[90%] flex-col items-center gap-7">
        <div className="text-[50px] font-bold text-[color:var(--primary-color-1)]">
          Strategic Partners
        </div>
        <div className="flex gap-4">
          <div>
            <Link href={"https://panacloud.ai/"}>
              <Image src={Panacloud} alt="PanaCloud" width={200} height={200} />
            </Link>
          </div>
          <div>
            <Link href={"https://www.saylaniwelfare.com/"}>
              <Image src={Saylani} alt="Saylani" width={300} height={300} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
