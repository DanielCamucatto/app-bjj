'use client'
import React from "react";
import Image from "next/image";
import { useTheme } from "@/app/contexts/ThemeContext";
import Riello from "../../../../public/images/sensei rafael riello.jpeg";
import Link from "next/link";

const History = () => {
  const {theme}  = useTheme();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={Riello}
          alt="Sensei Rafael Riello"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className={`text-5xl font-bold uppercase ${theme === 'black' ? 'text-white' : 'text-black'}`}>
            Uma vida no tatame
          </h1>
          <p className={`py-6 ${theme === 'black' ? 'text-white' : 'text-black'}`}>
          Desde 2012, a minha vida se entrelaça com a arte suave do Jiu-Jitsu.
             Comecei minha trajetória na equipe Ryan Gracie, sob a orientação do
             professor Juliano Pedrita, e desde então, a paixão por essa
             modalidade só fez crescer. Ao longo de mais de uma década, dedicação
             e aperfeiçoamento contínuo me levaram da faixa branca à faixa preta,
             conquistada em 2023 sob a tutela do Mestre Fabio Binho Sette, na
             equipe G13. Essa jornada foi marcada por treinamentos intensos e
             pela busca incansável por excelência técnica e pessoal.
             Compartilhando a Paixão Acredito que o conhecimento deve ser
             compartilhado. Por isso, desde a faixa roxa, dedico-me a ensinar
             Jiu-Jitsu para crianças e adultos. A experiência de transmitir tudo
             o que aprendi é extremamente gratificante e me permite ver a
             evolução de cada aluno de perto. Ao longo dos anos, tive a
             oportunidade de treinar com grandes nomes do Jiu-Jitsu, como Romulo
             Barral, Wilson Bueno e membros da família Gracie. Essas experiências
             enriqueceram meu conhecimento e me inspiraram a buscar sempre mais.
          </p>
          <Link href="#contact" scroll={false} className="btn btn-info">
            Entre em contato
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
