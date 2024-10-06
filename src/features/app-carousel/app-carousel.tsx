import { CarouselView } from "./_carousel-view";
import { getBanners } from "./_repository";

export async function AppCarousel() {
  const banners = await getBanners();

  return <CarouselView content={banners} />;
}
