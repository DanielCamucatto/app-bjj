"use client";
import React from "react";
import Image from "next/image";
import KidsBJJImage from "../../../../public/images/crianças-kimono.jpeg";
import { useTheme } from "@/app/contexts/ThemeContext";
import Link from "next/link";

const Methodology = () => {
  const { theme } = useTheme();
  return (
    <div className="hero bg-base-200 min-h-screen p-4 md:p-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="w-full lg:w-1/3">
          <Image
            src={KidsBJJImage}
            alt="Kids BJJ"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className={`text-3xl md:text-5xl font-bold uppercase text-center lg:text-left ${theme === "black" ? "text-white" : "text-black"}`}>
            Metodologia
          </h1>
          <p className={`text-sm md:text-base text-justify ${theme === "black" ? "text-white" : "text-black"}`}>
            A metodologia para ensinar Jiu Jitsu a crianças deve ser adaptada às
            necessidades físicas e cognitivas dos alunos, proporcionando um
            ambiente seguro, divertido e educativo. O foco principal é o
            desenvolvimento das habilidades motoras, o entendimento dos
            princípios básicos do Jiu Jitsu e a promoção de valores importantes,
            como disciplina e respeito.
          </p>
          
          <div className="space-y-4">
            <div className={`collapse collapse-arrow ${theme === "bg-base-100" ? "bg-black" : "bg-base-200"}`}>
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className={`collapse-title text-lg md:text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>
                Aulas Estruturadas de Jiu Jitsu para Crianças
              </div>
              <div className={`collapse-content text-sm md:text-base ${theme === "black" ? "text-white" : "text-black"}`}>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Aquecimento (10-15 min): Atividades lúdicas para desenvolvimento motor.</li>
                  <li>Técnica do Dia (15-20 min): Apresentação de técnica específica adaptada.</li>
                  <li>Rolagens Controladas (10-15 min): Sparring leve e controlado.</li>
                  <li>Conversa Final (5 min): Reflexão sobre valores aprendidos.</li>
                </ul>
              </div>
            </div>

            {/* Outros collapses seguem o mesmo padrão */}
          </div>

          <div className="text-center lg:text-left pt-6">
            <Link href="#contact" scroll={false} className="btn btn-info w-full md:w-auto">
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
