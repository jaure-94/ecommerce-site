import React from "react";
import Image from "next/image";
import Link from "next/link";

type BadgeTone = "orange" | "green" | "red";

export interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  price?: string | number;
  badge?: { label: string; tone?: BadgeTone };
  href?: string;
  className?: string;
}

const toneMap: Record<BadgeTone, { bg: string; fg: string }> = {
  orange: { bg: "bg-[--color-orange]/10", fg: "text-[--color-orange]" },
  green: { bg: "bg-[--color-green]/10", fg: "text-[--color-green]" },
  red: { bg: "bg-[--color-red]/10", fg: "text-[--color-red]" },
};

export default function Card({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  meta,
  price,
  badge,
  href,
  className,
}: CardProps) {
  const content = (
    <div
      className={`group relative overflow-hidden rounded-xl bg-[--color-light-100] shadow-sm transition hover:shadow-md ${className || ""}`}
    >
      {badge ? (
        <div
          className={`absolute left-4 top-4 z-10 ${toneMap[badge.tone || "orange"].bg} ${toneMap[badge.tone || "orange"].fg} rounded-full px-4 py-1 text-[--text-caption] leading-[--text-caption--line-height] font-[--text-caption--font-weight]`}
        >
          {badge.label}
        </div>
      ) : null}

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-300 md:group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="bg-[--color-dark-900] px-4 py-4 text-[--color-light-100]">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-[--text-heading-3] leading-[--text-heading-3--line-height] font-semibold">
              {title}
            </h3>
            {subtitle ? (
              <p className="mt-1 truncate text-[--text-body] leading-[--text-body--line-height] text-[--color-light-400]">
                {subtitle}
              </p>
            ) : null}
            {meta ? (
              <p className="mt-1 truncate text-[--text-body] leading-[--text-body--line-height] text-[--color-light-400]">
                {meta}
              </p>
            ) : null}
          </div>
          {price !== undefined ? (
            <div className="shrink-0 text-right text-[--text-heading-3] leading-[--text-heading-3--line-height] font-semibold">
              {typeof price === "number" ? `$${price.toFixed(2)}` : price}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
