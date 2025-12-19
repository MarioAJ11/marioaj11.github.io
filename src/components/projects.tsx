"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BatAnimation } from "./bat-animation";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Proyectos</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:grid-rows-1 md:auto-rows-fr">
          {/* Paradigma Radio */}
          <div
            className={`group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gray-900 transition-all duration-500 flex flex-col ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Imagen */}
            <div className="h-64 overflow-hidden bg-gray-100 relative flex-shrink-0">
              <img
                src="/paradigma-logo.png"
                alt="Paradigma Radio"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                Paradigma Radio
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                Aplicación móvil nativa para Android que permite escuchar a la carta
                los programas de Paradigma Media Andalucía. Desarrollada en Kotlin con Firebase,
                actualmente disponible en Google Play y próximamente en iOS.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Kotlin", "Android", "Firebase", "Google Play"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botón */}
              <Link
                href="/proyectos/paradigma-radio"
                className="w-full bg-black text-white px-4 py-3 rounded-full text-center font-semibold hover:bg-gray-800 transition-colors block"
              >
                Ver Proyecto
              </Link>
            </div>
          </div>

          {/* GitHub Projects */}
          <div
            className={`group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            {/* Imagen */}
            <div className="h-64 overflow-hidden bg-gray-900 relative flex-shrink-0 flex items-center justify-center">
              <img
                src="/repositorios.png"
                alt="Repositorios GitHub"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                Proyectos en GitHub
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                Explora todos mis proyectos de código abierto, contribuciones y
                experimentos de programación. Desde aplicaciones web hasta herramientas
                de desarrollo backend y móvil.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Kotlin", "C#", "Python", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-medium border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botón */}
              <a
                href="https://github.com/MarioAJ11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-gray-900 px-4 py-3 rounded-full text-center font-semibold hover:bg-gray-100 transition-colors block"
              >
                Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
