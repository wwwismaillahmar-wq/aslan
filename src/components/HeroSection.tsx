import React from 'react';
import { Sparkles, Shield, ArrowDown, Award, Flame } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onAdvisorClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onAdvisorClick,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] py-16 md:py-24 bg-gradient-to-b from-[#111417] via-[#14181b] to-[#111417]">
      {/* Subtle ambient gold radial background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold)]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b2024] border border-[rgba(197,160,89,0.3)] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span className="kicker !text-[11px] !tracking-[0.25em]">
              عين هاب • دار العود والمقتنيات الفاخرة
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f5f2ea] leading-[1.25] mb-6 font-serif">
            أصالةُ العود المعتّق <br className="hidden sm:inline" />
            <span className="text-[var(--gold)]">وسحرُ النفحاتِ النادرة</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#a8abad] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            وجهتك الأولى لاقتناء أندر أدهان العود الطبيعية، وأخشاب البخور الصافية، 
            وعطور النيش المصنوعة بأعلى معايير الحرفية والترف لتليق بأهل الذوق الرفيع.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onExploreClick}
              className="btn primary text-base px-8 py-3.5 shadow-lg shadow-[#c5a059]/15"
              id="hero-explore-btn"
            >
              <span>استكشف المجموعة المختارة</span>
              <ArrowDown className="w-4 h-4 mr-2" />
            </button>
            <button
              type="button"
              onClick={onAdvisorClick}
              className="btn secondary text-base px-7 py-3.5"
              id="hero-advisor-btn"
            >
              <Sparkles className="w-4 h-4 ml-2" />
              <span>مستشار العطر الذكي</span>
            </button>
          </div>

          {/* Quick Assurance Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-[rgba(197,160,89,0.12)] text-right">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#171b1e]/60 border border-[rgba(197,160,89,0.1)]">
              <div className="w-10 h-10 rounded-lg bg-[#1f2529] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#f5f2ea]">ضمان نقي 100%</h4>
                <p className="text-[11px] text-[#a8abad]">طبيعي بدون أي إضافات</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#171b1e]/60 border border-[rgba(197,160,89,0.1)]">
              <div className="w-10 h-10 rounded-lg bg-[#1f2529] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#f5f2ea]">تعتيق ملكي قديم</h4>
                <p className="text-[11px] text-[#a8abad]">محفوظ في أوانٍ معتمة</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#171b1e]/60 border border-[rgba(197,160,89,0.1)]">
              <div className="w-10 h-10 rounded-lg bg-[#1f2529] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#f5f2ea]">زبد فائق وغزارة</h4>
                <p className="text-[11px] text-[#a8abad]">بخور دبل وتربل سوبر</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#171b1e]/60 border border-[rgba(197,160,89,0.1)]">
              <div className="w-10 h-10 rounded-lg bg-[#1f2529] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#f5f2ea]">توصيل فاخر للخليج</h4>
                <p className="text-[11px] text-[#a8abad]">تغليف هدايا ممهور</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
