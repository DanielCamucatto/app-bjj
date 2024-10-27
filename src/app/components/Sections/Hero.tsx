'use client'
import React from "react";
import HeroImage from "@/app/assets/images/hero-bjj.jpg"
import Image from "next/image"
import Logo from "@/app/assets/Icons/logo.svg"

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content flex flex-row gap-2">
        <div className="w-[500px]">
          <Image src={Logo} alt="Logo" width={500} height={500} />
        </div>

        <div className="max-w-md">
          <span><p>JIU-JITSU BRASILEIRO</p></span>
          <h1 className="mb-5 text-5xl font-bold">RAFAEL RIELLO</h1>
          <p className="mb-5 bg-white p-2 text-black font-bold">
            PROFESSOR FAIXA PRETA
          </p>
          <button className="btn btn-info">Saiba mais</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
