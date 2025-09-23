# NASA Angular Application

Una aplicación Angular que integra con las APIs de la NASA para mostrar
información astronómica, incluyendo imágenes del día (APOD), objetos cercanos a
la Tierra (NEO) y eventos de clima espacial (DONKI).

## 📋 Descripción del Proyecto

Este proyecto fue desarrollado como prueba técnica para desarrollador Junior en
ADN ERP. Utiliza la API pública de la NASA (https://api.nasa.gov/) para obtener
y mostrar información astronómica de manera interactiva.

**Desarrollado por:** Carlos Andrés Franco Restrepo - cf.dev13@hotmail.com

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── nasa/
│   │   ├── components/
│   │   │   ├── apod/              # Astronomy Picture of the Day
│   │   │   ├── donki-cme/         # Coronal Mass Ejection data
│   │   │   ├── home-page/         # Página principal
│   │   │   ├── neows-card/        # Near Earth Objects
│   │   │   └── search-box/        # Componente de búsqueda
│   │   ├── interfaces/            # Definiciones de tipos TypeScript
│   │   ├── services/              # Servicios para comunicación con APIs
│   │   └── response-examples/     # Ejemplos de respuestas de la API
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/                        # Recursos estáticos
└── styles.css                     # Estilos globales
```

## 🚀 Tecnologías Utilizadas

- **Angular 16.2.14** - Framework principal
- **TypeScript 5.1.3** - Lenguaje de programación
- **RxJS 7.8.0** - Programación reactiva
- **Docker** - Containerización
- **Nginx** - Servidor web para producción

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI (opcional, se puede usar npx)

### Instalación Local

1. **Clonar el repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd nasa
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**

   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:4200
   ```

### Scripts Disponibles

```bash
# Servidor de desarrollo
npm start

# Construir para producción
npm run build

# Construir en modo watch (desarrollo)
npm run watch


# Generar componentes (usando Angular CLI)
ng generate component nombre-componente
```

## 🐳 Despliegue con Docker

El proyecto incluye configuración completa para Docker con un setup multi-stage
optimizado.

### Construcción de la Imagen

```bash
# Construir la imagen
docker build -t nasa-app .

# Construir con nombre personalizado
docker build -t nasa-angular-app:latest .
```

### Ejecución del Contenedor

```bash
# Ejecutar el contenedor
docker run -p 8080:80 nasa-app

# Ejecutar en segundo plano
docker run -d -p 8080:80 --name nasa-container nasa-app
```

### Acceso a la Aplicación

Una vez ejecutado el contenedor, la aplicación estará disponible en:

```
http://localhost:8080
```

### Configuración Docker

El proyecto utiliza:

- **Multi-stage build** para optimizar el tamaño de la imagen
- **Node.js 20 Alpine** para la construcción
- **Nginx Alpine** para el servidor de producción
- **Configuración Nginx** optimizada para SPAs (Single Page Applications)

#### Archivos Docker:

- `Dockerfile` - Configuración de construcción multi-stage
- `nginx.conf` - Configuración del servidor Nginx
- `.dockerignore` - Archivos excluidos del contexto Docker

## 🔧 Configuración de Desarrollo

### Estructura de Componentes

- **APOD Component**: Muestra la imagen astronómica del día
- **NEO Component**: Lista objetos cercanos a la Tierra
- **DONKI CME Component**: Información sobre eyecciones de masa coronal
- **Search Box**: Componente de búsqueda reutilizable
- **Home Page**: Página principal con navegación

### Servicios

- **NASA Service**: Maneja todas las comunicaciones con las APIs de la NASA
- Interfaces TypeScript para tipado fuerte de las respuestas de la API

## 📚 APIs Utilizadas

- **APOD API**: Astronomy Picture of the Day
- **NEO API**: Near Earth Objects Web Service
- **DONKI API**: Space Weather Database Of Notifications, Knowledge, Information

## 🚀 Despliegue en Producción

### Variables de Entorno

Para producción, asegúrate de configurar:

```bash
# API Key de la NASA (opcional, pero recomendado para mayor límite de requests)
NASA_API_KEY=tu_api_key_aqui
```

### Optimizaciones de Producción

- Build optimizado con `--configuration production`
- Compresión gzip habilitada en Nginx
- Cache headers configurados para assets estáticos
- Routing SPA configurado para manejar rutas del lado del cliente

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es una prueba técnica desarrollada para ADN ERP.

---

_Desarrollado con ❤️ usando Angular y las APIs de la NASA_
