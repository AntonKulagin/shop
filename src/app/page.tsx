import { AppCarousel } from "@/features/app-carousel/app-carousel";
import { AppHeader } from "@/features/app-header/app-header";

export default function Home() {
  return (
    <main>
      <AppHeader />
      <AppCarousel />

      <p>Главная страница</p>
    </main>
  );
}
