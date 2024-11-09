'use client'
import React from "react";
import HeroImage from "@/app/assets/images/hero-bjj.jpg"
import Image from "next/image"
import Logo from "@/app/assets/Icons/logo.svg"
import Link from "next/link"

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full md:w-[500px]">
          <Image 
            src={Logo} 
            alt="Logo" 
            width={500} 
            height={500}
            className="w-full h-auto" 
          />
        </div>

        <div className="max-w-md text-center md:text-left">
          <span><p className="text-sm md:text-base">JIU-JITSU BRASILEIRO</p></span>
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">RAFAEL RIELLO</h1>
          <p className="mb-5 bg-white p-2 text-black font-bold text-sm md:text-base">
            PROFESSOR FAIXA PRETA
          </p>
          <Link href="#about" scroll={false} className="btn btn-info w-full md:w-auto">
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
