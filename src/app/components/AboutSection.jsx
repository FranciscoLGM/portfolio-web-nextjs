"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import TAB_DATA from "../../../public/data/tabData";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-start items-start w-full">
          <Image
            src="/images/about-image.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
          <p className="text-base lg:text-lg mb-4">
            Soy un desarrollador Full Stack apasionado por crear aplicaciones
            innovadoras que mejoren la vida de los usuarios. Con experiencia en
            tecnologías como JavaScript (React, Angular, Vue.js), Node.js
            (Express.js), Java (Spring Boot) y Python (Django), me esfuerzo por
            estar a la vanguardia del desarrollo de software.
          </p>
          <p className="text-base lg:text-lg mb-4">
            Estoy comprometido con el aprendizaje continuo y la mejora constante
            de mis habilidades. Mi enfoque está en diseñar aplicaciones
            escalables, seguras y fáciles de usar, proporcionando una excelente
            experiencia al usuario final.
          </p>
          <p className="text-base lg:text-lg mb-4">
            Estoy motivado por aplicar mis habilidades en proyectos desafiantes
            y colaborar para transformar ideas en soluciones efectivas. Explora
            mi portafolio y contáctame para discutir cómo puedo contribuir a tu
            equipo. ¡Juntos, podemos crear soluciones impactantes y transformar
            el futuro del desarrollo tecnológico!
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly mt-8 space-x-4">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Habilidades
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Formación
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certificaciones
        </TabButton>
      </div>
      <section>
        <div className="flex flex-col md:flex-row justify-start mt-8 mb-8 ml-4 md:ml-8 lg:ml-16 xl:ml-32">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
