import React, { useState } from 'react';
import { useStore } from './OmniStoreContext';
import { About } from './About';
import {
  HelpCircle,
  Mail,
  ShieldCheck,
  Truck,
  FileText,
  Lock,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  CheckCircle,
  Globe,
  Leaf,
  Award,
} from 'lucide-react';

interface SupportHubPageProps {
  initialTab?: 'faq' | 'about' | 'contact' | 'shipping-policy' | 'terms' | 'privacy';
  data?: any;
}

export const SupportHubOmni: React.FC<SupportHubPageProps> = ({ initialTab = 'faq' }) => {
  const { activePreset, showToast, navigateTo } = useStore();
  const AboutVariant = About;
  const [activeTab, setActiveTab] = useState<'faq' | 'about' | 'contact' | 'shipping-policy' | 'terms' | 'privacy'>(
    initialTab
  );

  // FAQ Search & Open Accordion
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCategory, setContactCategory] = useState('Order & Shipping Inquiry');
  const [contactOrderNum, setContactOrderNum] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMsg.trim()) return;
    setContactSubmitted(true);
    showToast('Inquiry Received', `Your ticket has been assigned to a ${activePreset?.name || 'Client'} Concierge specialist.`, 'success');
  };

  // FAQ Data
  const faqItems = [
    {
      category: 'Shipping & Delivery',
      question: 'How long does carbon-neutral delivery take?',
      answer: 'Domestic orders within Western Europe and North America typically arrive in 2 to 4 business days via DHL Express Priority. International destinations take between 3 and 6 business days. All packages are 100% carbon-neutral.',
    },
    {
      category: 'Shipping & Delivery',
      question: 'Are customs duties and taxes included in the checkout price?',
      answer: 'Yes. All orders dispatched to the US, EU, UK, Switzerland, and UAE are delivered DDP (Delivered Duty Paid). The price displayed at checkout is guaranteed final with zero surprise customs fees upon arrival.',
    },
    {
      category: 'Returns & Exchanges',
      question: `What is the ${activePreset?.name || 'Store'} 30-day return policy?`,
      answer: 'We offer complimentary 30-day returns on all unworn items with original security tags attached. You can initiate a return directly from your Account Portal or contact our concierge for a scheduled home courier pickup.',
    },
    {
      category: 'Garment Care & Sizing',
      question: 'How do I care for 100% Mongolian Cashmere and Mulberry Silk?',
      answer: 'We recommend gentle hand washing in cool water with specialized cashmere shampoo or eco-friendly dry cleaning. Store garments folded flat in breathable cedar storage bags rather than on hangers to preserve natural shoulder shape.',
    },
    {
      category: 'Bespoke & Tailoring',
      question: 'Can I request bespoke sizing or custom alterations?',
      answer: 'Selected tailored pieces and overcoats are eligible for complimentary sleeve and hem adjustments through our affiliated master tailors in Paris, London, and New York. Simply select "Bespoke Fitting" upon checkout.',
    },
    {
      category: 'Authenticity & Guilds',
      question: 'How do I verify the authenticity of an artisan piece?',
      answer: 'Every garment, leather bag, and accessory is issued with an individual serial-numbered certificate of provenance containing workshop origin stamps, artisan signatures, and verifiable textile batch records.',
    },
  ];

  const filteredFaqs = faqItems.filter(
    (item) =>
      faqSearch === '' ||
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Top Navigation Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 border-b border-zinc-200 dark:border-zinc-800">
        {[
          { id: 'faq', label: 'Help & FAQs', icon: HelpCircle },
          { id: 'about', label: 'About & Ethics', icon: Leaf },
          { id: 'contact', label: `${activePreset?.name || 'Client'} Concierge`, icon: Mail },
          { id: 'shipping-policy', label: 'Shipping & Delivery', icon: Truck },
          { id: 'terms', label: 'Terms of Service', icon: FileText },
          { id: 'privacy', label: 'Privacy Policy', icon: Lock },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2. TAB: FAQs */}
      {activeTab === 'faq' && (
        <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
          {/* FAQ Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search delivery, returns, sizing, materials..."
              className="w-full text-xs sm:text-sm pl-11 pr-4 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 text-zinc-400 text-xs">
                No matching inquiries found. Reach out directly to our concierge below.
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                          {faq.category}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Need More Assistance Banner */}
          <div className="p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Have a specific question about an order?</h4>
              <p className="text-xs text-zinc-500">Our concierge team is available Monday through Saturday, 9am - 8pm CET.</p>
            </div>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs shrink-0"
            >
              Contact {activePreset?.name || 'Our'} Concierge
            </button>
          </div>
        </div>
      )}

      {/* 3. TAB: ABOUT & ETHICS */}
      {activeTab === 'about' && (
        <div className="py-8 animate-fadeIn">
          <AboutVariant />
        </div>
      )}

      {/* 4. TAB: CONTACT CONCIERGE */}
      {activeTab === 'contact' && (
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold font-display text-zinc-900 dark:text-white">
              {activePreset?.name || 'Client'} Concierge
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
              Our specialists are ready to assist with sizing consultations, custom bespoke requests, and order logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Contact Information */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-5">
                <h3 className="text-sm font-bold font-display text-zinc-900 dark:text-white">Direct Communication</h3>
                
                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-zinc-900 dark:text-white font-medium">Paris Flagship {activePreset?.name || 'Store'}</strong>
                      <span className="text-zinc-500">18 Rue du Faubourg Saint-Honoré, 75008 Paris, France</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-zinc-900 dark:text-white font-medium">Direct Telephone</strong>
                      <span className="text-zinc-500 font-mono">+33 1 42 68 55 00</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-zinc-900 dark:text-white font-medium">Client Concierge Email</strong>
                      <span className="text-zinc-500">concierge@{(activePreset?.name || 'store').toLowerCase().replace(/\s+/g, '-')}.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-zinc-900 dark:text-white font-medium">Operating Hours</strong>
                      <span className="text-zinc-500">Mon – Sat: 09:00 – 19:00 CET</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Instant Inquiries</span>
                <h4 className="text-xs font-bold text-zinc-900 dark:text-white mt-1">Live Concierge Chat</h4>
                <p className="text-[11px] text-zinc-500 mt-1">Tap the chat widget in the bottom right for instant live assistance with our styling team.</p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="md:col-span-7">
              <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-md">
                {contactSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting us, {contactName}. A senior concierge specialist has received your dossier and will reply to <strong className="text-zinc-800 dark:text-zinc-200">{contactEmail}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactMsg('');
                      }}
                      className="px-6 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h3 className="text-base font-bold font-display text-zinc-900 dark:text-white pb-2 border-b border-zinc-100 dark:border-zinc-800">
                      Submit a Private Inquiry
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Your Full Name</label>
                        <input
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Lady Genevieve Vance"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Department</label>
                        <select
                          value={contactCategory}
                          onChange={(e) => setContactCategory(e.target.value)}
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                        >
                          <option value="Order & Shipping Inquiry">Order & Shipping Inquiry</option>
                          <option value="Bespoke Sizing & Styling">Bespoke Sizing & Styling</option>
                          <option value="Returns & Exchanges">Returns & Exchanges</option>
                          <option value="Press & Guild Partnerships">Press & Guild Partnerships</option>
                          <option value="VIP Private Client Services">VIP Private Client Services</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Order Reference (Optional)</label>
                        <input
                          type="text"
                          value={contactOrderNum}
                          onChange={(e) => setContactOrderNum(e.target.value)}
                          placeholder="e.g. AURA-ORD-1092"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">Your Message</label>
                      <textarea
                        rows={4}
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        placeholder="Please describe how our team can assist you..."
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold text-xs rounded-xl hover:bg-zinc-800 shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message to Concierge</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB: SHIPPING POLICY */}
      {activeTab === 'shipping-policy' && (
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold font-display text-zinc-900 dark:text-white">
              Shipping, Duties & Delivery Standards
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-lg mx-auto">
              Transparent transit timelines and full carbon offset guarantees across all international destinations.
            </p>
          </div>

          {/* Rates Matrix */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden shadow-md">
            <div className="p-6 border-b border-zinc-100 dark:border-zinc-800">
              <h3 className="text-sm font-bold font-display text-zinc-900 dark:text-white">International Delivery Windows</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 dark:bg-zinc-800/60 text-zinc-500 font-semibold border-b border-zinc-100 dark:border-zinc-800">
                  <tr>
                    <th className="p-4">Destination Region</th>
                    <th className="p-4">Courier Partner</th>
                    <th className="p-4">Estimated Transit</th>
                    <th className="p-4">Fee (Orders &lt; $300)</th>
                    <th className="p-4">Orders &gt; $300</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                  <tr>
                    <td className="p-4 font-semibold text-zinc-900 dark:text-white">European Union & UK</td>
                    <td className="p-4">DHL Express Priority</td>
                    <td className="p-4">1 – 3 Business Days</td>
                    <td className="p-4 font-mono">$15.00</td>
                    <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Complimentary</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-900 dark:text-white">United States & Canada</td>
                    <td className="p-4">FedEx International Priority</td>
                    <td className="p-4">2 – 4 Business Days</td>
                    <td className="p-4 font-mono">$25.00</td>
                    <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Complimentary</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-900 dark:text-white">Asia-Pacific & Middle East</td>
                    <td className="p-4">DHL Express Global</td>
                    <td className="p-4">3 – 5 Business Days</td>
                    <td className="p-4 font-mono">$35.00</td>
                    <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Complimentary</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-zinc-900 dark:text-white">Rest of World</td>
                    <td className="p-4">Courier Express</td>
                    <td className="p-4">4 – 7 Business Days</td>
                    <td className="p-4 font-mono">$45.00</td>
                    <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Complimentary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Guaranteed Delivered Duty Paid (DDP)</span>
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              We handle all import customs, clearance paperwork, and local VAT directly with regional border authorities. You will never be asked to pay supplementary customs fees upon delivery.
            </p>
          </div>
        </div>
      )}

      {/* 6. TAB: TERMS & PRIVACY */}
      {(activeTab === 'terms' || activeTab === 'privacy') && (
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-md">
          <h1 className="text-2xl font-bold font-display text-zinc-900 dark:text-white">
            {activeTab === 'terms' ? `Terms of Service & ${activePreset?.name || 'Store'} Conditions` : 'Privacy Policy & Data Sovereignty'}
          </h1>
          <p className="text-[11px] text-zinc-400">Last updated: August 2026</p>

          <div className="prose prose-zinc dark:prose-invert text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-4">
            <p>
              Welcome to the {activePreset?.name || 'Store'} digital catalog and artisan marketplace. By accessing our platform and placing commissions or purchasing garments, you enter into a binding covenant governed by international commercial trade standards and European Consumer Rights Directives.
            </p>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white">1. {activePreset?.name || 'Store'} Craftsmanship & Variations</h3>
            <p>
              Given the artisan, hand-dyed, and hand-linked nature of our Mulberry silk, vegetable-tanned leathers, and Mongolian cashmere, subtle tonal and textural variations are the hallmark of natural luxury and do not constitute manufacturing defects.
            </p>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white">2. Payment Security &amp; Demo Checkout Notice</h3>
            <p>
              This store currently operates in demo checkout mode. No real payment is processed — all transactions are simulated. Before accepting live payments, connect a compliant server-side payment provider (such as Stripe or Razorpay) and ensure your integration meets the required PCI-DSS standards for handling cardholder data.
            </p>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white">3. Data Protection & Cookie Compliance</h3>
            <p>
              We respect patron privacy. We do not sell your personal identifying information to third-party data brokers. You may request data deletion or export your transaction ledger at any time from the Security tab of your customer account.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
