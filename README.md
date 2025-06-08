# &#128248; Like Me &#128248; (Desafío Full Stack )

![foto](https://github.com/jorgeriquelmez/imagenes/blob/main/inicio_likeme.png)

Este repositorio contiene una aplicación web Full Stack sencilla, desarrollada como parte de un desafío, que permite a los usuarios ver y gestionar publicaciones (`posts`), incluyendo la funcionalidad de "darle like" y eliminar publicaciones.

---

## &#x1F680; Características

- **Publicaciones (Posts):** Visualiza una lista de publicaciones existentes.
- **Creación de Posts:** Agrega nuevas publicaciones con título, descripción y una imagen (URL).
- **Likes:** Da "me gusta" a las publicaciones.
- **Eliminación de Posts:** Elimina publicaciones existentes.
- **Base de Datos PostgreSQL:** Almacenamiento persistente de las publicaciones.

---

## &#x1F4BB; Tecnologías Utilizadas

### Backend (API REST)

- **Node.js:** Entorno de ejecución JavaScript.
- **Express.js:** Framework web para Node.js, utilizado para construir la API REST.
- **`pg` (Node-PostgreSQL):** Driver para interactuar directamente con bases de datos PostgreSQL.
- **`dotenv`:** Para gestionar variables de entorno (`.env`).
- **`cors`:** Middleware para habilitar Cross-Origin Resource Sharing.
- **`uuid`:** Para generar IDs únicos para las publicaciones.
- **Base de Datos:** PostgreSQL

### Frontend (Interfaz de Usuario)

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite:** Herramienta de compilación para proyectos de frontend (asumido por puerto 5173).
- **Axios:** Cliente HTTP basado en promesas para hacer peticiones al backend.

---

## &#x1F4C2; Estructura del Proyecto

El repositorio está dividido en dos partes principales:

├── backend/  
│ ├── config/  
│ │ └── config.js  
│ ├── controllers/  
│ │ └── postController.js  
│ ├── models/
│ │ └── postModel.js  
│ ├── routes/  
│ │ └── postRoutes.js  
│ ├── .env.example  
│ ├── package.json  
│ └── server.js  
├── frontend/  
│ ├── public/  
│ ├── src/  
│ │ ├── components/  
│ │ ├── App.js  
│ │ └── main.jsx  
│ ├── .env.example  
│ ├── package.json  
│ └── index.html  
├── .gitignore  
├── package.json  
└── README.md

## &#x1F6E0;&#xFE0F; Configuración y Ejecución

Sigue estos pasos para poner la aplicación en marcha.

### 1. Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/es/) (versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/get-npm) (viene con Node.js) o [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [PostgreSQL](https://www.postgresql.org/download/) (servidor de base de datos)

### 2. Configuración de la Base de Datos

1.  Abre tu cliente de PostgreSQL (pgAdmin, psql, DBeaver, etc.).
2.  Crea una nueva base de datos. Puedes llamarla `likeme_db` (o el nombre que prefieras).
3.  Ejecuta la siguiente sentencia SQL para crear la tabla `posts`:

    ```sql
    CREATE TABLE posts (
        id SERIAL PRIMARY KEY, -- Agregado PRIMARY KEY para mejor práctica
        titulo VARCHAR(25) NOT NULL,
        img VARCHAR(1000) NOT NULL,
        descripcion VARCHAR(255) NOT NULL,
        likes INT DEFAULT 0
    );
    ```

    _(Nota: Se agregó `PRIMARY KEY` a `id` y `NOT NULL`/`DEFAULT 0` para `titulo`, `img`, `descripcion` y `likes` para mejorar la robustez de la base de datos)._

### 3. Configuración del Backend

1.  Navega a la carpeta `backend/` en tu terminal:
    ```bash
    cd backend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```
3.  Crea un archivo `.env` en la raíz de la carpeta `backend/` con tus credenciales de PostgreSQL:
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=tu_usuario_postgres
    DB_PASSWORD=tu_contraseña_postgres
    DB_NAME=likeme_db
    PORT=5000 # Puerto donde correrá el backend
    ```
    _(Asegúrate de reemplazar los valores con tu propia configuración de PostgreSQL)._
4.  Inicia el servidor backend:
    ```bash
    node --watch server.js
    # o si tienes un script `start` en package.json:
    # npm start
    ```
    El servidor se ejecutará en `http://localhost:5000`. Verás un mensaje en la consola que indica la conexión exitosa a la base de datos.

### 4. Configuración del Frontend

1.  Abre una **nueva terminal** y navega a la carpeta `frontend/`:
    ```bash
    cd frontend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```
3.  Crea un archivo `.env` en la raíz de la carpeta `frontend/` para apuntar a tu backend:
    ```
    VITE_API_BASE_URL=http://localhost:5000
    ```
    _(Nota: Si en `backend/server.js` tienes `app.use('/posts', postRoutes);`, entonces `VITE_API_BASE_URL` debe ser `http://localhost:5000/posts`)._
4.  Inicia la aplicación React:
    ```bash
    npm run dev
    # o
    yarn dev
    ```
    La aplicación se abrirá en tu navegador en `http://localhost:5173`.

---

## &#x1F3C3;&#x200D;&#x2642;&#xFE0F; Uso

Una vez que ambos servidores estén corriendo:

1.  Abre tu navegador y ve a `http://localhost:5173`.
2.  Verás la interfaz de la aplicación "Like Me".
3.  Utiliza el formulario de la izquierda para crear nuevas publicaciones.
4.  Las publicaciones aparecerán en la lista de la derecha.
5.  Puedes hacer clic en el botón de "like" para incrementar los likes de una publicación.
6.  Utiliza el botón de eliminar para borrar publicaciones.

---
