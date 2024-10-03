import { cmsProvider } from "@/shared/api/cms.provider";

export async function getLogos() {
  return await cmsProvider.get("/api/logos?populate=*");
}

export async function getPhone() {
  return await cmsProvider.get("/api/phone");
}
