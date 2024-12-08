
import * as React from "react";
import { IconProps } from "./types";
import Link from "next/link";
import Image from "next/image";  

export const Icon: React.FC<IconProps> = ({ src, alt, className, link }) => (
  <div>
    {link ? (
      <Link href={link}>
        <Image
          loading="lazy"
          src={src}
          alt={alt}
          height={6}
          width={6}
          className={`object-contain shrink-0 aspect-square ${className}`}
        />
      </Link>
    ) : (
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        height={6}
        width={6}
        className={`object-contain shrink-0 aspect-square ${className}`}
      />
    )}
  </div>
);
