import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const DEFAULT_LINKS = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
];

export const handleNavLinkClick = (e: React.MouseEvent, href?: string, label?: string, onNavigate?: any, onClick?: any) => {
    if (!href) {
        onClick?.(label);
        return;
    }

    if (href.startsWith('#') || href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.replace(/^\/?#/, '');
        let targetEl = document.getElementById(targetId);
        if (!targetEl) {
            const elements = document.querySelectorAll('[id]');
            for (const el of Array.from(elements)) {
                const id = el.id.toLowerCase();
                if (id === targetId.toLowerCase() || id === `section-${targetId.toLowerCase()}` || id.includes(targetId.toLowerCase())) {
                    targetEl = el as HTMLElement;
                    break;
                }
            }
        }
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        } else if (onNavigate && href.startsWith('/#')) {
            onNavigate('/');
        } else if (onNavigate && targetId) {
            onNavigate(targetId);
        } else {
            onClick?.(label);
        }
    } else if (onNavigate && (href.startsWith('/') || href === 'index' || !href.includes('://'))) {
        e.preventDefault();
        onNavigate(href === 'index' ? '/' : href);
    } else {
        onClick?.(label);
    }
};

export interface ProcessedNavLinks {
    primaryLinks: Array<{ label: string; href: string; id?: string }>;
    overflowLinks: Array<{ label: string; href: string; id?: string }>;
    allCleanLinks: Array<{ label: string; href: string; id?: string }>;
    hasOverflow: boolean;
    hasMore: boolean;
}

export const sanitizeNavLinks = (
    rawLinks?: Array<any>,
    user?: any,
    maxVisible: number = 5,
    pages?: Array<any>
): ProcessedNavLinks => {
    let source: any[] = DEFAULT_LINKS;
    if (pages && pages.length > 0) {
        source = pages.map((p: any) => ({
            label: p.name,
            href: p.slug === 'index' ? '/' : `/${p.slug}`,
            id: p.id
        }));
    } else if (rawLinks && rawLinks.length > 0) {
        source = rawLinks;
    }

    const clean = source
        .map((l: any) => {
            const label = l.label || l.name || '';
            const href = l.href || (l.slug ? (l.slug === 'index' ? '/' : `/${l.slug}`) : '#');
            return {
                label: String(label).trim(),
                href: String(href).trim(),
                id: l.id || l.slug,
                hideIfAuth: l.hideIfAuth,
                requiresAuth: l.requiresAuth
            };
        })
        .filter((l: any) => {
            if (!l.label) return false;
            const labelLower = l.label.toLowerCase();
            const hrefLower = l.href.replace(/^\//, '').toLowerCase();

            if (['login', 'signup', 'sign in', 'sign up', 'register', 'profile'].includes(labelLower)) return false;
            if (['login', 'signup', 'profile', 'register'].includes(hrefLower)) return false;
            if (user && l.hideIfAuth) return false;
            if (!user && l.requiresAuth) return false;
            return true;
        });

    const seen = new Set<string>();
    const deduped: Array<{ label: string; href: string; id?: string }> = [];
    for (const item of clean) {
        const key = item.label.toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            deduped.push({ label: item.label, href: item.href, id: item.id });
        }
    }

    if (deduped.length <= maxVisible) {
        return { primaryLinks: deduped, overflowLinks: [], allCleanLinks: deduped, hasOverflow: false, hasMore: false };
    }

    return {
        primaryLinks: deduped.slice(0, maxVisible),
        overflowLinks: deduped.slice(maxVisible),
        allCleanLinks: deduped,
        hasOverflow: true,
        hasMore: true
    };
};

export const extractBrandName = (data: any, fallback = 'Brand') => {
    return data?.brandName || data?.navbar?.brand || data?.brand || data?.logo || data?.siteName || data?.businessName || data?.name || fallback;
};

export const NavMoreDropdown: React.FC<{
    links: Array<{ label: string; href: string }>;
    onNavigate?: any;
    onClick?: any;
    isDark?: boolean;
    theme?: any;
}> = ({ links, onNavigate, onClick, isDark = false, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!links || links.length === 0) return null;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isOpen
                        ? (isDark ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white')
                        : (isDark ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5')
                }`}
            >
                More <ChevronDown size={13} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        onMouseLeave={() => setIsOpen(false)}
                        className={`absolute top-full right-0 mt-2 w-48 py-1.5 rounded-2xl border shadow-xl z-50 flex flex-col backdrop-blur-xl ${
                            isDark
                                ? 'bg-slate-900/95 border-white/10 text-white shadow-black/40'
                                : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-200/50'
                        }`}
                    >
                        {links.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                onClick={(e) => {
                                    handleNavLinkClick(e, link.href, link.label, onNavigate, onClick);
                                    setIsOpen(false);
                                }}
                                className="px-4 py-2 text-xs font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
