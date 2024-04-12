# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```
# Spotify Clone con Astro

Este proyecto es un clon de Spotify construido con [Astro](https://astro.build/), una nueva generación de frameworks front-end. El objetivo principal de este proyecto es entender cómo los diferentes lenguajes de programación web pueden trabajar juntos en armonía gracias a Astro.

## Importancia del proyecto

Este proyecto ha sido una herramienta invaluable para comprender mejor la funcionalidad web y cómo los diferentes lenguajes de programación web pueden interactuar entre sí. Algunos de los conceptos clave que se han explorado y comprendido mejor a través de este proyecto incluyen:

- **Transiciones**: Este proyecto ha ayudado a entender cómo funcionan las transiciones en la web, cómo se pueden implementar y cómo pueden mejorar la experiencia del usuario.

- **Persistencia de componentes**: A través de la navegación, este proyecto ha demostrado cómo los componentes pueden mantenerse activos, lo que es esencial para una experiencia de usuario fluida y sin interrupciones.

- **Integración de múltiples lenguajes**: Con Astro, este proyecto ha demostrado cómo se pueden integrar y utilizar juntos múltiples lenguajes de programación web, como JavaScript, TypeScript, JSX, HTML y CSS.

## Cómo ejecutar el proyecto

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio en tu máquina local usando `git clone`.

2. Navega hasta el directorio del proyecto e instala las dependencias con `npm install`.

3. Inicia el servidor de desarrollo con `npm run dev`.

4. Abre tu navegador y navega hasta `http://localhost:5000` para ver el proyecto en acción.

## Contribuir

Las contribuciones a este proyecto son bienvenidas. Si encuentras un error o tienes una sugerencia, por favor abre un issue. Si quieres contribuir con código, por favor abre un pull request.

## Licencia

Este proyecto está licenciado bajo la licencia MIT.
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
