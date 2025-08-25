'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type NavLink = {
  label: string;
  href?: string;
};

export interface NavbarProps {
  links?: NavLink[];
  cartCount?: number;
  className?: string;
  onMenuToggle?: (open: boolean) => void;
}

const defaultLinks: NavLink[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar({
  links = defaultLinks,
  cartCount = 0,
  className,
  onMenuToggle,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    onMenuToggle?.(next);
  };

  return (
    <header
      className={`w-full border-b border-[--color-light-300] bg-[--color-light-100] ${className || ""}`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Brand logo"
              width={64}
              height={24}
              className="h-6 w-auto sm:h-7"
              priority
            />
          </Link>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href || "#"}
                className="text-[--color-dark-900] text-[--text-body] leading-[--text-body--line-height] font-[--text-body--font-weight] hover:text-[--color-dark-700] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]/20 rounded-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <span className="text-[--color-dark-900] text-[--text-body] leading-[--text-body--line-height]">
            Search
          </span>
          <span className="text-[--color-dark-900] text-[--text-body] leading-[--text-body--line-height]">
            My Cart ({cartCount})
          </span>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggle}
            className="inline-flex items-center justify-center rounded-md p-2 text-[--color-dark-900] outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]/20"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-[--color-light-300] bg-[--color-light-100]`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[--color-dark-900]">Search</span>
              <span className="text-[--color-dark-900]">My Cart ({cartCount})</span>
            </div>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href || "#"}
                    className="block rounded-md px-1 py-2 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]/20"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
