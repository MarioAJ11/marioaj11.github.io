"use client";

import Link from "next/link";

export default function ParadigmaRadioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver a proyectos
        </Link>

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="relative h-64 sm:h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <img
              src="/paradigma-logo.png"
              alt="Paradigma Radio"
              className="max-h-48 sm:max-h-64 object-contain p-8"
            />
          </div>
          
          <div className="p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Paradigma Radio
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Aplicación móvil nativa para Android
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Kotlin", "Android", "Firebase", "Google Play", "Material Design"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.paradigmaradio.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Sitio web oficial
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=org.paradigmamedia.paradigmaapp&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Ver en Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Acerca del Proyecto</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Paradigma Radio es una aplicación móvil nativa desarrollada en Android que permite a los usuarios 
              escuchar a la carta los programas de Paradigma Media Andalucía, una asociación de comunicación 
              comprometida con la calidad informativa y el periodismo independiente.
            </p>
            <p>
              La aplicación está construida con las últimas tecnologías de desarrollo Android, utilizando Kotlin 
              como lenguaje principal y Firebase para la gestión de datos en tiempo real. Actualmente disponible 
              en Google Play Store y próximamente en iOS.
            </p>
            <p>
              Durante el desarrollo, participé en el diseño de la arquitectura de la aplicación, la implementación 
              de funcionalidades clave, y el despliegue en la Play Store. El proyecto continúa en desarrollo 
              evolutivo con nuevas características y mejoras constantes.
            </p>
          </div>
        </div>

        {/* Video Demo */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Demo en Video</h2>
          <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="/media/paradigma-media.mp4"
              className="w-full h-full object-contain"
              controls
              muted
              loop
            >
              Tu navegador no soporta reproducción de vídeo.
            </video>
          </div>
        </div>

        {/* Role & Responsibilities */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mi Rol</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Desarrollo</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Desarrollo nativo en Android con Kotlin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Integración con Firebase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Implementación de reproductor de audio</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Publicación</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Despliegue en Google Play Store</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Mantenimiento evolutivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Preparación para iOS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
