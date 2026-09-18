import React from 'react';
import { BRAND_VALUES, TESTIMONIALS } from '../data/products';
import { ShieldCheck, Sparkles, Truck, Award, Quote, Star } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[var(--gold)]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[var(--gold)]" />,
  Truck: <Truck className="w-6 h-6 text-[var(--gold)]" />,
  Award: <Award className="w-6 h-6 text-[var(--gold)]" />,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section dark">
      <div className="wrap">
        {/* About Ayn Hub Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="kicker">فلسفة وهوية الدار</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#f5f2ea] leading-tight">
              عين هاب.. ملتقى الفخامة <br />
              <span className="text-[var(--gold)]">وعبير التراث الخالد</span>
            </h2>
            <p className="text-sm sm:text-base text-[#a8abad] leading-relaxed">
              تأسست دار <strong>عَـيـن هَـاب</strong> لتكون المحطة الأسمى لعشاق النوادر والمقتنيات
              العطرية التي تتوارثها الأجيال. نبدأ رحلتنا من أعماق غابات جنوب شرق آسيا؛ حيث ننتقي
              أعواد البخور النادرة من قمم أشجار العود المعمرة، ونقطر الأدهان بطرق الحطب التقليدية 
              التي تحافظ على الروح الحقيقية للخشب.
            </p>
            <p className="text-sm sm:text-base text-[#a8abad] leading-relaxed">
              في عين هاب، لا نساوم على النقاء؛ فكل قطرة دهن عود وكل كسرة بخور تخضع لاختبارات 
              مخبرية وحسية دقيقة من خبراء العود المعتمدين لضمان وصول تجربة ملوكية تخلد في ذاكرة مجالسكم.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#f5f2ea]">
              <div>
                <span className="text-2xl font-bold text-[var(--gold)] font-serif block">+15</span>
                <span className="text-[#a8abad]">عاماً في تجارة النوادر</span>
              </div>
              <div className="h-8 w-px bg-[var(--line)]" />
              <div>
                <span className="text-2xl font-bold text-[var(--gold)] font-serif block">100%</span>
                <span className="text-[#a8abad]">طبيعي بدون خلط</span>
              </div>
              <div className="h-8 w-px bg-[var(--line)]" />
              <div>
                <span className="text-2xl font-bold text-[var(--gold)] font-serif block">+12k</span>
                <span className="text-[#a8abad]">عميل من نخب الخليج</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="card p-3 overflow-hidden rounded-2xl border-[rgba(197,160,89,0.3)]">
                <img
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80"
                  alt="دار عين هاب للعود والعطور"
                  className="w-full h-[380px] sm:h-[440px] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#111417] border border-[var(--gold)] p-5 rounded-xl max-w-xs shadow-xl hidden sm:block">
                <p className="text-xs text-[var(--gold)] font-bold mb-1">
                  «الطيب لأهل الطيب»
                </p>
                <p className="text-[11px] text-[#a8abad]">
                  نهجنا في عين هاب هو تقديم أسمى درجات التعتيق دون مساومة على الجودة.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Values Grid */}
        <div id="values" className="pt-10 mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="kicker">معايير الامتياز</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5f2ea] mt-1">
              لماذا يختار الوجهاء دار عين هاب؟
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="card p-6 flex flex-col items-start hover:border-[var(--gold)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1f2529] border border-[rgba(197,160,89,0.2)] flex items-center justify-center mb-4 group-hover:border-[var(--gold)] transition-colors">
                  {ICON_MAP[val.icon]}
                </div>
                <h4 className="text-base font-bold text-[#f5f2ea] mb-2 font-serif">
                  {val.title}
                </h4>
                <p className="text-xs text-[#a8abad] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="pt-8 border-t border-[var(--line)]">
          <div className="head mb-8">
            <div>
              <span className="kicker">شهادات أصحاب الذوق</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5f2ea] mt-1">
                ماذا يقول عملاء عين هاب؟
              </h3>
            </div>
            <div className="text-xs text-[#a8abad]">تقييم عام 4.9 من 5 بناءً على مئات التجارب</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[var(--gold)]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[rgba(197,160,89,0.25)]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#f5f2ea]/90 leading-relaxed mb-4 italic">
                    «{t.comment}»
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--line)]">
                  <h4 className="text-xs font-bold text-[#f5f2ea] font-serif">{t.name}</h4>
                  <div className="flex justify-between text-[11px] text-[#a8abad] mt-0.5">
                    <span>{t.location}</span>
                    <span className="text-[var(--gold)]">{t.productName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
