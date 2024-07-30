import type { Technology } from "@content/config";

// https://badges.pages.dev/

// prettier-ignore
export const badgesLinks = {
  Python: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=flat-square",
  Flask: "https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff&style=flat-square",
  Jupyter: "https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=fff&style=flat-square",
  pandas: "https://img.shields.io/badge/pandas-150458?logo=pandas&logoColor=fff&style=flat-square",
  NumPy: "https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=fff&style=flat-square",
  Pytest: "https://img.shields.io/badge/Pytest-0A9EDC?logo=pytest&logoColor=fff&style=flat-square",
  Plotly: "https://img.shields.io/badge/Plotly-3F4F75?logo=plotly&logoColor=fff&style=flat-square",
  Dash: "https://img.shields.io/badge/Dash-008DE4?logo=dash&logoColor=fff&style=flat-square",
  "scikit-learn": "https://img.shields.io/badge/scikit--learn-F7931E?logo=scikitlearn&logoColor=fff&style=flat-square",
  NLTK: "https://img.shields.io/badge/NLTK-333?logo=nltk&logoColor=fff&style=flat-square", // no logo
  Matplotlib: "https://img.shields.io/badge/Matplotlib-11557C?logo=matplotlib&logoColor=fff&style=flat-square",
  Transformers: "https://img.shields.io/badge/Transformers-FFAC45?logo=huggingface&logoColor=fff&style=flat-square",
  PyTorch: "https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=fff&style=flat-square",
  PRAW: "https://img.shields.io/badge/PRAW-FF4500?logo=reddit&logoColor=fff&style=flat-square",
  NetworkX: "https://img.shields.io/badge/NetworkX-4A4A4A?logo=networkx&logoColor=fff&style=flat-square", // no logo
  Seaborn: "https://img.shields.io/badge/Seaborn-7DB0BC?logo=seaborn&logoColor=fff&style=flat-square", // no logo
  SciPy: "https://img.shields.io/badge/SciPy-8CAAE6?logo=scipy&logoColor=fff&style=flat-square",
  JavaScript: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square",
  TypeScript: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square",
  HTML: "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat-square",
  CSS: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square",
  EJS: "https://img.shields.io/badge/EJS-B4CA65?logo=ejs&logoColor=fff&style=flat-square",
  React: "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square",
  "React Native": "https://img.shields.io/badge/React%20Native-61DAFB?logo=react&logoColor=000&style=flat-square",
  Vue: "https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=flat-square",
  Svelte: "https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff&style=flat-square",
  Astro: "https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat-square",
  Angular: "https://img.shields.io/badge/Angular-0F0F11?logo=angular&logoColor=fff&style=flat-square",
  "Node.js": "https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=flat-square",
  Express: "https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square",
  MongoDB: "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat-square",
  Firestore: "https://img.shields.io/badge/Firestore-DD2C00?logo=firebase&logoColor=fff&style=flat-square",
  Vercel: "https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat-square",
  Heroku: "https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=fff&style=flat-square",
  Docker: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat-square",
  Kubernetes: "https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=fff&style=flat-square",
  Vite: "https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat-square",
  Nx: "https://img.shields.io/badge/Nx-143055?logo=nx&logoColor=fff&style=flat-square",
  Expo: "https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=fff&style=flat-square",
  Jest: "https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat-square",
  Cypress: "https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=flat-square",
  Vitest: "https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=flat-square",
  "Tailwind CSS": "https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square",
  Emotion: "https://img.shields.io/badge/Emotion-DB7093?logo=emotion&logoColor=fff&style=flat-square", // no logo
  shadcn: "https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=flat-square",
  MUI: "https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=fff&style=flat-square",
  RxJS: "https://img.shields.io/badge/RxJS-%23B7178C.svg?style=flat-square&logo=reactivex&logoColor=white",
  "D3.js": "https://img.shields.io/badge/D3.js-F9A03C?logo=d3dotjs&logoColor=fff&style=flat-square",
  "AG Grid": "https://img.shields.io/badge/AG%20Grid-000?logo=ag-grid&logoColor=fff&style=flat-square", // no logo
  OpenStreetMap: "https://img.shields.io/badge/OpenStreetMap-7EBC6F?logo=openstreetmap&logoColor=fff&style=flat-square",
  Leaflet: "https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff&style=flat-square",
  "Chrome Extensions": "https://img.shields.io/badge/Chrome%20Extensions-4285F4?logo=chromewebstore&logoColor=fff&style=flat-square",
  JWT: "https://img.shields.io/badge/JWT-000?logo=jsonwebtokens&logoColor=fff&style=flat-square",
  Phaser: "https://img.shields.io/badge/Phaser-8320B5?logo=phaser&logoColor=fff&style=flat-square",
  WebSockets: "https://img.shields.io/badge/WebSockets-000?logo=websocket&logoColor=fff&style=flat-square", // no logo
  Gephi: "https://img.shields.io/badge/Gephi-000?logo=gephi&logoColor=fff&style=flat-square", // no logo
  Cytoscape: "https://img.shields.io/badge/Cytoscape.js-F7DF1E?logo=cytoscapedotjs&logoColor=000&style=flat-square",
  C: "https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=fff&style=flat-square",
  "C++": "https://img.shields.io/badge/C%2B%2B-00599C?logo=cplusplus&logoColor=fff&style=flat-square",
  OpenGL: "https://img.shields.io/badge/OpenGL-5586A4?logo=opengl&logoColor=fff&style=flat-square",
  Allegro: "https://img.shields.io/badge/Allegro-FFCC44?&style=flat-square", // no logo
  Ncurses: "https://img.shields.io/badge/Ncurses-555?logo=ncurses&logoColor=fff&style=flat-square", // no logo
  Java: "https://img.shields.io/badge/Java-007396?logo=java&logoColor=fff&style=flat-square", // no logo
  Robocode: "https://img.shields.io/badge/Robocode-000?logo=robocode&logoColor=fff&style=flat-square", // no logo
  Encog: "https://img.shields.io/badge/Encog-000?logo=encog&logoColor=fff&style=flat-square", // no logo
  JGAP: "https://img.shields.io/badge/JGAP-000?logo=jgap&logoColor=fff&style=flat-square", // no logo
  Linux: "https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=000&style=flat-square",
  Minix: "https://img.shields.io/badge/Minix-000?logo=minix&logoColor=fff&style=flat-square", // no logo
  Git: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat-square",
  Gerrit: "https://img.shields.io/badge/Gerrit-EEE?logo=gerrit&logoColor=000&style=flat-square",
  Sass: "https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat-square",
} as const satisfies { [key in Technology]: string };
