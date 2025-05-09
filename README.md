# Sew_Recuperacion
Recu Sew

# Plan de Trabajo – Convocatoria Extraordinaria

## Tabla de Contenidos
- [Día 1 – Jueves 2 de mayo: Organización + HTML base](#día-1--jueves-2-de-mayo-organización--html-base)  
- [Día 2 – Viernes 3 de mayo: CSS completo y responsive](#día-2--viernes-3-de-mayo-css-completo-y-responsive)  
- [Día 3 – Sábado 4 de mayo: XML + generación con Python](#día-3--sábado-4-de-mayo-xml--generación-con-python)  
- [Día 4 – Domingo 5 de mayo: JavaScript (ECMAScript) + jQuery](#día-4--domingo-5-de-mayo-javascript-ecmascript--jquery)  
- [Día 5 – Lunes 6 de mayo: Juego y Meteorología](#día-5--lunes-6-de-mayo-juego-y-meteorología)  
- [Día 6 – Martes 7 de mayo: PHP + BBDD](#día-6--martes-7-de-mayo-php--bbdd)  
- [Día 7 – Miércoles 8 de mayo: Pruebas, despliegue y documentación](#día-7--miércoles-8-de-mayo-pruebas-despliegue-y-documentación)  
- [Día 8 – Jueves 9 de mayo: Empaquetado y entrega](#día-8--jueves-9-de-mayo-empaquetado-y-entrega)  

---

## Día 1 – Jueves 2 de mayo: Organización + HTML base
- **Calcular tu código** y elegir el concejo asignado (ver Anexo).  
- **Estructura de carpetas**:
Proyecto/
├── estilo/
├── js/
├── multimedia/
├── php/
└── xml/
- **Menú de navegación** en HTML y creación de:
- `index.html`
- `gastronomia.html`
- `ayuda.html`
- `rutas.html`
- `meteorologia.html`
- `juego.html`
- `reservas.php`
- **gastronomia.html**: listas, tabla, imagen y vídeo.  
- **ayuda.html**: explicación del sitio y de sus funcionalidades.

## Día 2 – Viernes 3 de mayo: CSS completo y responsive
- Crear y aplicar **`estilo.css`** (tipografía, colores, botones, etc.).  
- Crear **`layout.css`** con Flexbox / Grid para la maquetación.  
- Añadir **media queries** y pruebas en distintos tamaños de pantalla.  
- Documentar **advertencias CSS** (herencia, redefinición de reglas).

## Día 3 – Sábado 4 de mayo: XML + generación con Python
- Diseñar **`rutas.xml`** con al menos 3 rutas completas y sus hitos.  
- Crear **validador DTD** y **Schema XSD**.  
- Script en **Python** que:
- Genere **KML** (planimetría) y **SVG** (altimetría) desde el XML.  
- Guarde los archivos en la carpeta `xml/`.  
- Probar validación de XML contra **DTD** y **XSD**.

## Día 4 – Domingo 5 de mayo: JavaScript (ECMAScript) + jQuery
- **Carrusel de 5 imágenes** en `index.html` (incluyendo un mapa del concejo).  
- Sección de **noticias** del concejo con jQuery + `fetch` a API pública.  
- En `rutas.html`:
- Leer y mostrar **`rutas.xml`**.  
- Cargar **KML** en un mapa con Google Maps o Leaflet.  
- Cargar **SVG** de altimetría.

## Día 5 – Lunes 6 de mayo: Juego y Meteorología
- **juego.html**:
- Juego de 10 preguntas tipo test sobre el sitio.  
- Mostrar calificación al finalizar.
- **meteorologia.html**:
- Consumo de API de tiempo actual + previsión 7 días (OpenWeatherMap u otra).  
- Mostrar datos con jQuery.

## Día 6 – Martes 7 de mayo: PHP + BBDD
- Diseñar la **base de datos** (mínimo 5 tablas) y crear diagrama E/R.  
- `reservas.php` con funcionalidades para:
- Registro de usuario.  
- Alta de recursos turísticos.  
- Reserva con cálculo de presupuesto.  
- Consulta y anulación de reservas.
- Incluir archivos entregables:
- `BD.sql` (script de creación).  
- `datos.csv` (datos de ejemplo).

## Día 7 – Miércoles 8 de mayo: Pruebas, despliegue y documentación
- **Validar** HTML5 y CSS3 con herramientas W3C (corregir errores y avisos).  
- Pruebas de:
- **Usabilidad**: recoger tiempos con 12 usuarios (hoja Excel).  
- **Accesibilidad**: nivel AAA (Wave, aChecker).  
- **Adaptabilidad**: pruebas en PC, móvil y tablet.  
- **Despliegue** en la nube (Azure, GCP, etc.) y documentar el proceso.  
- Crear:
- `Documentación.pdf` (estructura, decisiones, pruebas y despliegue).  
- `Usabilidad.xlsx` (resultados de las pruebas de usabilidad).

## Día 8 – Jueves 9 de mayo: Empaquetado y entrega
- Revisar que todo funcione y esté en su sitio.  
- Generar archivos finales:
- `UOXXXXX-Codigo.zip`  
- `UOXXXXX-Documentación.pdf`  
- `UOXXXXX-Usabilidad.xlsx`
- Subir al campus virtual.
