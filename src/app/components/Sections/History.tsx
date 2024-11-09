'use client'
import React from "react";
import Image from "next/image";
import { useTheme } from "@/app/contexts/ThemeContext";
import Riello from "../../../../public/images/sensei rafael riello.jpeg";
import Link from "next/link";

const History = () => {
  const {theme}  = useTheme();
  return (
    <div className="hero bg-base-200 min-h-screen p-4 md:p-8">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <Image
            src={Riello}
            alt="Sensei Rafael Riello"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className={`text-3xl md:text-5xl font-bold uppercase text-center lg:text-left mb-6 ${theme === 'black' ? 'text-white' : 'text-black'}`}>
            Uma vida no tatame
          </h1>
          <p className={`text-sm md:text-base text-justify mb-6 ${theme === 'black' ? 'text-white' : 'text-black'}`}>
            Desde 2012, a minha vida se entrelaça com a arte suave do Jiu-Jitsu.
            Comecei minha trajetória na equipe Ryan Gracie, sob a orientação do
            professor Juliano Pedrita, e desde então, a paixão por essa
            modalidade só fez crescer. Ao longo de mais de uma década, dedicação
            e aperfeiçoamento contínuo me levaram da faixa branca à faixa preta,
            conquistada em 2023 sob a tutela do Mestre Fabio Binho Sette, na
            equipe G13.
          </p>
          <p className={`text-sm md:text-base text-justify mb-6 ${theme === 'black' ? 'text-white' : 'text-black'}`}>
            Essa jornada foi marcada por treinamentos intensos e pela busca 
            incansável por excelência técnica e pessoal. Compartilhando a Paixão 
            Acredito que o conhecimento deve ser compartilhado. Por isso, desde a 
            faixa roxa, dedico-me a ensinar Jiu-Jitsu para crianças e adultos.
          </p>
          <div className="text-center lg:text-left">
            <Link href="#contact" scroll={false} className="btn btn-info w-full md:w-auto">
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
