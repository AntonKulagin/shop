import { AppContainer } from "@/shared/components/app-container";
import { Separator } from "@/shared/components/ui/separator";

export function Layout({
  logo,
  phone,
  search,
  toggleTheme,
  navigation,
  socials,
}: {
  logo: React.ReactNode;
  phone: React.ReactNode;
  search: React.ReactNode;
  toggleTheme: React.ReactNode;
  navigation: React.ReactNode;
  socials: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div>
        <AppContainer>
          <div className="min-h-12 py-1 flex items-center gap-1 sm:gap-3">
            <div className="flex-1">{logo}</div>
            <div>{search}</div>
            <div>{socials}</div>

            <div>{phone}</div>
            <div>{toggleTheme}</div>
            <div className="block sm:hidden">{navigation}</div>
          </div>
        </AppContainer>
      </div>
      <Separator />
      <div className="hidden sm:block">{navigation}</div>
    </header>
  );
}
