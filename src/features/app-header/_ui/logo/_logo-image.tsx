"use client";

import Link from "next/link";
import { LogoType } from "../../_types";
import Image from "next/image";

export function LogoImage({
  logo,
  width,
  height,
}: {
  logo: LogoType;
  width: number;
  height: number;
}) {
  return (
    <div className="relative" style={{ width, height }}>
      <Link href="/" className="relative">
        <Image
          src={logo.image.url}
          alt={logo.title}
          width={logo.image.width}
          height={logo.image.height}
          className="object-contain"
        />
      </Link>
    </div>
  );
}
