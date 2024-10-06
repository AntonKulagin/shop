import { cmsProvider } from "@/shared/api/cms.provider";
import { z } from "zod";

const bannerSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    text: z.string(),
    image: z.object({
      id: z.number(),
      name: z.string(),
      url: z.string(),
      width: z.number(),
      height: z.number(),
    }),
  })
  .array();

export async function getBanners() {
  const banners = await cmsProvider.get("/api/banners?populate=*");
  return bannerSchema.parse(banners);
}
