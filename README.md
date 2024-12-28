# Full Stack Open Bootcamp by fullstackopen.com and midudev

## {() => fs} Full Stack Open

Este repositorio contiene los proyectos y ejercicios desarrollados como parte del curso [Full Stack Open](https://fullstackopen.com/), un curso que cubre tecnologías modernas de desarrollo web.

## Contenido del Proyecto

### Módulos

1. **Introducción a React**
   - Fundamentos de React
   - Manejo del estado con Hooks
   - Componentes controlados
2. **Comunicación con el servidor**
   - Fetching de datos
   - Manejo de Promesas y Axios
   - CRUD con APIs REST
3. **Programación del lado del servidor con Node.js**
   - Construcción de APIs
   - Uso de Express
   - Conexión con bases de datos
4. **Base de datos**
   - Introducción a MongoDB
   - Creación y manejo de esquemas
   - Consultas avanzadas
5. **Autenticación y autorización**
   - Manejo de sesiones y tokens
   - Seguridad de contraseñas
   - Middleware de autenticación
6. **React avanzado**
   - Context API
   - Manejo de estado global con Redux
   - Optimización de rendimiento

### Estructura del Repositorio

- `/partX/` : Cada carpeta representa una parte del curso con los ejercicios y proyectos correspondientes.
- `/backend/` : Código del servidor desarrollado en Node.js.
- `/frontend/` : Código del cliente desarrollado con React.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - Redux
  - CSS/SCSS
  - Axios
  - Vite

- **Backend:**
  - Node.js
  - Express
  - MongoDB/Mongoose

- **Herramientas:**
  - ESLint y Prettier para linting y formateo
  - Jest y React Testing Library para pruebas
  - Docker para contenedores

## Requisitos del Sistema

Antes de empezar, asegúrate de tener instalados:

- Node.js (v16 o superior)
- MongoDB (local o remoto)
- Docker (opcional)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/said-codes/fullstack-bootcamp.git
   cd fullstackopen-project
   ```

2. Instala las dependencias del cliente y del servidor:

   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Configura las variables de entorno:

   - Crea un archivo `.env` en la carpeta `backend`:

     ```env
     MONGODB_URI=mongodb://localhost:27017/fullstackopen
     PORT=3001
     SECRET=your_secret_key
     ```

   - En `frontend`, configura la URL del servidor en un archivo `.env`:

     ```env
     VITE_BACKEND_URL=http://localhost:3001
     ```

## Uso

1. Inicia el servidor:

   ```bash
   cd backend
   npm start
   ```

2. Inicia la aplicación cliente:

   ```bash
   cd frontend
   npm run dev
   ```

3. Accede a la aplicación en tu navegador en `http://localhost:5173`.

## Contribución

1. Realiza un fork de este repositorio.
2. Crea una nueva rama con tu característica o corrección de errores: `git checkout -b feature/nueva-caracteristica`.
3. Realiza tus cambios y realiza un commit: `git commit -m 'Agrega nueva característica'`.
4. Envía tus cambios: `git push origin feature/nueva-caracteristica`.
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por visitar este repositorio y disfrutar del viaje por el mundo del desarrollo full stack!
