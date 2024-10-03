import { InstagramIcon } from "@/shared/components/ui/instagram-icon";
import { TelegramIcon } from "@/shared/components/ui/telegram-icon";
import { VkIcon } from "@/shared/components/ui/vk-icon";

export function Socials() {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <div className="w-8 h-8">
        <a href="https://vk.com" target="blank">
          <VkIcon className="w-full h-full" />
        </a>
      </div>
      <div className="w-8 h-8">
        <a href="https://telegram.me" target="blank">
          <TelegramIcon className="w-full h-full" />
        </a>
      </div>
      <div className="w-8 h-8">
        <a href="https://instagram.com" target="blank">
          <InstagramIcon className="w-full h-full" />
        </a>
      </div>
    </div>
  );
}
