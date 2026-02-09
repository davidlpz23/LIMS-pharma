# 🧪 LIMS-pharma
**Sistema de Gestión de Información de Laboratorio (LIMS) para el Sector Farmacéutico**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 📖 Descripción del Proyecto

**LIMS-pharma** es una solución integral diseñada para optimizar los flujos de trabajo en laboratorios farmacéuticos y de análisis químico. Este proyecto nace de la necesidad de centralizar la trazabilidad de muestras, la gestión de inventario de reactivos y el control de usuarios bajo estándares de calidad.

A diferencia de otros sistemas de gestión genéricos, este software fue diseñado con **lógica de dominio especializada**, enfocándose en los puntos críticos de control de un laboratorio real, como la vigencia de reactivos y la cadena de custodia de las muestras.

---

##  Características Principales

Este sistema Full Stack incluye:

* ** Autenticación y Seguridad (JWT):** Sistema robusto de login y registro con protección de rutas privadas (`PrivateRoute`) y manejo de sesiones seguras mediante JSON Web Tokens.
* ** Gestión de Reactivos (Reagents Management):**
    * Registro detallado de reactivos (Lote, Caducidad, Ubicación).
    * Visualización de inventario en tiempo real.
    * Lógica de alertas para stock mínimo y vencimientos.
* ** Trazabilidad de Muestras (Sample Tracking):**
    * Registro único de muestras y asignación de análisis.
    * Seguimiento del estado de la muestra dentro del flujo de trabajo del laboratorio.
* ** Arquitectura Escalable:**
    * **Backend:** API RESTful construida con Node.js y Express, utilizando arquitectura MVC (Model-View-Controller) para una separación clara de responsabilidades.
    * **Base de Datos:** Modelado relacional con Sequelize ORM y sistema de migraciones para un despliegue controlado y versionado.

---

## Tecnologías Utilizadas

### Frontend
* **React.js:** Construcción de componentes funcionales y manejo de estado.
* **React Router:** Navegación SPA (Single Page Application).
* **Axios / API Services:** Capa de servicios desacoplada para comunicación con el backend (`services/api.js`).
* **CSS Modules:** Estilizado modular para componentes.

### Backend
* **Node.js & Express:** Servidor y enrutamiento de API.
* **Sequelize ORM:** Abstracción de base de datos y gestión de modelos (`models/index.js`).
* **JWT:** Estrategia de autenticación stateless (`utils/jwt.js`).
* **Middlewares:** Validación de datos y protección de rutas (`middleware/auth.js`).

---

## Estructura del Proyecto

El repositorio sigue una arquitectura clara separando `frontend` y `backend`:

    LIMS-pharma/
    ├── backend/            # Lógica del servidor y API
    │   ├── config/         # Configuración de BD (Sequelize)
    │   ├── controllers/    # Lógica de negocio (Auth, Reagent, Sample)
    │   ├── models/         # Definición de esquemas de datos
    │   ├── routes/         # Endpoints de la API
    │   ├── services/       # Servicios internos (ej. Alertas)
    │   └── migrations/     # Control de versiones de la BD
    │
    └── frontend/           # Interfaz de usuario (React)
        ├── public/
        └── src/
            ├── components/ # Componentes (Login, ReagentList, Register)
            ├── services/   # Comunicación con API
            └── utils/      # Funciones auxiliares

---

## Instalación y Despliegue Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

    git clone https://github.com/davidlpz23/LIMS-pharma.git
    cd LIMS-pharma

### 2. Configurar el Backend

    cd backend
    npm install

    # Crea un archivo .env en la carpeta backend con tus credenciales de BD y JWT_SECRET
    # Ejemplo:
    # DB_USERNAME=postgres
    # DB_PASSWORD=tu_contraseña
    # DB_DATABASE=lims_db
    # DB_HOST=127.0.0.1

    # Ejecuta las migraciones de Sequelize para crear las tablas
    npx sequelize-cli db:migrate

    # Iniciar servidor
    npm start

### 3. Configurar el Frontend

    # Abre una nueva terminal
    cd ../frontend
    npm install
    npm start

---

##  Sobre el Desarrollador

**Germán David López**
*Desarrollador de Software & Analista Químico Senior*

Este proyecto combina mi formación como Tecnólogo en Análisis y Desarrollo de Software con más de 8 años de experiencia como Analista Químico Senior.

Mi objetivo es cerrar la brecha entre la ciencia analítica y la tecnología, creando herramientas eficientes que entiendan y resuelvan las necesidades reales del laboratorio moderno.
