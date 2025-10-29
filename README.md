# Portafolio personal con Astro + Tailwind + GSAP

Este proyecto es un portafolio estático creado con [Astro](https://astro.build), estilizado con [Tailwind CSS](https://tailwindcss.com) y animado con [GSAP](https://greensock.com/gsap). Está preparado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

## Requisitos previos

- Node.js ≥ 18
- npm ≥ 8
- Git instalado y configurado

## Scripts disponibles

Los comandos deben ejecutarse en la raíz del proyecto (`--dir`):

| Comando         | Descripción                                                     |
| :-------------- | :-------------------------------------------------------------- |
| `npm install`   | Instala las dependencias                                        |
| `npm run dev`   | Inicia el servidor de desarrollo en `http://localhost:4321`     |
| `npm run build` | Genera la versión de producción en la carpeta `dist/`           |
| `npm run preview` | Sirve el contenido compilado para comprobarlo antes de publicar |

## Estructura principal

```text
/
├── public/              # Recursos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── components/      # Componentes Astro reutilizables (Header, etc.)
│   ├── layouts/         # Layout base con tipografía y fondo
│   ├── pages/           # Páginas del sitio (`index.astro`, ...)
│   └── styles/          # Estilos globales (`global.css` con Tailwind)
├── astro.config.mjs     # Configuración de Astro (site, base, output)
├── tailwind.config.js   # Paleta personalizada y tipografía
└── postcss.config.cjs   # Integración de Tailwind con PostCSS
```

## Paleta y tipografía

La configuración de Tailwind (`tailwind.config.js`) añade los colores `pastelBlue`, `pastelOrange` y la fuente `Inter` para mantener un estilo coherente en todo el sitio.

## Animaciones con GSAP

GSAP se utiliza para crear animaciones suaves, como el efecto *fade-in* del título principal en `src/pages/index.astro`. Puedes importar GSAP en cualquier componente o página y aplicar nuevas animaciones según tus necesidades.

## Despliegue automático en GitHub Pages

El workflow definido en `.github/workflows/deploy.yml` compila y publica la carpeta `dist/` en la rama `gh-pages` cada vez que se hace push a `main`.

1. Asegúrate de que `astro.config.mjs` tenga:
	```js
	export default defineConfig({
	  output: 'static',
	  base: '/',
	  site: 'https://marioaj11.github.io',
	  trailingSlash: 'always',
	});
	```
2. Haz commit de tus cambios y súbelos a `main`:
	```bash
	git add .
	git commit -m "Actualiza contenido"
	git push origin main
	```
3. GitHub Actions construirá el sitio y actualizará automáticamente la rama `gh-pages`.

Si prefieres desplegar manualmente, ejecuta `npm run build` y sube el contenido de `dist/` a la rama `gh-pages`.

## Próximos pasos sugeridos

- Añadir nuevas secciones (experiencia, proyectos destacados, contacto).
- Incluir pruebas visuales en diferentes dispositivos.
- Conectar formularios a servicios externos (Netlify Forms, Formspree, etc.).
