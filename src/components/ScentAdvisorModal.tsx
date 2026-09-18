import React, { useState } from 'react';
import { Product } from '../types';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';

interface ScentAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (p: Product) => void;
}

export const ScentAdvisorModal: React.FC<ScentAdvisorModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    occasion: '',
    vibe: '',
    intensity: '',
  });

  const handleOption = (field: 'occasion' | 'vibe' | 'intensity', val: string) => {
    setAnswers((prev) => ({ ...prev, [field]: val }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // result
    }
  };

  const getRecommendedProduct = (): Product => {
    if (answers.occasion === 'hospitality' || answers.vibe === 'incense') {
      return products.find((p) => p.id === 'ayn-03') || products[2]; // Moroki Dokhoon
    }
    if (answers.occasion === 'formal' || answers.vibe === 'amber') {
      return products.find((p) => p.id === 'ayn-02') || products[1]; // Sarmadi Imperial
    }
    if (answers.vibe === 'fresh') {
      return products.find((p) => p.id === 'ayn-08') || products[7]; // White Silk Musk
    }
    if (answers.occasion === 'gift') {
      return products.find((p) => p.id === 'ayn-07') || products[6]; // Gift Vault
    }
    // Default best seller: Malinau Oud Oil
    return products.find((p) => p.id === 'ayn-01') || products[0];
  };

  const recommended = getRecommendedProduct();

  const resetAdvisor = () => {
    setStep(1);
    setAnswers({ occasion: '', vibe: '', intensity: '' });
  };

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-[#171b1e] border border-[var(--gold)]/40 rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full text-[#a8abad] hover:text-[#f5f2ea]"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b2024] border border-[var(--gold)]/30 text-[11px] text-[var(--gold)] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مستشار عين هاب الذكي</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#f5f2ea]">
            اكتشف توقيعك العطري المفضل
          </h3>
          <p className="text-xs text-[#a8abad] mt-1">
            أجب على ٣ أسئلة بسيطة لترشيح الاختيار الأنسب لذوقك الخاص
          </p>
        </div>

        {/* Step Indicator */}
        {step <= 3 && (
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s === step
                    ? 'w-12 bg-[var(--gold)]'
                    : s < step
                    ? 'w-6 bg-[var(--gold)]/50'
                    : 'w-6 bg-[#22282c]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Occasion */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#f5f2ea] text-center mb-4">
              ما هي المناسبة أو الغاية الأساسية لطلبك؟
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleOption('occasion', 'formal')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all flex flex-col justify-between"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  مناسبات رسمية وأعراس
                </span>
                <span className="text-xs text-[#a8abad] mt-1">
                  حضور طاغٍ وفخامة تلفت الأنظار
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOption('occasion', 'daily')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all flex flex-col justify-between"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  استخدام يومي وشخصي راقٍ
                </span>
                <span className="text-xs text-[#a8abad] mt-1">
                  أناقة هادئة وثبات ممتد طوال اليوم
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOption('occasion', 'hospitality')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all flex flex-col justify-between"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  ضيافة مجالس وتبخير بيوت
                </span>
                <span className="text-xs text-[#a8abad] mt-1">
                  بخور غني بزبد كثيف يملأ المكان
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOption('occasion', 'gift')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all flex flex-col justify-between"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  إهداء فاخر لشخصية مقربة
                </span>
                <span className="text-xs text-[#a8abad] mt-1">
                  صندوق ملكي متكامل يبيض الوجه
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Note / Vibe */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#f5f2ea] text-center mb-4">
              ما هو الطابع الشمي الأقرب إلى ذوقك؟
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleOption('vibe', 'oud')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  دهن عود معتّق وبخوري
                </span>
                <span className="text-xs text-[#a8abad] mt-1 block">
                  أصالة وثقل النكهة الترابية التراثية
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOption('vibe', 'amber')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  عنبر وزعفران حار دافئ
                </span>
                <span className="text-xs text-[#a8abad] mt-1 block">
                  إحساس أرستقراطي مهيب ومخملي
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOption('vibe', 'fresh')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  مسك أبيض نظيف وناعم
                </span>
                <span className="text-xs text-[#a8abad] mt-1 block">
                  انتعاش الزهور النقية واللمسات البودرية
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOption('vibe', 'incense')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  خشب مروكي صافي طبيعي
                </span>
                <span className="text-xs text-[#a8abad] mt-1 block">
                  رائحة الجمر الزاكي التراثي بدون احتراق
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Intensity */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#f5f2ea] text-center mb-4">
              ما هي درجة الفوحان والثبات التي تفضلها؟
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleOption('intensity', 'strong')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  فوحان صارخ وثبات لأيام
                </span>
                <span className="text-xs text-[#a8abad] mt-1 block">
                  للمجالس الكبرى والأعراس
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOption('intensity', 'balanced')}
                className="card text-right p-4 hover:border-[var(--gold)] transition-all"
              >
                <span className="font-bold text-sm text-[#f5f2ea] font-serif">
                  توازن راقٍ وفوحان مريح
                </span>
                <span className="text-xs text-[#a8abad] mt-1 block">
                  يجذب من حولك بلطف وأناقة
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result */}
        {step === 4 && (
          <div className="text-center py-2 animate-fadeIn">
            <span className="text-xs text-[var(--gold)] font-bold tracking-widest uppercase">
              الترشيح المثالي لك من عين هاب
            </span>

            <div className="card p-5 mt-4 text-right flex flex-col sm:flex-row gap-4 items-center">
              <img
                src={recommended.image}
                alt={recommended.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl bg-[#22282c] border border-[var(--gold)]/30 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-[var(--gold)] font-bold">
                  {recommended.categoryNameAr}
                </span>
                <h4 className="text-lg font-bold text-[#f5f2ea] font-serif">
                  {recommended.name}
                </h4>
                <p className="text-xs text-[#a8abad] mt-1 line-clamp-2">
                  {recommended.description}
                </p>
                <div className="text-base font-extrabold text-[var(--gold)] mt-2">
                  {recommended.price} ر.س
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  onSelectProduct(recommended);
                  onClose();
                }}
                className="btn primary flex-1 !py-3 text-xs"
              >
                استعراض تفاصيل هذا المنتج
              </button>
              <button
                type="button"
                onClick={resetAdvisor}
                className="btn secondary !py-3 text-xs flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة الاختيار</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
