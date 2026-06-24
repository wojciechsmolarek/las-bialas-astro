import { defineCollection, z } from 'astro:content';

const localeRecord = z.object({
  pl: z.string(),
  en: z.string(),
  de: z.string()
});

const topBoxesData = z.object({
  availabilityBlock: z.string(),
  summerBlock: z.string(),
  amenitiesBlock: z.string()
});

const site = defineCollection({
  type: 'data',
  schema: z.object({
    promoBar: z.object({
      enabled: z.boolean(),
      messages: localeRecord
    }),
    availability: z.object({
      block: localeRecord
    }),
    topBoxes: z.object({
      pl: topBoxesData,
      en: topBoxesData,
      de: topBoxesData
    })
  })
});

export const collections = { site };
