"use client";
import React from "react";
import Image from "next/image";
import KidsBJJImage from "../../../../public/images/crianças-kimono.jpeg";
import { useTheme } from "@/app/contexts/ThemeContext";

const Methodology = () => {
  const { theme } = useTheme();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={KidsBJJImage}
          alt="Kids BJJ"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1
            className={`text-5xl font-bold uppercase ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Metodologia
          </h1>
          <p
            className={`py-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            A metodologia para ensinar Jiu Jitsu a crianças deve ser adaptada às
            necessidades físicas e cognitivas dos alunos, proporcionando um
            ambiente seguro, divertido e educativo. O foco principal é o
            desenvolvimento das habilidades motoras, o entendimento dos
            princípios básicos do Jiu Jitsu e a promoção de valores importantes,
            como disciplina e respeito. A seguir, está uma proposta de
            metodologia de aprendizado:
          </p>
          <div className={`collapse collapse-arrow ${theme === "bg-base-100" ? "bg-black" : "bg-base-200"}`}>
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className={`collapse-title text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>
              Aulas Estruturadas de Jiu Jitsu para Crianças
            </div>
            <div className={`collapse-content ${theme === "black" ? "text-white" : "text-black"}`}>
              <ul>
                <li>Aquecimento (10-15 min): Atividades lúdicas para desenvolvimento motor.</li>
                <li>Técnica do Dia (15-20 min): Apresentação de técnica específica adaptada.</li>
                <li>Técnica do Dia (15-20 min): Apresentação de técnica específica adaptada.</li>
                <li>Rolagens Controladas (10-15 min): Sparring leve e controlado.</li>
                <li>Conversa Final (5 min): Reflexão sobre valores aprendidos (respeito, equipe, perseverança).</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className={`collapse-title text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>
              Uso de Jogos e brincadeiras
            </div>
            <div className={`collapse-content ${theme === "black" ? "text-white" : "text-black"}`}>
              <ul>
                <li>Integração de jogos e atividades lúdicas para ensinar técnicas de
                Jiu Jitsu de maneira divertida.</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className={`collapse-title text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>
              Acompanhamento Individualizado
            </div>
            <div className={`collapse-content ${theme === "black" ? "text-white" : "text-black"}`}>
              <ul>
                <li>O professor monitora o progresso de cada aluno, adaptando os treinos conforme a evolução e as necessidades
                individuais</li>
              </ul>
            </div>
          </div>
          <button className="btn btn-info">Saiba mais</button>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
