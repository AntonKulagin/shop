import { ToggleTheme } from "../theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo/Logo";
import { Navigation } from "./_ui/navigation";
import { Phone } from "./_ui/phone";
import { Search } from "./_ui/search";
import { Socials } from "./_ui/socials";

export function AppHeader() {
  return (
    <Layout
      logo={<Logo />}
      phone={<Phone />}
      search={<Search />}
      toggleTheme={<ToggleTheme />}
      navigation={<Navigation />}
      socials={<Socials />}
    />
  );
}
