# NOVA LEX — Landing Page

Landing page de alto impacto visual para **Nova Lex Estudio Jurídico** (Lima, Perú). Construida con un stack moderno enfocado en animaciones 3D, diseño futurista y experiencia de usuario premium.

![Nova Lex Hero](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.167-black?style=flat&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

---

## Vista previa

| Sección | Descripción |
|---|---|
| **Hero** | Escena 3D con icosaedro cristalino y anillos orbitales en dorado, campo de estrellas WebGL |
| **Áreas de Práctica** | 6 cards con efecto tilt 3D en mouse move y glow dorado en hover |
| **Equipo** | Cards con bio reveal en hover y gradientes únicos por abogado |
| **Testimonios** | Slider animado con 4 casos reales, auto-avance y navegación manual |
| **Contacto** | Formulario con floating labels, info de contacto y badge de urgencias 24/7 |

---

## Stack Tecnológico

### Core

| Tecnología | Versión | Rol |
|---|---|---|
| [React](https://react.dev/) | 18.3 | UI framework — componentes, estado, ciclo de vida |
| [Vite](https://vitejs.dev/) | 5.4 | Build tool y dev server con HMR ultrarrápido |

### 3D & Gráficos

| Tecnología | Versión | Rol |
|---|---|---|
| [Three.js](https://threejs.org/) | 0.167 | Motor 3D WebGL — geometrías, materiales, luces |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 8.17 | Wrapper React declarativo para Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | 9.109 | Helpers y abstracciones: `Float`, `Stars`, `Sparkles`, `MeshDistortMaterial` |
| [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) | 2.16 | Post-processing pipeline para efectos de bloom y glow |

### Animación

| Tecnología | Versión | Rol |
|---|---|---|
| [Framer Motion](https://www.framer.com/motion/) | 11.3 | Animaciones declarativas: entradas stagger, `AnimatePresence`, transiciones de página |
| [GSAP](https://gsap.com/) | 3.12 | Animaciones imperativas de alta precisión (scroll indicator, trayectorias) |

### Estilos

| Tecnología | Versión | Rol |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Sistema de diseño utility-first con paleta personalizada |
| [PostCSS](https://postcss.org/) | 8.4 | Procesador CSS — autoprefixer incluido |
| Google Fonts | — | `Cormorant Garamond` (serif), `Space Grotesk` (sans), `Inter` (body) |

### Utilidades

| Tecnología | Versión | Rol |
|---|---|---|
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | 9.13 | Detección de visibilidad para animaciones on-scroll |

---

## Paleta de Colores — "Cosmos Jurídico"

```
Fondo principal  #07070E  — cosmos-black
Fondo profundo   #0D0D1A  — cosmos-deep
Superficie       #111122  — cosmos-surface
Cards            #141428  — cosmos-card

Dorado principal #C9962A  — gold
Dorado claro     #D4AF61  — gold-light
Dorado brillante #E8C96A  — gold-bright
Dorado pálido    #F0E0A8  — gold-pale

Plateado         #C8C8D8  — silver
Texto principal  #F2EFE9  — silver-light
Azul real        #1B3A5C  — royal
```

---

## Tipografía

| Fuente | Uso | Pesos |
|---|---|---|
| **Cormorant Garamond** | Titulares (`font-serif`) | 300, 400, 500, 600, 700 |
| **Space Grotesk** | UI, botones, badges (`font-sans`) | 300, 400, 500, 600, 700 |
| **Inter** | Cuerpo de texto (`font-body`) | 300, 400, 500, 600 |

---

## Arquitectura del Proyecto

```
nova_lex/
├── public/
│   └── favicon.svg              # Ícono geométrico dorado SVG
├── src/
│   ├── components/
│   │   ├── HeroScene.jsx        # Escena Three.js (3D, luces, partículas)
│   │   ├── Hero.jsx             # Sección hero con texto y CTAs
│   │   ├── Navbar.jsx           # Navegación fija con blur on-scroll
│   │   ├── PracticeAreas.jsx    # Grid de áreas legales con tilt 3D
│   │   ├── Team.jsx             # Cards del equipo con hover bio
│   │   ├── Testimonials.jsx     # Slider de testimonios animado
│   │   ├── Contact.jsx          # Formulario con floating labels
│   │   └── Footer.jsx           # Footer con links y estado del estudio
│   ├── App.jsx                  # Composición de secciones
│   ├── main.jsx                 # Entry point React
│   └── index.css                # Estilos globales + utilidades custom
├── .claude/
│   └── launch.json              # Config de preview para Claude Code
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## Requisitos Previos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

---

## Instalación y Uso

### Clonar el repositorio

```bash
git clone https://github.com/luis2892/nova_lex.git
cd nova_lex
```

### Instalar dependencias

```bash
npm install
```

### Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Generar build de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

### Previsualizar el build

```bash
npm run preview
```

---

## Características Técnicas Destacadas

### Escena 3D (HeroScene.jsx)
- **Icosaedro cristalino** con material metálico dorado y `MeshDistortMaterial` animado
- **3 anillos orbitales** con rotaciones independientes en ejes X/Y/Z
- **Sistema de partículas** distribuidas en esfera con rotación suave
- **Campo de estrellas** Three.js con 3,000 puntos y efecto fade
- **Sparkles** dorados con animación de brillo
- **5 fuentes de luz** posicionadas estratégicamente (point lights + spot light)

### Animaciones de Scroll
- Todas las secciones usan `useInView` de Framer Motion con umbral `-80px` para activar antes de entrar al viewport
- Efectos stagger: cada card se anima con un delay incremental de `80ms`
- Animaciones de entrada: `opacity 0→1` + `translateY 50px→0` con easing `[0.22, 1, 0.36, 1]` (ease-out exponencial)

### Tilt 3D en Cards (PracticeAreas)
- Cálculo de ángulo en tiempo real con `mousemove` sobre el bounding rect del card
- `perspective(800px) rotateX() rotateY()` aplicado via inline style
- Box shadow dinámica que sigue la dirección del mouse
- Reset suave al salir del área

### Navbar Adaptiva
- Transparente en el top → `backdrop-blur-md` + borde dorado sutil al hacer scroll
- Detección de scroll con event listener y `useState`
- Menú móvil con `AnimatePresence` para animación de entrada/salida
- Links con `animated-underline` via pseudo-elemento CSS

---

## Contribuciones

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feature/nueva-seccion`
3. Commitea tus cambios: `git commit -m 'feat: descripción del cambio'`
4. Push a la rama: `git push origin feature/nueva-seccion`
5. Abre un Pull Request

---

## Licencia

MIT © 2025 Nova Lex Estudio Jurídico — Lima, Perú
