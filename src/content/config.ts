import {
  defineCollection,
  reference,
  z,
  type ImageFunction,
} from "astro:content";

const monthDate = z.object({
  month: z.number().min(1).max(12),
  year: z.number().min(1900).max(2100),
});

const period = z.object({
  start: monthDate,
  end: monthDate.optional(),
});

const location = z.object({
  city: z.string(),
  country: z.string(),
});

const imageObject = (image: ImageFunction) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

const educationCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      school: z.string(),
      degree: z.string(),
      faculty: z.string(),
      logo: imageObject(image),
      location: location,
      periods: z.array(period).nonempty(),
      grade: z.string(),
      descriptionReference: z
        .object({
          cv: reference("descriptions"),
          page: reference("descriptions"),
        })
        .optional(),
    }),
});

const jobsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      group: z.string(),
      role: z.string(),
      location: location,
      logo: imageObject(image),
      periods: z.array(period).nonempty(),
      descriptionReference: z.object({
        cv: reference("descriptions"),
        page: reference("descriptions"),
      }),
    }),
});

export const technologies = [
  // Python
  "Python",
  "Flask",
  "Jupyter",
  "pandas",
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
  // Web
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "EJS",
  "Sass",
  // Front-end frameworks
  "React",
  "React Native",
  "Vue",
  "Svelte",
  "Astro",
  "Angular",
  // State management
  "TanStack Query",
  // Back-end frameworks
  "Node.js",
  "Express",
  "tRPC",
  // Databases:
  "MongoDB",
  "Firestore",
  "IndexedDB",
  "Drizzle",
  "PostgreSQL",
  // Devops:
  "Vercel",
  "Heroku",
  "Docker",
  "Kubernetes",
  "Vite",
  "Nx",
  "Expo",
  // Testing:
  "Jest",
  "Cypress",
  "Vitest",
  // CSS libraries:
  "Tailwind CSS",
  "Emotion",
  "shadcn",
  "MUI",
  "Angular Material",
  // Other:
  "Git",
  "Gerrit",
  "RxJS",
  "D3.js",
  "AG Grid",
  "OpenStreetMap",
  "Leaflet",
  "Chrome Extensions",
  "JWT",
  "Phaser",
  "WebSockets",
  "Gephi",
  "Cytoscape",
  "Zod",
  // C
  "C",
  "C++",
  "OpenGL",
  "Allegro",
  "Ncurses",
  // Java
  "Java",
  "Robocode",
  "Encog",
  "JGAP",
  // OS
  "Linux",
  "Minix",
] as const;

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      technology: z.array(z.enum(technologies)),
      deployed: z.string().url().optional(),
      repo: z.string().url().optional(),
      periods: z.array(period).nonempty(),
      description: z.string(),
      shortDescription: z.string().optional(),
      image: imageObject(image).optional(),
    }),
});

const descriptionsCollection = defineCollection({ type: "content" });

export const collections = {
  education: educationCollection,
  jobs: jobsCollection,
  projects: projectsCollection,
  descriptions: descriptionsCollection,
};

export type MonthDate = z.infer<typeof monthDate>;
export type Location = z.infer<typeof location>;
export type Technology = (typeof technologies)[number];
export type ImageObject = z.infer<ReturnType<typeof imageObject>>;
export type Period = z.infer<typeof period>;
