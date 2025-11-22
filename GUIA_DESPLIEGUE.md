# Guía de Despliegue (Deployment)

Esta guía te explicará cómo llevar tu portafolio desde tu computadora a internet.

## Paso 0: Preparación (Para cualquier método)

Antes de subir tu web, siempre debes asegurarte de que todo funcione bien y generar la versión optimizada.

1.  Abre tu terminal en la carpeta del proyecto.
2.  Ejecuta el comando de construcción:
    ```bash
    npm run build
    ```
3.  Esto creará una carpeta llamada `dist` en tu proyecto.
    *   Esta carpeta `dist` es lo único que necesitas para el hosting tradicional.
    *   Para Vercel/Netlify, este paso lo hacen ellos automáticamente en la nube.

---

## Opción 1: Vercel (Recomendada 🏆)

Es la opción más rápida, fácil y profesional para proyectos React/Vite.

1.  Sube tu proyecto a **GitHub**.
2.  Ve a [vercel.com](https://vercel.com) y crea una cuenta (puedes entrar con tu GitHub).
3.  Haz clic en **"Add New..."** -> **"Project"**.
4.  Selecciona tu repositorio de GitHub.
5.  En la configuración ("Build and Output Settings"), Vercel detectará automáticamente que es **Vite**.
    *   Build Command: `npm run build`
    *   Output Directory: `dist`
6.  Haz clic en **Deploy**.

¡Listo! Tu web estará online en segundos con un enlace seguro (https).

---

## Opción 2: Netlify (Alternativa Excelente)

Muy similar a Vercel.

1.  Sube tu proyecto a **GitHub**.
2.  Ve a [netlify.com](https://www.netlify.com) y crea una cuenta.
3.  Haz clic en **"Add new site"** -> **"Import an existing project"**.
4.  Conecta con GitHub y elige tu repositorio.
5.  Las configuraciones de construcción (Build settings) se detectarán solas:
    *   Build command: `npm run build`
    *   Publish directory: `dist`
6.  Haz clic en **Deploy site**.

---

## Opción 3: Hosting Tradicional (cPanel, Hostinger, GoDaddy)

Usa esta opción si ya pagaste un hosting compartido o necesitas subirlo a un servidor FTP clásico.

1.  En tu computadora, ejecuta:
    ```bash
    npm run build
    ```
2.  Ve a la carpeta de tu proyecto y busca la carpeta `dist`.
3.  Abre tu cliente FTP (como FileZilla) o el Administrador de Archivos de tu cPanel.
4.  Navega a la carpeta pública de tu servidor (usualmente llamada `public_html` o `www`).
5.  **Sube TODO el contenido** que está DENTRO de la carpeta `dist` a `public_html`.
    *   Nota: No subas la carpeta `dist` completa, sube los archivos que están adentro (`index.html`, carpeta `assets`, etc.).
6.  ¡Listo! Al entrar a tu dominio, verás tu web.

### ⚠️ Importante para Hosting Tradicional
Si tu web no carga los estilos o imágenes al subirla a una subcarpeta (ej: `midominio.com/mi-portafolio`), necesitas hacer un pequeño cambio antes de hacer el build:

1.  Ve al archivo `vite.config.js`.
2.  Agrega la propiedad `base`:
    ```javascript
    export default defineConfig({
      base: './', // Esto hace que las rutas sean relativas
      plugins: [react()],
    })
    ```
3.  Vuelve a ejecutar `npm run build` y sube los archivos de nuevo.
