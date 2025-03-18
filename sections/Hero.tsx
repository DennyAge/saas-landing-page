"use client";

import { Element, Link as LinkScroll } from "react-scroll";
import Button from "@/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-[512px] max-lg:max-w-[388px]">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 text-5xl md:text-[64px] lg:text-[84px] sm:text font-bold uppercase">
              Amazingly simple
            </h1>
            <p className="max-w-[440px] mb-14 text-md md:text-2xl  md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src="/images/hero.png"
              className="size-[1230px] max-lg:h-auto"
              alt="hero"
              width={1300}
              height={1300}
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
