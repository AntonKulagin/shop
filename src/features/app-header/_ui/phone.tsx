import { formatPhoneNumber } from "@/shared/lib/formatPhoneNumber";
import { getPhone } from "../_repository";
import { Phone as PhoneIcon } from "lucide-react";

export async function Phone() {
  const { phone } = await getPhone();
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <a href={`tel:${phone}`}>
      <div className="hidden sm:block hover:underline">{formattedPhone}</div>
      <div className="block sm:hidden">
        <PhoneIcon className="w-6 h-6" />
      </div>
    </a>
  );
}
