import Link from "next/link";
import { Bell, ExternalLink, ShoppingBag } from "lucide-react";

import { AppButton } from "@/components/common/app-button";
import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { NavLink } from "@/components/common/nav-link";
import { mainNavLinks } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
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
              className="relative text-foreground hover:text-brand"
            >
              <ShoppingBag className="size-5" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                0
              </span>
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className="relative text-foreground hover:text-brand"
            >
              <Bell className="size-5" strokeWidth={1.5} />
              <span className="absolute top-0 right-0 size-2 rounded-full bg-brand" />
            </button>

            <AppButton href="/login" size="sm">
              Login/Signup
            </AppButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
