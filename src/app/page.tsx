import { AppHeader } from "@/features/app-header/app-header";
import { AppContainer } from "@/shared/components/app-container";

export default function Home() {
  return (
    <main>
      <AppHeader />
      <AppContainer>
        <p>Главная страница</p>
      </AppContainer>
    </main>
  );
}
