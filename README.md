# YouCreate - Frontend

**YouCreate** es una plataforma fintech diseñada para ayudar a los creadores de contenido a gestionar sus finanzas de manera eficiente y efectiva. Este frontend ofrece una experiencia de usuario intuitiva, accesible y visualmente atractiva, permitiendo a los usuarios interactuar con herramientas avanzadas para el rastreo de ingresos, el manejo de obligaciones fiscales y la gestión de pagos.

---

## 🚀 Tecnologías Utilizadas

Las siguientes tecnologías han sido utilizadas en el desarrollo del frontend para garantizar un rendimiento excelente, escalabilidad y una experiencia de usuario fluida:

- **React**: Framework principal para construir la interfaz de usuario interactiva.

- **Tailwind CSS**: Framework de diseño para estilos rápidos y personalizados, asegurando una interfaz limpia y moderna.

- **Chart.js**: Biblioteca para crear gráficos interactivos y detallados, brindando una visualización precisa de las métricas financieras.

- **TypeScript**: Lenguaje basado en JavaScript que agrega tipado estático, mejorando la robustez y la escalabilidad del código.

- **Vercel** y **Netlify**: Plataformas de despliegue que aseguran alta disponibilidad, tiempos de carga rápidos y un flujo continuo de integración y entrega.



---

## 📋 Características Principales

### 1. **Landing Page, Registro y Login**

   - **Página de bienvenida**: Los usuarios pueden registrarse, iniciar sesión y obtener información básica sobre la plataforma.

   - **Confirmación de cuenta**: El usuario recibe un correo electrónico para confirmar su cuenta y garantizar la seguridad del registro.

### 2. **Dashboard**
   Una interfaz de usuario completa donde se visualizan múltiples gráficos interactivos y métricas clave:

   - **Ingresos Totales**: Un gráfico de tipo **pie** que visualiza la distribución de los ingresos.

   - **Evolución de Ingresos**: Un gráfico de **escala** que muestra la evolución de los ingresos a lo largo del tiempo.

   - **Egresos Totales**: Un gráfico de tipo **pie** que ilustra los egresos por categoría.

   - **Balance Mensual**: Comparación de ingresos y egresos mes a mes, con un gráfico que ayuda a entender los balances de cada mes.

   - **Últimos Movimientos**: Lista de transacciones recientes, con un desglose de las últimas actividades financieras.

### 3. **Mis Pagos**
   Los usuarios pueden gestionar pagos, impuestos y colaboradores de manera eficiente:

   - **Listado de impuestos pendientes**: Visualización de impuestos que el usuario debe pagar.

   - **Listado de colaboradores pendientes de pago**: Los colaboradores que aún no han recibido su pago se encuentran en este listado.

   - **Funciones de crear y editar**: Los usuarios pueden añadir y editar impuestos y colaboradores según sea necesario.

### 4. **Mis Ingresos**
   La sección donde los usuarios gestionan sus fuentes de ingresos:

   - **Listado de ingresos**: Muestra un historial detallado de los ingresos obtenidos por el usuario.

   - **Opciones para agregar y editar**: Los usuarios pueden añadir nuevos ingresos o modificar los existentes.


### 5. **Mis Redes**
   Los usuarios pueden conectar y gestionar sus redes sociales:

   - **Listado de redes conectadas**: Visualización de las redes sociales que el usuario tiene conectadas a la plataforma.

---

## 🔄 Despliegue

El frontend de YouCreate está desplegado utilizando **Vercel** y **Netlify**, plataformas líderes para el despliegue y la optimización de aplicaciones web. Gracias a estas herramientas, el proyecto disfruta de alta disponibilidad, tiempos de carga rápidos y actualizaciones automáticas.

---

## 🛠️ ¿Qué Aporta el Frontend?

El frontend de YouCreate aporta una serie de mejoras y características que optimizan tanto la experiencia del usuario como la interacción con la plataforma:

- **Visualización Avanzada**: Gracias a la integración de **Chart.js**, los usuarios pueden visualizar métricas clave de sus finanzas de forma clara y detallada, facilitando la toma de decisiones.

- **Experiencia de Usuario Optimizada**: El uso de **Tailwind CSS** permite crear una interfaz moderna y limpia.

- **Interacción en Tiempo Real**: La integración directa con el backend garantiza que todos los datos se sincronicen automáticamente, mostrando información actualizada de manera instantánea.

- **Flujo de Trabajo Simplificado**: El diseño modular permite una fácil navegación entre las secciones del sistema, como el manejo de ingresos, pagos e impuestos.


---


## 🗂️ Estructura del Proyecto

La estructura del proyecto se organiza de la siguiente manera:

- **`/src/assets`**: Archivos estáticos como imágenes y otros recursos.

- **`/src/components`**: Componentes reutilizables de la interfaz de usuario.

- **`/src/context`**: Gestión global del estado de la aplicación.

- **`/src/pages`**: Páginas principales de la aplicación.

- **`/src/services`**: Servicios encargados de la comunicación con el backend.

---

## 🛠️ Funciones Clave Implementadas

Las siguientes funciones clave mejoran la interacción con el usuario y garantizan la correcta sincronización de datos:

- **Manejo de Estados Globales**: Utilización del Context API para compartir datos entre componentes, asegurando que toda la aplicación esté sincronizada.

- **Validación de Formularios**: Se implementaron validaciones para asegurar que los datos ingresados por los usuarios sean correctos y completos.

- **Interacción Dinámica con el Backend**: La aplicación se comunica en tiempo real con el backend a través de API calls, permitiendo actualizaciones inmediatas en la interfaz de usuario.

- **Diseño Modular**: La arquitectura del frontend se basa en componentes modulares, lo que facilita el mantenimiento, escalabilidad y personalización del sistema.

---

## 🔗 Enlaces

- **Repositorio Backend**: [YouCreate Backend](https://github.com/igrowker/i004-youcreate-back)

- **Demo en Vercel**: [YouCreate en Vercel](https://i004-youcreate-front.vercel.app/)

- **Demo en Netlify**: [YouCreate en Netlify](https://youcreate.netlify.app/)

---
