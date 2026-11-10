
export type ThemeColor = 'blue' | 'violet' | 'emerald' | 'rose' | 'amber' | 'indigo' | 'purple' | 'cyan' | 'teal' | 'orange' | 'pink' | 'lime' | 'sky' | 'fuchsia' | 'slate';
export type ViewState = 'home' | 'shop' | 'detail' | 'admin' | 'product' | 'dashboard';

export interface ThemeClasses {
    color?: string;
    primaryHex: string;
    text: string;
    textDark: string;
    bg: string;
    bgLight: string;
    bgHover: string;
    border: string;
    borderActive: string;
    ring: string;
    gradientFrom: string;
    gradientTo: string;
    iconColor: string;
    shadow: string;
    selection: string;
    blob: string;
    button: string;
    muted: string;
    glow: string;
    ringActive: string;
    bgSoft: string;
    lightBg: string;
    badgeBg?: string;
    badgeText?: string;
    badgeBorder?: string;
    badgeDot?: string;
    blobGradient?: string;
}

export interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    themeColor: ThemeColor;
    setThemeColor: (color: ThemeColor) => void;
}

export interface PageConfig {
    id: string;
    name: string;
    slug: string;
    sections?: any[];
    isProtected?: boolean;
    [key: string]: any;
}

export interface StyleConfig {
    fontFamily: string;
    primaryColor: ThemeColor;
    glassmorphism?: boolean;
    shadowDepth?: 'none' | 'soft' | 'medium' | 'hard';
    isDarkMode?: boolean;
}

export interface SectionStyle {
    backgroundColor?: string;
    textColor?: string;
    textAlign?: 'left' | 'center' | 'right';
}

export interface TemplateProps<T = any> {
    data: T;
    style: StyleConfig;
    customStyle?: SectionStyle;
    isDarkMode?: boolean;
    pages?: PageConfig[];
    currentPageId?: string;
    onNavigate?: (slugOrId: string) => void;
    [key: string]: any;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
    stock?: number;
    colors?: string[];
    sizes?: (string | number)[];
    [key: string]: any;
}

export interface CartItem extends Product {
    quantity: number;
    selectedSize?: string | number;
    selectedColor?: string;
}

export interface OrderItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface Order {
    id: string;
    customerName: string;
    customerEmail?: string;
    items: OrderItem[] | any[];
    total: number;
    date: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}
