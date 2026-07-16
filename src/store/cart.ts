import { create } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  originalPrice: number;
  discountPercentage?: number;
  finalPrice: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
  addItem: (item) =>
    set((state) => {
      const exists = state.items.find((i) => i.id === item.id);
      if (exists) return state;
      return { items: [...state.items, item] };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  clearCart: () => set({ items: [] }),
  total: () => get().items.reduce((sum, item) => sum + item.finalPrice, 0),
}));
