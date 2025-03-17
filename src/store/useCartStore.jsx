import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => {
    set({ cartItems: [] });
  },

  totalItems: () => {
    return useCartStore
      .getState()
      .cartItems.reduce((total, item) => total + item.quantity, 0);
  },
}));
