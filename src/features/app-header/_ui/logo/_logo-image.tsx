"use client";

import Image from "next/image";
import Link from "next/link";
import { LogoType } from "../../_types";

export function LogoImage({ logo }: { logo: LogoType }) {
  return (
    <Link href={"/"} className="absolute w-full h-full left-0 top-0">
      <Image
        src={logo.image.url}
        className="absolute w-full h-full left-0 top-0 object-cover"
        fill
        alt={`${logo.title}`}
      />
    </Link>
  );
}
