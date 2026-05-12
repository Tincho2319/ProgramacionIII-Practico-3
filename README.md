# Programación III TP N°3 - API REST

## 🚀 Impuls*API* - Descripción

**ImpulsAPI** es una API RESTful desarrollada con **Node.js** y **Express** para el Trabajo Práctico N°3 de la materia Programación III. Su objetivo es proporcionar un backend robusto y estructurado capaz de gestionar información clave de una plataforma web, incluyendo perfiles de usuario, un catálogo de servicios, datos del equipo de desarrollo y un sistema de autenticación básico.

El proyecto implementa una arquitectura modular separando rutas, controladores y modelos, y utiliza archivos JSON estáticos para simular la persistencia de datos. Diseñada para integrarse de forma asíncrona con un Front-end dinámico, la API permite aplicar las mejores prácticas de desarrollo backend, manejo de errores con try/catch y la distribución eficiente del trabajo en equipo.

## 👥 Integrantes - Grupo 19
- [@fedeheinrich](https://github.com/fedeheinrich) - Federico Heinrich
- [@Tincho2319](https://github.com/Tincho2319) - Martin Alcaraz
- [@Nahuelete](https://github.com/Nahuelete) - Nahuel Cappa
- [@Oviedo-Matias](https://github.com/Oviedo-Matias) - Matias Oviedo
- [@nicc-essp](https://github.com/nicc-essp) - Nicolas Espulef
- [@HomeroColomboArg](https://github.com/HomeroColomboArg) - Homero Colombo

## 🛠️ Metodologia de Trabajo

Para mantener el repositorio organizado entre los seis, utilizamos la estrategia de ramificación **Git Flow** y los **estandares de contribución** detallados más abajo.

### Estrategia de Ramificación Git Flow

* main: Código en su version estable y completa (V1.0).

* release/x.0 : Preparacion de una nueva version. Se crea cuando develop tiene suficientes funcionalidades para una entrega, sirve para corregir errores menores durante la revision, ajustar numeros de version, actualizar documentacion y **IMPORTANTE: no agregar funcionalidades nuevas**.
    > *Se crea desde **develop***, y una vez que se completa el trabajo en dicha rama (obtenemos la version estable) se realiza el merge a develop y a main para actualizar el codigo en ambas ramas.
* develop: rama de desarrollo.

* feature/nombre-de-la-funcionalidad: Para crear nuevas funcionalidades. 
    > *Se crea desde **develop*** para trabajar en una nueva funcion a implementar. Una vez completada la funcionalidad, se hace el merge a develop y se elimina la rama.

* hotfix: Correcion urgente de un error que se encuentra en main.
    > Cuando encontramos un error importante en la version estable, *se crea desde **main*** para trabajar en la correcion del error y solucionarlo lo antes posible. Una vez corregido el bug, se hace el merge a main y a develop.

### Estandares de contribución

- **Commits**: Utilizar titulos descriptivos con el formato `tipo: descripción`. 
    > Ejemplo: `feat: implementación de login` o `fix: corrección de ruta API`.

- **Revisiones de Pull Requests (PR)**: Al menos un compañero de equipo debe revisar una solicitud de incorporacion de cambios antes de fusionarla (merge) con develop.

## 📂 Estructura del Proyecto
    ProgramacionIII-Practico-3/  
    │── app.js                  # Punto de entrada de la aplicación
    ├── package-lock.json                    
    ├── package.json                        
    │── .gitignore  
    │── controllers/
    │   ├── serviciosController.js                
    │   └── autorizacionController.js
    │── data/
    │   ├── servicios.json
    │   ├── serviciosDetalle.json
    │   └── usuarios.json
    │── models/
    │   └── server.js
    │── routes/
    │   ├── serviciosRoutes.js
    │   └── autorizacionRoutes.js 
    ├── ROADMAP.md              # Hoja de ruta y division de tareas
    └── README.md               # Documentacion general

## 🗂️ División de Archivos

A continuación, se detalla la responsabilidad de cada integrante sobre los archivos del repositorio:

| Responsable | Archivos y Carpetas Principales | Funcionalidad / Módulo |
| :--- | :--- | :--- |
| **Martin Alcaraz** | `app.js`, `server.js`, `models/`, `data/usuarios.json`, `js/login.js`, `js/contacto.js`, `js/layout.js`, `js/main.js`, `js/utils.js`,`js/servicios.js` | Inicialización, deploy de la API, backend de perfil y scripts de frontend . |
| **Federico Heinrich** | `README.md`, `ROADMAP.md`, `pages/perfil.html`, `pages/registro.html`, `pages/login.html`, `css/perfil.css`, `css/registro.css`, `css/login.css`, `js/perfil.js` | Documentación técnica y frontend de registro, login y perfil de usuario. |
| **Matias Oviedo** | `data/servicios.json`, `pages/servicios.html`, `css/servicios.css` | Gestión y visualización del listado completo de servicios. |
| **Nahuel Cappa** | `controllers/serviciosController.js`, `js/buscador.js` | Detalle de servicios y lógica de filtrado/búsqueda. |
| **Homero Colombo** | `data/equipo.json`, `pages/equipo.html`, `css/equipo.css` | Backend y frontend del equipo + deploy en GitHub Pages. |
| **Nicolas Espulef** | `controllers/loginController.js` | Sistema de login, efectos de carga (spinners) y logs. |

## ⚡ Funciones JS

## ⚙️ Estructura de archivos JSON

## 🚀 Deploys
| Componente | Servicio | URL |
| :--- | :--- | :--- |
| **Frontend** | ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white) | [Ver Sitio](https://oviedo-matias.github.io/ProgramacionIII-Practico-3-Fork-1/) |
| **API / Backend** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) | [Ver Sitio](https://impulsar-webapi-64jf.onrender.com) |
