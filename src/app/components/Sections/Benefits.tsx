"use client";
import React from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import BenefitsFisicImage from "../../../../public/images/beneficio-fisico.jpeg";

const Benefits = () => {
  const { theme } = useTheme();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1
            className={`text-5xl font-bold uppercase ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Benefícios
          </h1>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full flex justify-center">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <Image src={BenefitsFisicImage} alt="Benefícios Físicos" />
                </figure>
                <div className="card-body">
                  <h2
                    className={`card-title ${
                      theme === "black" ? "text-white" : "text-black"
                    }`}
                  >
                    Desenvolvimento Físico
                  </h2>
                  <div
                    className={` ${
                      theme === "black" ? "text-white" : "text-black"
                    }`}
                  >
                    <ul>
                      <li>
                        Coordenação motora
                      </li>
                      <li>
                        Força e flexibilidade
                      </li>
                      <li>
                        Conciência corporal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
