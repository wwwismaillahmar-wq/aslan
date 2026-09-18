import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShieldCheck, Check, ShoppingBag, PhoneCall, Sparkles } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product, volume: string, qty: number) => void;
  currency: string;
  currencyRate: number;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currency,
  currencyRate,
}) => {
  if (!product) return null;

  const [selectedVolume, setSelectedVolume] = useState<string>(product.volumeOptions[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const formatPrice = (sarPrice: number) => {
    const converted = Math.round(sarPrice * currencyRate);
    return `${converted.toLocaleString('ar-SA')} ${currency === 'SAR' ? 'ر.س' : currency === 'AED' ? 'د.إ' : currency === 'KWD' ? 'د.ك' : 'ر.ق'}`;
  };

  const handleAdd = () => {
    onAddToCart(product, selectedVolume, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً دار عين هاب، أود الاستفسار بخصوص طلب "${product.name}" (${selectedVolume})، هل المنتج متوفر للشحن الفوري؟`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#171b1e] border border-[var(--line)] rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-[#111417]/80 text-[#a8abad] hover:text-[#f5f2ea] border border-[var(--line)] transition-colors"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image preview */}
            <div className="flex flex-col gap-3">
              <div className="h-[280px] md:h-[350px] rounded-xl overflow-hidden bg-[#22282c] border border-[var(--line)] relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.tag && (
                  <span className="absolute top-3 right-3 bg-[#111417]/90 text-[var(--gold)] border border-[rgba(197,160,89,0.3)] text-xs font-bold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Authenticity card */}
              <div className="p-3.5 rounded-xl bg-[#1b2024] border border-[rgba(197,160,89,0.15)] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-[#f5f2ea]">ضمان نقاء عين هاب المعتمد</p>
                  <p className="text-[#a8abad]">فحص مخبري وضمان استرجاع إن لم يناسب ذوقك الرفيع</p>
                </div>
              </div>
            </div>

            {/* Product Details info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[var(--gold)] font-medium mb-1">
                  <span>{product.categoryNameAr}</span>
                  <span>•</span>
                  <span className="text-[#a8abad]">{product.origin}</span>
                </div>

                <h2 id="modal-product-title" className="text-2xl font-serif font-bold text-[#f5f2ea]">
                  {product.name}
                </h2>
                <p className="text-xs text-[#a8abad] font-mono tracking-wider mb-3">
                  {product.nameEn}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[var(--gold)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#f5f2ea]">{product.rating}</span>
                  <span className="text-xs text-[#a8abad]">({product.reviewsCount} تقييم موثق)</span>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-[var(--line)] flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[var(--gold)]">
                    {formatPrice(product.price * quantity)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#666] line-through">
                      {formatPrice(product.originalPrice * quantity)}
                    </span>
                  )}
                  {product.concentration && (
                    <span className="text-xs bg-[#22282c] text-[#a8abad] px-2.5 py-1 rounded-full mr-auto">
                      {product.concentration}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#f5f2ea]/90 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Olfactory Pyramid (Notes) */}
                {product.notes && (
                  <div className="p-3.5 rounded-xl bg-[#1b2024] border border-[rgba(197,160,89,0.15)] mb-5 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[var(--gold)] mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>الهرم العطري والتدرج:</span>
                    </div>
                    <div className="space-y-1 text-[#f5f2ea]/80">
                      <div>
                        <strong className="text-[#a8abad]">الافتتاحية: </strong>
                        {product.notes.top}
                      </div>
                      <div>
                        <strong className="text-[#a8abad]">القلب: </strong>
                        {product.notes.middle}
                      </div>
                      <div>
                        <strong className="text-[#a8abad]">القاعدة: </strong>
                        {product.notes.base}
                      </div>
                    </div>
                  </div>
                )}

                {/* Volume selector */}
                <div className="mb-4">
                  <label className="block text-xs font-bold text-[#f5f2ea] mb-2">
                    اختر الحجم أو السعة:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.volumeOptions.map((vol) => (
                      <button
                        key={vol}
                        type="button"
                        onClick={() => setSelectedVolume(vol)}
                        className={`text-xs p-2.5 rounded-lg border text-right transition-all ${
                          selectedVolume === vol
                            ? 'border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--gold)] font-bold'
                            : 'border-[#343a3f] bg-[#1b2024] text-[#a8abad] hover:border-[var(--gold)]'
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-[#f5f2ea]">الكمية:</span>
                  <div className="flex items-center border border-[#343a3f] rounded-lg bg-[#1b2024]">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-base text-[#a8abad] hover:text-[#f5f2ea]"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-sm font-bold text-[#f5f2ea]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-base text-[#a8abad] hover:text-[#f5f2ea]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[var(--line)]">
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={addedSuccess}
                  className={`btn flex-1 !py-3 font-bold text-sm flex items-center justify-center gap-2 ${
                    addedSuccess ? '!bg-emerald-600 !text-white !border-emerald-600' : 'primary'
                  }`}
                  id="modal-add-cart-btn"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>تمت الإضافة بنجاح</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>إضافة إلى سلة المقتنيات</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/966500000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary !py-3 text-xs flex items-center justify-center gap-2"
                  title="استفسار مباشر عبر واتساب"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>طلب فوري عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
