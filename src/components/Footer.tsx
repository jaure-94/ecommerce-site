import React from "react";
import Image from "next/image";

export type FooterItem = { label: string; href?: string };
export type FooterSection = { heading: string; items: FooterItem[] };

export interface FooterProps {
  sections?: FooterSection[];
  year?: number;
  regionLabel?: string;
  className?: string;
}

const defaultSections: FooterSection[] = [
  {
    heading: "Featured",
    items: [{ label: "Air Force 1" }, { label: "Huarache" }, { label: "Air Max 90" }, { label: "Air Max 95" }],
  },
  {
    heading: "Shoes",
    items: [{ label: "All Shoes" }, { label: "Custom Shoes" }, { label: "Jordan Shoes" }, { label: "Running Shoes" }],
  },
  {
    heading: "Clothing",
    items: [{ label: "All Clothing" }, { label: "Modest Wear" }, { label: "Hoodies & Pullovers" }, { label: "Shirts & Tops" }],
  },
  {
    heading: "Kids'",
    items: [
      { label: "Infant & Toddler Shoes" },
      { label: "Kids' Shoes" },
      { label: "Kids' Jordan Shoes" },
      { label: "Kids' Basketball Shoes" },
    ],
  },
];

export default function Footer({
  sections = defaultSections,
  year = new Date().getFullYear(),
  regionLabel = "Croatia",
  className,
}: FooterProps) {
  return (
    <footer className={`bg-[--color-dark-900] text-[--color-light-100] ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Brand logo"
              width={64}
              height={24}
              className="invert"
              priority
            />
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
            {sections.map((sec) => (
              <div key={sec.heading}>
                <h4 className="text-[--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
                  {sec.heading}
                </h4>
                <ul className="mt-3 space-y-2">
                  {sec.items.map((it) => (
                    <li key={it.label}>
                      <a
                        href={it.href || "#"}
                        className="text-[--color-light-400] hover:text-[--color-light-100] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-sm"
                      >
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="hidden items-start justify-end gap-4 md:flex">
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--color-light-100] text-[--color-dark-900]"
              >
                <Image src="/x.svg" alt="X" width={18} height={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--color-light-100] text-[--color-dark-900]"
              >
                <Image src="/facebook.svg" alt="Facebook" width={18} height={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--color-light-100] text-[--color-dark-900]"
              >
                <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-6 text-[--color-light-400] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/globe.svg" alt="" aria-hidden width={16} height={16} className="invert" />
            <span className="text-[--text-caption] leading-[--text-caption--line-height]">{regionLabel}</span>
            <span className="text-[--text-caption] leading-[--text-caption--line-height]">© {year} Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[--color-light-100]">Guides</a>
            <a href="#" className="hover:text-[--color-light-100]">Terms of Sale</a>
            <a href="#" className="hover:text-[--color-light-100]">Terms of Use</a>
            <a href="#" className="hover:text-[--color-light-100]">Nike Privacy Policy</a>
          </div>
          <div className="flex items-start justify-end gap-4 md:hidden">
            <a
              href="#"
              aria-label="X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--color-light-100] text-[--color-dark-900]"
            >
              <Image src="/x.svg" alt="X" width={18} height={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--color-light-100] text-[--color-dark-900]"
            >
              <Image src="/facebook.svg" alt="Facebook" width={18} height={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[--color-light-100] text-[--color-dark-900]"
            >
              <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
