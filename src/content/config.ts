import {
  defineCollection,
  z,
  type Flatten,
  type ImageFunction,
} from "astro:content";

const monthDate = z.object({
  month: z.number().min(1).max(12),
  year: z.number().min(1900).max(2100),
});

const occupation = (image: ImageFunction) =>
  z.object({
    place: z.string(),
    department: z.string().optional(),
    role: z.string(),
    location: z.object({
      city: z.string(),
      country: z.string(),
    }),
    image: image().optional(),
    start: monthDate,
    end: monthDate.optional(),
  });

const educationCollection = defineCollection({
  type: "content",
  schema: ({ image }) => occupation(image),
});

const jobsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => occupation(image),
});

const technologies = {
  python: [
    "Python",
    "Flask",
    "Jupyter",
    "Pandas",
    "NumPy",
    "Pytest",
    "Plotly",
    "Dash",
    "scikit-learn",
    "NLTK",
    "Matplotlib",
    "Transformers",
    "PyTorch",
    "PRAW",
    "NetworkX",
    "Seaborn",
    "SciPy",
  ],
  web: ["JavaScript", "TypeScript", "HTML", "CSS", "EJS"],
  frontFrameworks: [
    "React",
    "React Native",
    "Vue",
    "Svelte",
    "Astro",
    "Angular",
  ],
  backFrameworks: ["Node.js", "Express"],
  databases: ["MongoDB", "Firebase"],
  devops: ["Vercel", "Heroku", "Docker", "Kubernetes", "Vite", "Nx", "Expo"],
  testing: ["Jest", "Cypress", "Vitest"],
  cssLibraries: ["Tailwind CSS", "Emotion", "shadcn", "Material UI"],
  other: [
    "RxJS",
    "D3.js",
    "AG Grid",
    "OpenStreetMap",
    "Leaflet",
    "Chrome Extension",
    "JWT",
    "Phaser",
    "WebSockets",
    "Gephi",
    "Cytoscape",
  ],
  c: ["C", "C++", "OpenGL", "Allegro", "Ncurses"],
  java: ["Java", "Robocode", "Encog", "JGAP"],
  os: ["Linux", "Minix"],
} as const;

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    technology: z.array(
      z.enum([
        ...technologies.python,
        ...technologies.web,
        ...technologies.frontFrameworks,
        ...technologies.backFrameworks,
        ...technologies.databases,
        ...technologies.devops,
        ...technologies.testing,
        ...technologies.cssLibraries,
        ...technologies.other,
        ...technologies.c,
        ...technologies.java,
        ...technologies.os,
      ]),
    ),
    deployed: z.string().url().optional(),
    repo: z.string().url().optional(),
    start: monthDate,
    end: monthDate.optional(),
  }),
});

export const collections = {
  education: educationCollection,
  jobs: jobsCollection,
  projects: projectsCollection,
};
