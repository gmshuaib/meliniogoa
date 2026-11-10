import { create } from 'zustand';

export type ColorScheme = 'slate' | 'amber' | 'emerald' | 'indigo' | 'rose' | 'violet';
export type ViewState = 'home' | 'shop' | 'detail' | 'admin' | 'product' | 'dashboard';
export type HeroVariant = 'minimal' | 'bold' | 'split' | 'editorial';

export const SCHEME_MAP: Record<ColorScheme, { primary: string; light: string; glow: string }> = {
    slate: { primary: '#334155', light: 'rgba(51,65,85,0.05)', glow: 'rgba(51,65,85,0.1)' },
    amber: { primary: '#D97706', light: 'rgba(217,119,6,0.1)', glow: 'rgba(217,119,6,0.3)' },
    emerald: { primary: '#059669', light: 'rgba(5,150,105,0.1)', glow: 'rgba(5,150,105,0.3)' },
    indigo: { primary: '#4F46E5', light: 'rgba(79,70,229,0.1)', glow: 'rgba(79,70,229,0.3)' },
    rose: { primary: '#E11D48', light: 'rgba(225,29,72,0.1)', glow: 'rgba(225,29,72,0.3)' },
    violet: { primary: '#7C3AED', light: 'rgba(124,58,237,0.1)', glow: 'rgba(124,58,237,0.3)' },
};

export const MAIN_COLLECTION = [
    {
        id: 'p1',
        name: 'Aurelius Chronograph',
        description: 'Titanium grade 5 casing with solar-powered movement.',
        price: 2450,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'],
        category: 'Timepieces',
        stock: 12,
        rating: 4.9,
        featured: true,
        tags: ['Luxury', 'Titanium']
    },
    {
        id: 'p2',
        name: 'Essential Cotton Tee',
        description: 'Premium organic cotton with a perfect relaxed fit.',
        price: 45,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'],
        category: 'Apparel',
        stock: 100,
        rating: 4.8,
        tags: ['Organic', 'Minimal']
    }
];

export interface EcommerceState {
    products: any[];
    orders: any[];
    cart: any[];
    isDarkMode: boolean;
    colorScheme: ColorScheme;
    currentView: ViewState;
    selectedProduct: any | null;
    isCartOpen: boolean;
    addToCart: (product: any, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    getCartCount: () => number;
    toggleCart: () => void;
    toggleTheme: () => void;
    navigateTo: (view: ViewState, product?: any) => void;
}

export const useEcommerceStore = create<EcommerceState>((set, get) => ({
    products: MAIN_COLLECTION,
    orders: [
        { id: 'ORD-7291', customerName: 'Alex Mercer', customerEmail: 'alex@example.com', status: 'delivered', total: 320, items: [], date: new Date().toISOString() },
        { id: 'ORD-7292', customerName: 'Sarah Chen', customerEmail: 'sarah@example.com', status: 'processing', total: 185, items: [], date: new Date().toISOString() },
        { id: 'ORD-7293', customerName: 'Marcus Bell', customerEmail: 'marcus@example.com', status: 'pending', total: 540, items: [], date: new Date().toISOString() },
    ],
    cart: [],
    isDarkMode: false,
    colorScheme: 'indigo',
    currentView: 'home',
    selectedProduct: null,
    isCartOpen: false,
    addToCart: (product, quantity = 1) => set(state => {
        const existing = state.cart.find(item => item.id === product.id);
        if (existing) {
            return {
                cart: state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
            };
        }
        return { cart: [...state.cart, { ...product, quantity }] };
    }),
    removeFromCart: (productId) => set(state => ({
        cart: state.cart.filter(item => item.id !== productId)
    })),
    getCartCount: () => get().cart.reduce((acc, item) => acc + (item.quantity || 1), 0),
    toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),
    toggleTheme: () => set(state => {
        const next = !state.isDarkMode;
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', next);
        }
        return { isDarkMode: next };
    }),
    navigateTo: (view, product) => set({ currentView: view, selectedProduct: product || null }),
}));
