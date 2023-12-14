"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Angular</li>
        <li>Sequelize</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Science and Technology</li>
        <li>University of Science and Technology</li>
        <li>University of Science and Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certification</li>
        <li>Certification</li>
        <li>Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((item) => item.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
