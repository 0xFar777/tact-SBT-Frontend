import { create } from "zustand"

export const useCartStore = create((set) => ({
 cart: 0,
 add: () => set((state) => ({ cart: state.cart + 1 })),
 remove: () => set((state) => ({ cart: state.cart - 1 })),
 removeAll: () => set({ cart: 0 }),
}))
