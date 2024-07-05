import { defineCollection, z, type ImageFunction } from "astro:content";

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

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    technology: z.array(
      z.enum([
        "React",
        "Vue",
        "Svelte",
        "Astro",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Vercel",
        "Heroku",
        "Docker",
        "Kubernetes",
        "Jest",
        "Cypress",
        "Vite",
        "Vitest",
        "Python",
        "Flask",
        "WebSockets",
        "Chrome Extension",
        "JWT",
        "RxJS",
        "Emotion",
        "shadcn",
        "Material UI",
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
