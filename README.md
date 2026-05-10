# Programación III TP N°3 - API REST

## Impuls*API* - Descripción

## Integrantes - Grupo 19 👥
- [@fedeheinrich](https://github.com/fedeheinrich) - Federico Heinrich
- [@Tincho2319](https://github.com/Tincho2319) - Martin Alcaraz
- [@Nahuelete](https://github.com/Nahuelete) - Nahuel Cappa
- [@Oviedo-Matias](https://github.com/Oviedo-Matias) - Matias Oviedo
- [@nicc-essp](https://github.com/nicc-essp) - Nicolas Espulef
- [@HomeroColomboArg](https://github.com/HomeroColomboArg) - Homero Colombo

## Metodologia de Trabajo

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

**Commits**: Utilizar titulos descriptivos con el formato `tipo: descripción`. 
*Ejemplo: `feat: implementación de login` o `fix: corrección de ruta API`.

**Revisiones de Pull Requests (PR)**: Al menos un compañero de equipo debe revisar una solicitud de incorporacion de cambios antes de fusionarla (merge) con develop.

## Estructura del Proyecto 📂
    ProgramacionIII-Practico-3/  
    │── app.js                  # Punto de entrada de la aplicación
    ├── package-lock.json                    
    ├── package.json                        
    │── .gitignore  
    │── controllers/
    │   └── serviciosControllers.js               
    │── data/
    │   └── data.json
    │── models/
    │   └── server.js
    │── routes/
    │   └── serviciosRoutes.js               
    └── README.md                # Documentacion general para consumidores de la API

## División de Archivos 🗂️
* Documentacion: [@fedeheinrich](https://github.com/fedeheinrich)
* Lo demas a definir

## Funciones JS

## Estructura de archivos JSON

## Deploys 🚀
| Componente | Servicio | URL |
| :--- | :--- | :--- |
| **Frontend** | ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white) | [Ver Sitio](https://tincho2319.github.io/ProgramacionIII-Practico-1/) |
| **API / Backend** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) | [Ver Sitio]() |