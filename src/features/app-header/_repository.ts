import { cmsProvider } from "@/shared/api/cms.provider";
import { z } from "zod";

const logosSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    image: z.object({
      id: z.number(),
      name: z.string(),
      url: z.string(),
      width: z.number(),
      height: z.number(),
    }),
  })
  .array();

const phoneSchema = z.object({
  id: z.number(),
  phone: z.string(),
});

export async function getLogos() {
  const logos = await cmsProvider.get("/api/logos?populate=*");
  return logosSchema.parse(logos);
}

export async function getPhone() {
  const phone = await cmsProvider.get("/api/phone?populate=*");
  return phoneSchema.parse(phone);
}
