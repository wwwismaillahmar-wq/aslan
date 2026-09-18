import React, { useState } from 'react';
import { ShoppingBag, Sparkles, PhoneCall, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAdvisor: () => void;
  selectedCurrency: string;
  onCurrencyChange: (curr: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenAdvisor,
  selectedCurrency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#111417]/95 backdrop-blur-md border-b border-[rgba(197,160,89,0.18)]">
      <div className="wrap py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
          <div className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center bg-[#1b2024] group-hover:border-[#e0bc74] transition-all">
            <span className="text-[var(--gold)] font-serif font-bold text-lg">ع</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-wide text-[#f5f2ea] font-serif">
              عَـيـن هَـاب
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[var(--gold)] uppercase -mt-1 font-sans">
              AYN HUB
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" aria-label="القائمة الرئيسية">
          <a href="#catalog" className="text-[#f5f2ea] hover:text-[var(--gold)] transition-colors">
            المجموعة الكاملة
          </a>
          <a href="#oud-section" className="text-[#a8abad] hover:text-[var(--gold)] transition-colors">
            دهن العود المعتّق
          </a>
          <a href="#perfumes-section" className="text-[#a8abad] hover:text-[var(--gold)] transition-colors">
            عطور النيش
          </a>
          <a href="#about" className="text-[#a8abad] hover:text-[var(--gold)] transition-colors">
            عن عين هاب
          </a>
          <a href="#contact" className="text-[#a8abad] hover:text-[var(--gold)] transition-colors">
            خدمة الوجهاء
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Currency Selector */}
          <div className="hidden sm:block">
            <select
              value={selectedCurrency}
              onChange={(e) => onCurrencyChange(e.target.value)}
              className="!w-auto !py-1.5 !px-3 !text-xs !bg-[#1b2024] !border-[rgba(197,160,89,0.25)] rounded-full text-[#f5f2ea] cursor-pointer"
              aria-label="تغيير العملة"
            >
              <option value="SAR">ر.س (SAR)</option>
              <option value="AED">د.إ (AED)</option>
              <option value="KWD">د.ك (KWD)</option>
              <option value="QAR">ر.ق (QAR)</option>
            </select>
          </div>

          {/* Scent Advisor Button */}
          <button
            type="button"
            onClick={onOpenAdvisor}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[var(--gold)] bg-[#1b2024] border border-[rgba(197,160,89,0.3)] hover:border-[var(--gold)] px-3.5 py-2 rounded-full transition-all"
            id="advisor-nav-btn"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>مستشار العطور</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D8%B9%D9%8A%D9%86%20%D9%87%D8%A7%D8%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#1b2024] text-[#a8abad] hover:text-[var(--gold)] border border-[rgba(197,160,89,0.2)] transition-colors"
            title="تواصل مباشر عبر واتساب"
            aria-label="واتساب عين هاب"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          {/* Cart Trigger */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#1b2024] text-[#f5f2ea] hover:text-[var(--gold)] border border-[rgba(197,160,89,0.25)] hover:border-[var(--gold)] transition-all flex items-center justify-center"
            id="open-cart-btn"
            aria-label="عرض سلة المشتريات"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--gold)] text-[#111] font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border border-[#111417]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f5f2ea] hover:text-[var(--gold)]"
            aria-label="القائمة الجانبية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171b1e] border-b border-[rgba(197,160,89,0.2)] py-5 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f5f2ea] hover:text-[var(--gold)] py-1"
            >
              المجموعة الكاملة
            </a>
            <a
              href="#oud-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a8abad] hover:text-[var(--gold)] py-1"
            >
              دهن العود المعتّق
            </a>
            <a
              href="#perfumes-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a8abad] hover:text-[var(--gold)] py-1"
            >
              عطور النيش
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a8abad] hover:text-[var(--gold)] py-1"
            >
              عن عين هاب
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a8abad] hover:text-[var(--gold)] py-1"
            >
              خدمة الوجهاء والاستفسارات
            </a>

            <div className="pt-4 border-t border-[rgba(197,160,89,0.15)] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdvisor();
                }}
                className="btn secondary w-full !text-xs !py-2.5 flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>المستشار العطري لاختيار عطرك الخاص</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#a8abad] mt-1">
                <span>العملة المعتمدة:</span>
                <select
                  value={selectedCurrency}
                  onChange={(e) => onCurrencyChange(e.target.value)}
                  className="!w-auto !py-1 !px-2.5 !text-xs !bg-[#1b2024]"
                >
                  <option value="SAR">ر.س (SAR)</option>
                  <option value="AED">د.إ (AED)</option>
                  <option value="KWD">د.ك (KWD)</option>
                  <option value="QAR">ر.ق (QAR)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
