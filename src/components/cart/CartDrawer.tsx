"use client";

import { useEffect, useRef } from "react";

import { useCartStore } from "@/store/cart";
import { CartDrawerHeader } from "./CartDrawerHeader";
import { CartDrawerItem } from "./CartDrawerItem";
import { CartDrawerFooter } from "./CartDrawerFooter";
import { EmptyCart } from "./EmptyCart";

export function CartDrawer() {
  const { items, isOpen, closeDrawer, total } = useCartStore();
  const drawerRef = useRef<HTMLDivElement>(null);
  const itemCount = items.length;

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeDrawer]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`absolute right-0 top-0 flex h-full flex-col bg-white shadow-[-10px_0_40px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out max-md:w-full max-md:rounded-none md:w-[460px] md:rounded-l-2xl lg:w-[520px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderRadius: "0" }}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex h-full flex-col">
          <CartDrawerHeader itemCount={itemCount} />

          {itemCount === 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id}>
                  <CartDrawerItem item={item} />
                  <div className="mx-6 border-b border-[#ECECEC]" />
                </div>
              ))}
            </div>
          )}

          {itemCount > 0 && <CartDrawerFooter total={total()} />}
        </div>
      </div>
    </div>
  );
}
