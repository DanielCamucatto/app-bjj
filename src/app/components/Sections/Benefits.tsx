"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import Slider1 from "../../../../public/images/slide-1.jpeg";
import Slider2 from "../../../../public/images/slide-2.jpg";
import Slider3 from "../../../../public/images/slide-3.jpeg";

const Benefits = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isModalOpen) {
        setCurrentSlide((prev) => {
          const nextSlide = prev === 3 ? 1 : prev + 1;
          const carousel = document.querySelector('.carousel');
          if (carousel) {
            carousel.scrollLeft = (nextSlide - 1) * carousel.clientWidth;
          }
          return nextSlide;
        });
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isModalOpen]);

  const renderCard = (slide: number) => (
    <div
      id={`item${slide}`}
      className="carousel-item w-full flex justify-center"
    >
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <Image src={slide === 1 ? Slider1 : slide === 2 ? Slider2 : Slider3} alt="Benefícios Físicos" />
        </figure>
        <div className="card-body">
          <h2
            className={`card-title ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Desenvolvimento {slide === 1 ? "Físico" : slide === 2 ? "Emocional e Psicologico" : "Social"}
          </h2>
          <div
            className={` ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            <ul className="list-disc pl-5">
              {slide === 1 ? (
                <>
                  <li>Coordenação motora</li>
                  <li>Força e flexibilidade</li>
                  <li>Conciência corporal</li>
                </>
              ) : slide === 2 ? (
                <>
                  <li>Aumento da autoconfiança</li>
                  <li>Controle emocional</li>
                  <li>Disciplina</li>
                  <li>Foco</li>
                </>
              ) : (
                <>
                  <li>Respeito ao próximo</li>
                  <li>Trabalho em equipe</li>
                  <li>Valores éticos</li>
                  <li>Autodefesa</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className={`text-5xl font-bold uppercase text-center mb-8 ${theme === "black" ? "text-white" : "text-black"}`}>
            Benefícios
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((slideNum) => (
              <div 
                key={slideNum}
                onClick={() => {
                  setCurrentSlide(slideNum);
                  setIsModalOpen(true);
                }}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                {renderCard(slideNum)}
              </div>
            ))}
          </div>

          <dialog id="benefits_modal" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
            <div className="modal-box max-w-4xl">
              <div className="carousel w-full">
                {[1, 2, 3].map((slideNum) => (
                  <div key={slideNum} id={`modal-item${slideNum}`} className="carousel-item w-full">
                    {renderCard(slideNum)}
                  </div>
                ))}
              </div>
              
              <div className="modal-action">
                <div className="flex gap-2">
                  {[1, 2, 3].map((slideNum) => (
                    <button
                      key={slideNum}
                      className={`btn btn-xs ${currentSlide === slideNum ? 'btn-active' : ''}`}
                      onClick={() => setCurrentSlide(slideNum)}
                    >
                      {slideNum}
                    </button>
                  ))}
                </div>
                <button className="btn" onClick={() => setIsModalOpen(false)}>Fechar</button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setIsModalOpen(false)}>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
