# Roadmap del Proyecto - TP3

Este documento detalla la planificación y distribución de tareas para el desarrollo del Trabajo Práctico Nº3 de Programación III.

## Información General
- **Materia:** Programación III
- **Fecha de Entrega:** Miércoles 13 de mayo, 23:59 hs.
- **Metodología de Trabajo:** Git Flow

## División de Tareas

### 1. Martin Alcaraz (Inicialización, Deploy y Backend de Perfil)
**Estado:** En Proceso
- [x] Inicializar el proyecto Node.js (`npm init`).
- [x] Crear estructura de carpetas (`controllers`, `data`, `models`, `routes`) y archivos base.
- [x] Instalar dependencias
- [ ] Realizar deploy inicial de la API en Render.
- [ ] Desarrollar endpoint `GET /perfil/:id`.
- [ ] Crear el archivo JSON base simulando los datos del usuario logueado (nombre, mail, fecha de registro, foto, últimos 3 pedidos).

### 2. Fede (Documentación y Frontend de Perfil)
**Estado:** En Proceso
- [ ] Redacción del `README.md`
- [x] Planificación de la División y distribución de Tareas y redaccion del `ROADMAP.md`
- [ ] Documentación técnica detallada del 90% de las funciones.
- [ ] Incluir ejemplos de estructura de cada archivo JSON en la documentación.
- [ ] Desarrollo visual del apartado de perfil de usuario en el Front-end.
- [ ] Conectar la vista del perfil con el endpoint desarrollado por Martin.

### 3. Matias (Listado de Servicios - Full Stack)
**Estado:** Pendiente
- [ ] Crear el archivo `data.json` garantizando más de 13 servicios.
- [ ] Desarrollar endpoint `GET /servicios` para retornar el listado completo.
- [ ] Refactorizar el Front-end (`servicios.html`) para consumir el listado desde la API en Render usando `fetch` asíncrono y bloques `try/catch`.

### 4. Nahuel (Detalle de Servicios y Buscador - Full Stack)
**Estado:** Pendiente
- [ ] Desarrollar endpoint `GET /servicios/:id` para el detalle de un servicio.
- [ ] Migrar la vista de detalle en el Front-end para que consuma los datos de la API.
- [ ] Desarrollar e integrar la lógica del "Buscador Sencillo" para filtrar los servicios en pantalla.

### 5. Homero (Backend y Frontend: Equipo y Deploy del Cliente)
**Estado:** Pendiente
- [ ] Crear JSON de los miembros del equipo y desarrollar el endpoint `GET /equipo`.
- [ ] Dinamizar la vista del equipo en el Front-end consumiendo la respuesta del servidor.
- [ ] Realizar la configuración y deploy del Front-end en GitHub Pages.

### 6. Nicolás (Login y Experiencia de Usuario)
**Estado:** Pendiente
- [ ] Creación y maquetación de la nueva página de Login.
- [ ] Desarrollar endpoint `POST /login` validando credenciales contra un JSON de usuarios.
- [ ] Implementar efectos de carga ("Spinners" o "Cargando...") en el Front-end al esperar las promesas de la API.
- [ ] Establecer y unificar las `flags` (`console.log`) en las rutas para el registro de ejecuciones.

## Requisitos Técnicos Clave
- [ ] API desplegada en Render.
- [ ] Front-end desplegado en GitHub Pages.
- [ ] Uso obligatorio de funciones asíncronas con `try/catch`.
- [ ] Documentación completa en `README.md`.