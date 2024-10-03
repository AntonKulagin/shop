import { Input } from "@/shared/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { Search as SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="">
      <div className="block [@media(min-width:800px)]:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SearchIcon className="h-7 w-7 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen">
            <div className="relative p-2">
              <SearchIcon className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-8 h-8 w-full rounded-md"
                placeholder="Поиск..."
                type="search"
                autoFocus
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative hidden [@media(min-width:800px)]:block">
        <SearchIcon className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-8 h-8 lg:w-[500px] md:w-[400px] [@media(max-width:900px)]:w-[300px] rounded-md"
          placeholder="Поиск..."
          type="search"
        />
      </div>
    </div>
  );
}
