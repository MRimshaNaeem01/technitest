"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, ExternalLink, ShoppingBag } from "lucide-react";

import { AppButton } from "@/components/common/app-button";
import { Container } from "@/components/common/container";
import { NavLink } from "@/components/common/nav-link";
import { mainNavLinks } from "@/config/site";
import { useCartStore } from "@/store/cart";

export function Header() {
  const openDrawer = useCartStore((s) => s.openDrawer);
  const itemCount = useCartStore((s) => s.items.length);

  return (
    <header className="sticky top-0 py-5 z-50 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/technitest_logo.png"
              alt="Technitest"
              width={165}
              height={48}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {mainNavLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <div className="hidden h-8 w-px bg-border md:block" />

            <Link
              href="/verify-certificate"
              className="hidden items-center gap-1 text-sm font-medium text-brand-link hover:underline md:flex"
            >
              Verify Certificate
              <ExternalLink className="size-3.5" />
            </Link>

            <button
              type="button"
              aria-label="Shopping cart"
              className="relative"
              onClick={openDrawer}
            >
              <ShoppingBag className="size-5 stroke-[1.7]" />
              {itemCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className="relative"
            >
              <Bell className="size-5 stroke-[1.7]" />
              <span className="absolute right-0 top-0 size-2 rounded-full bg-brand" />
            </button>

            <AppButton
              href="/login"
              className="rounded-full px-7"
              size="sm"
            >
              Login/Signup
            </AppButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
