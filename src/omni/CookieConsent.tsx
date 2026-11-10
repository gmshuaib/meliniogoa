import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('omnistore_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'omnistore_cookie_consent',
      JSON.stringify({ necessary: true, analytics: true, marketing: true }),
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'omnistore_cookie_consent',
      JSON.stringify({ necessary: true, analytics: analyticsEnabled, marketing: marketingEnabled }),
    );
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md w-full animate-in slide-in-from-bottom-6 duration-300">
      <div className="bg-zinc-950 text-white p-5 rounded-3xl shadow-2xl border border-zinc-800">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-zinc-800 text-amber-400 rounded-xl shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold flex items-center gap-1.5">
              <span>Privacy & Cookie Preferences</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
              We use strictly necessary cookies for cart persistence and session security, as well as
              optional telemetry to optimize the shopping experience.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zinc-600 hover:text-zinc-400 p-1 shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {showPreferences && (
          <div className="space-y-2 mb-4 p-3 bg-zinc-900 rounded-2xl text-xs border border-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">Strictly Necessary</p>
                <p className="text-[10px] text-zinc-400">Cart, currency & checkout</p>
              </div>
              <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-mono">
                Always Active
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
              <div>
                <p className="font-semibold text-white">Analytics & Performance</p>
                <p className="text-[10px] text-zinc-400">Speed monitoring & heatmaps</p>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="rounded accent-emerald-500 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
              <div>
                <p className="font-semibold text-white">Personalization & Ads</p>
                <p className="text-[10px] text-zinc-400">Relevant category suggestions</p>
              </div>
              <input
                type="checkbox"
                checked={marketingEnabled}
                onChange={(e) => setMarketingEnabled(e.target.checked)}
                className="rounded accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {showPreferences ? (
            <button
              onClick={handleSavePreferences}
              className="flex-1 bg-white text-black py-2 rounded-xl text-xs font-bold hover:bg-zinc-200 transition-colors"
            >
              Save Custom Choices
            </button>
          ) : (
            <>
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-white text-black py-2 rounded-xl text-xs font-bold hover:bg-zinc-200 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl text-xs font-medium border border-zinc-800 transition-colors"
              >
                Manage
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
