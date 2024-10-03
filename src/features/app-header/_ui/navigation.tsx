import { AppContainer } from "@/shared/components/app-container";
import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/shared/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <div>
      <div className="block  sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-0 md:hidden">
              <MenuIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col  items-center gap-2 text-xl ">
              <Link href="/">Главная</Link>
              <Link href="/about">О нас</Link>
              <Link href="/contacts">Контакты</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/catalog">Каталог</Link>
              <Link href="/blog">Блог</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="bg-gray-800 text-white py-1 hidden sm:block">
        <AppContainer>
          <nav className="flex items-center justify-between flex-wrap gap-2 ">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/contacts">Контакты</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/blog">Блог</Link>
          </nav>
        </AppContainer>
      </div>
    </div>
  );
}
