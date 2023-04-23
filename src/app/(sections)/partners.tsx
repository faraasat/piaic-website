import Image from "next/image";
import Link from "next/link";

import { Panacloud, Saylani } from "@/assets";

import { FlowAnimation } from "@/animations";

const Partners = () => {
  return (
    <section className="w-full h-[300px] flex justify-center bg-gradient-to-bl from-[color:var(--primary-color-5)] to-[color:var(--primary-color-6)] py-14 translate-y-[-1px]">
      <div className="relative flex 2xl:max-w-[1400px] w-[90%] flex-col items-center gap-7">
        <FlowAnimation
          transitionDuration={0.5}
          initialY={"-200%"}
          finalY={"0%"}
          once={true}
        >
          <h1 className="text-[50px] font-bold text-[color:var(--primary-color-1)]">
            Strategic Partners
          </h1>
        </FlowAnimation>
        <div className="flex gap-4">
          <FlowAnimation
            transitionDuration={0.5}
            initialScale={"0"}
            finalScale={"1"}
            initialOpacity={0.1}
            once={true}
          >
            <Link href={"https://panacloud.ai/"}>
              <Image src={Panacloud} alt="PanaCloud" width={200} height={200} />
            </Link>
          </FlowAnimation>
          <FlowAnimation
            transitionDuration={0.5}
            initialScale={"0"}
            finalScale={"1"}
            initialOpacity={0.1}
            once={true}
          >
            <Link href={"https://www.saylaniwelfare.com/"}>
              <Image src={Saylani} alt="Saylani" width={300} height={300} />
            </Link>
          </FlowAnimation>
        </div>
      </div>
    </section>
  );
};

export default Partners;
