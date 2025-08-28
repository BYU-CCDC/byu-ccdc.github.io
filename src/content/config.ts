import type { Testimonial } from "@/components/Testimonial.astro";
import type { Section } from "@/components/core/Section.astro";
import type { LinkButton, PageType } from "@/content/page.types";
import { defineCollection, z } from "astro:content";

const zodPageConfig = z.custom<PageType>();

// Pages collection schema
const pagesCollection = defineCollection({
  type: "content",
  schema: zodPageConfig,
});

const indexSchema = z.intersection(
  z.object({
    banner: z.custom<Section>(),
  }),
  zodPageConfig,
);

const indexPage = defineCollection({
  type: "content",
  schema: indexSchema,
});

// Export collections
export const collections = {
  homepage: indexPage,
  competitions: pagesCollection,
  resources: pagesCollection,
  about: pagesCollection,
  contact: pagesCollection,
};


