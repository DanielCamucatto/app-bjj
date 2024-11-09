"use client";
import React from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import Slider1 from "../../../../public/images/slide-1.jpeg";
import Slider2 from "../../../../public/images/slide-2.jpg";
import Slider3 from "../../../../public/images/slide-3.jpeg";

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
            <div
              id="item1"
              className="carousel-item w-full flex justify-center"
            >
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <Image src={Slider1} alt="Benefícios Físicos" />
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
                    <ul className="list-disc pl-5">
                      <li>Coordenação motora</li>
                      <li>Força e flexibilidade</li>
                      <li>Conciência corporal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full flex justify-center">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <Image src={Slider2} alt="Benefícios Físicos" />
                </figure>
                <div className="card-body">
                  <h2
                    className={`card-title ${
                      theme === "black" ? "text-white" : "text-black"
                    }`}
                  >
                    Desenvolvimento Emocional e Psicologico
                  </h2>
                  <div
                    className={` ${
                      theme === "black" ? "text-white" : "text-black"
                    }`}
                  >
                    <ul className="list-disc pl-5">
                      <li>Aumento da autoconfiança</li>
                      <li>Controle emocional</li>
                      <li>Disciplina</li>
                      <li>Foco</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="item3" className="carousel-item w-full flex justify-center">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <Image src={Slider3} alt="Benefícios Físicos" />
                </figure>
                <div className="card-body">
                  <h2
                    className={`card-title ${
                      theme === "black" ? "text-white" : "text-black"
                    }`}
                  >
                    Desenvolvimento Social
                  </h2>
                  <div
                    className={` ${
                      theme === "black" ? "text-white" : "text-black"
                    }`}
                  >
                    <ul className="list-disc pl-5">
                      <li>Respeito ao próximo</li>
                      <li>Trabalho em equipe</li>
                      <li>Valores éticos</li>
                      <li>Autodefesa</li>
                    </ul>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
