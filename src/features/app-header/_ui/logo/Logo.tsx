import { Skeleton } from "@/shared/components/ui/skeleton";
import { getLogos } from "../../_repository";
import { LogoImage } from "./_logo-image";

export async function Logo() {
  const logos = await getLogos();

  const logo = logos.find((item) => item.title === "logo");
  const logoMini = logos.find((item) => item.title === "logo-mini");

  if (!logo && !logoMini) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="h-8 w-20 hidden sm:block " />
      </div>
    );
  }

  return (
    <div>
      {logo && !logoMini && <LogoImage logo={logo} width={112} height={32} />}
      {!logo && logoMini && (
        <LogoImage logo={logoMini} width={32} height={32} />
      )}
      {logo && logoMini && (
        <>
          <div className="hidden sm:block">
            <LogoImage logo={logo} width={112} height={32} />
          </div>
          <div className="block sm:hidden">
            <LogoImage logo={logoMini} width={32} height={32} />
          </div>
        </>
      )}
    </div>
  );
}
