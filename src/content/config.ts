import { defineCollection, z } from "astro:content";

const monthDate = z.object({
  month: z.number().min(1).max(12),
  year: z.number().min(1900).max(2100),
});

const occupation = z.object({
  place: z.string(),
  department: z.string().optional(),
  role: z.string(),
  location: z.object({
    city: z.string(),
    country: z.string(),
  }),
  start: monthDate,
  end: monthDate.optional(),
});

const educationCollection = defineCollection({
  type: "content",
  schema: occupation,
});

const jobsCollection = defineCollection({
  type: "content",
  schema: occupation,
});

export const collections = {
  education: educationCollection,
  jobs: jobsCollection,
};

export type Occupation = z.infer<typeof occupation>;
