import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart/CartDrawer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="flex-1 bg-page">{children}</main>
      <Footer />
    </>
  );
}
