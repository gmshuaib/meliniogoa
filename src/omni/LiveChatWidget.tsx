import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const LiveChatWidget: React.FC = () => {
  const { activePreset, navigateTo } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: `Hello! I'm your ${activePreset.name} Concierge. How can I assist you with product specs, order tracking, or styling advice today?`,
      timestamp: 'Just now',
    },
  ]);

  const quickPrompts = [
    'Where is my order?',
    'What is your return policy?',
    'How do sizing/specs work?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg_${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Simulated automated intelligent reply
    setTimeout(() => {
      let botResponse = `I'd be delighted to help with that! Our ${activePreset.categoryTag} catalog features curated materials with 30-day returns.`;
      const lower = text.toLowerCase();

      if (lower.includes('order') || lower.includes('track')) {
        botResponse =
          'You can track real-time delivery milestones in your Account Dashboard > Order History, or view the live courier map.';
      } else if (lower.includes('return') || lower.includes('refund')) {
        botResponse =
          'We provide complimentary 30-day returns with prepaid shipping labels generated directly from your customer account page.';
      } else if (lower.includes('size') || lower.includes('spec')) {
        botResponse = `Each product detail page contains an exact specifications table and interactive guide tailored to the ${activePreset.categoryTag} schema.`;
      } else if (lower.includes('shipping') || lower.includes('deliver')) {
        botResponse =
          'Standard carbon-neutral delivery takes 3–5 business days. Orders over $75 qualify for free express shipping!';
      }

      const botMsg: ChatMessage = {
        id: `msg_bot_${Date.now()}`,
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black dark:bg-white text-white dark:text-black p-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group"
          aria-label="Open Customer Support Live Chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs font-bold pr-1 hidden sm:inline">Need Help?</span>
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col h-[480px] animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-zinc-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold">{activePreset.name} Concierge</h3>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online & Ready
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-700 dark:text-zinc-300">
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-black text-white dark:bg-white dark:text-black rounded-br-none'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-bl-none'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className="text-[9px] opacity-60 block text-right mt-1">{m.timestamp}</span>
                </div>
              </div>
            ))}

            {/* Quick Prompts */}
            <div className="pt-2">
              <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Instant Queries:
              </p>
              <div className="flex flex-wrap gap-1">
                {quickPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSend(p)}
                    className="text-[11px] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-full transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white px-3.5 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-black dark:focus:border-white"
            />
            <button
              type="submit"
              className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-zinc-800"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
