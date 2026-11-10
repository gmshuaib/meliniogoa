import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface WatermarkProps {
    isPaidUser: boolean;
    onUpgradeClick?: () => void;
}

const Watermark: React.FC<WatermarkProps> = ({ isPaidUser, onUpgradeClick }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[99999] flex items-center shadow-2xl overflow-hidden rounded-full border border-slate-700/50 dark:border-white/10 bg-slate-900 dark:bg-black backdrop-blur-md isolate print:hidden transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none -z-10" />
            
            <a 
                href="https://webgeny.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-1.5 min-h-[32px] text-white hover:text-cyan-400 transition-colors group ${isPaidUser ? '' : 'pr-4'}`}
                aria-label="Made with Webgeny"
            >
                <svg className="w-6 h-3 object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shrink-0" viewBox="0 0 76 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0668226 4.4807C-0.422957 2.63603 1.89747 1.3792 3.1749 2.79725L8.93396 9.19025C15.674 16.6723 28.0064 14.0322 31.2105 4.48533C33.2221 -1.50837 41.7552 -1.4983 43.645 4.53489C46.6353 14.081 58.8144 16.8486 65.6365 9.53226L71.8619 2.8558C73.1813 1.4409 75.5092 2.76547 74.9668 4.62246L67.9824 28.5365C67.4334 30.4165 66.4216 32.1289 65.0396 33.5168C60.2751 38.3022 52.4617 38.0779 47.9795 33.0271L47.1537 32.0966C42.0695 26.3675 33.1393 26.3141 27.9868 31.9818L26.9106 33.1656C22.3417 38.1914 14.5236 38.4488 9.63407 33.7344C8.05132 32.2084 6.91635 30.2783 6.35214 28.1533L0.0668226 4.4807Z" fill="url(#wg_watermark_grad)"/>
                    <defs>
                        <linearGradient id="wg_watermark_grad" x1="-11.8543" y1="-7.81436" x2="79.5866" y2="42.011" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8"/>
                            <stop offset="0.5" stopColor="#3b82f6"/>
                            <stop offset="1" stopColor="#818cf8"/>
                        </linearGradient>
                    </defs>
                </svg>
                <span className="text-[11px] font-bold tracking-wide flex items-center gap-1.5 whitespace-nowrap pr-1 ml-0.5">
                    Made with Webgeny
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                </span>
            </a>
            
            {isPaidUser && (
                <button 
                    onClick={() => setIsVisible(false)}
                    className="flex items-center justify-center min-h-[32px] w-8 border-l border-slate-700/50 dark:border-white/10 text-slate-400 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-colors group"
                    aria-label="Remove Watermark"
                >
                    <X className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </button>
            )}
        </div>
    );
};

export default Watermark;