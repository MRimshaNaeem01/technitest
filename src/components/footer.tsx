import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import {
  footerCategories,
  footerQuickLinks,
  siteContact,
} from "@/config/site";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-text">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div className="space-y-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/technitest-logo-light.png"
              alt="Technitest"
              width={165}
              height={48}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>
            <p className="text-sm leading-relaxed text-footer-muted">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form className="flex items-center gap-2 border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
              />
              <button type="submit" aria-label="Subscribe">
                <Send className="size-4 text-white" />
              </button>
            </form>

            <p className="text-xs leading-relaxed text-footer-muted">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link href="#" aria-label="Facebook" className="hover:text-brand">
                <FaFacebook className="size-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-brand">
                <FaTwitter className="size-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-brand">
                <FaLinkedin className="size-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-brand">
                <FaInstagram className="size-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {footerCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="/categories"
                    className="text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-footer-muted">
              <li>{siteContact.address}</li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a href={`tel:${siteContact.phone}`} className="hover:text-white">
                  {siteContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a href={`mailto:${siteContact.email}`} className="hover:text-white">
                  {siteContact.email}
                </a>
              </li>
            </ul>
            <Link
              href="/report-problem"
              className="mt-4 inline-block text-sm underline hover:text-white"
            >
              Report a Problem?
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4 text-center text-sm text-footer-muted">
        © 2025 by Technitest. All rights reserved.
      </div>
    </footer>
  );
}
