"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          alt="about-image"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Soy un desarrollador web full stack con pasión por crear
            aplicaciones web interactivas y responsive. Tengo experiencia
            trabajando con JavaScript, React, Redux, Node.js, Express, MySQL,
            Sequelize, HTML, CSS y Git. Aprendo rápido y siempre estoy buscando
            expandir mi conocimiento y conjunto de habilidades. Soy un jugador
            de equipo y estoy emocionado de trabajar con otros para crear
            aplicaciones increíbles.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              Skills
            </span>
            <span>Educación</span>
            <span>Experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
