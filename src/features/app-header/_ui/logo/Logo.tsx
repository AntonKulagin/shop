import { getLogos } from "../../_repository";
import { LogoType } from "../../_types";
import { LogoImage } from "./_logo-image";

export async function Logo() {
  const logos: LogoType[] = await getLogos();

  const logo = logos.find((item) => item.title === "logo");
  const logoMini = logos.find((item) => item.title === "logo-mini");

  return (
    <div>
      {logo && !logoMini && (
        <div className="w-24 relative">
          <LogoImage logo={logo} />
        </div>
      )}
      {logo && logoMini && (
        <>
          <div className="hidden sm:block w-28 h-8 relative">
            <LogoImage logo={logo} />
          </div>
          <div className="block sm:hidden w-8 h-8 relative">
            <LogoImage logo={logoMini} />
          </div>
        </>
      )}
    </div>
  );
}
