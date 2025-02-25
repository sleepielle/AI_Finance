"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="px-4 mt-52">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-bold gradient-title ">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-Powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className="pb-3">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper ">
          <div className="hero-image hero-image.scrolled" ref={imageRef}>
            <Image
              src={"/banner.jpeg"}
              alt="banner"
              width={1280}
              height={720}
              className="rounded-lg shadow-2xl border mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
