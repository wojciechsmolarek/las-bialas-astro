import { defineCollection, z } from 'astro:content';

const siteConfig = defineCollection({
  type: 'data',
  schema: z.object({
    promoBar: z.object({
      enabled: z.boolean(),
      messages: z.object({
        pl: z.string(),
        en: z.string(),
        de: z.string()
      })
    }),
    availability: z.object({
      nextAvailable: z.object({
        dates: z.string(),
        cabin: z.object({
          pl: z.string(),
          en: z.string(),
          de: z.string()
        }),
        discountCode: z.string().optional()
      }),
      summerSlots: z.object({
        july: z.array(z.string()),
        august: z.array(z.string())
      })
    }),
    contact: z.object({
      phone: z.string(),
      whatsapp: z.string(),
      email: z.string(),
      instagram: z.string()
    })
  })
});

export const collections = {
  site: siteConfig
};
