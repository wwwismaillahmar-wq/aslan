import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowLeft, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (productId: string, volume: string, delta: number) => void;
  onRemoveItem: (productId: string, volume: string) => void;
  onClearCart: () => void;
  currency: string;
  currencyRate: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  currency,
  currencyRate,
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  const formatPrice = (sarPrice: number) => {
    const converted = Math.round(sarPrice * currencyRate);
    return `${converted.toLocaleString('ar-SA')} ${currency === 'SAR' ? 'ر.س' : currency === 'AED' ? 'د.إ' : currency === 'KWD' ? 'د.ك' : 'ر.ق'}`;
  };

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(rawSubtotal * (discountPercent / 100));
  const shippingFee = rawSubtotal > 450 || rawSubtotal === 0 ? 0 : 35;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'AYN10' || code === 'عين10') {
      setDiscountPercent(10);
      setCouponSuccess('تم تفعيل كود الخصم (10%) بنجاح!');
    } else if (code === 'VIP' || code === 'الوجهاء') {
      setDiscountPercent(15);
      setCouponSuccess('تم تفعيل خصم الوجهاء الخاص (15%)!');
    } else {
      setCouponError('كود الخصم غير صالح أو منتهي الصلاحية');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerCity) return;
    setOrderCompleted(true);
  };

  const getWhatsAppOrderText = () => {
    let text = `*طلب جديد من متجر عين هاب (AYN HUB)*\n`;
    text += `👤 العميل: ${customerName || 'عميل كريم'}\n`;
    text += `📱 الجوال: ${customerPhone || '-'}\n`;
    text += `📍 المدينة: ${customerCity || '-'}\n\n`;
    text += `*تفاصيل المقتنيات:*\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} (${item.selectedVolume}) - عدد: ${item.quantity} = ${item.product.price * item.quantity} ر.س\n`;
    });
    text += `\n💵 المجموع النهائي: ${finalTotal} ر.س\n`;
    text += `🚚 الشحن: ${shippingFee === 0 ? 'مجاني للطلبات فوق 450 ر.س' : '35 ر.س'}\n`;
    if (discountPercent > 0) text += `🏷️ تم تطبيق كود خصم: ${discountPercent}%\n`;
    return encodeURIComponent(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-y-0 left-0 max-w-full flex pl-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#171b1e] border-r border-[var(--line)] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[var(--line)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[var(--gold)]" />
              <h2 className="text-lg font-bold font-serif text-[#f5f2ea]">
                سلة المقتنيات ({items.reduce((c, i) => c + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-[#a8abad] hover:text-[#f5f2ea] hover:bg-[#1b2024]"
              aria-label="إغلاق السلة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#343a3f] mx-auto mb-4" />
                <h3 className="text-base font-bold text-[#f5f2ea] font-serif mb-1">
                  سلة المقتنيات فارغة
                </h3>
                <p className="text-xs text-[#a8abad] mb-6">
                  استكشف أندر أدهان العود والعطور الملكية وأضفها إلى سلتك
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn secondary !py-2 !px-5 text-xs"
                >
                  تصفح المنتجات الآن
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Progress */}
                <div className="p-3 bg-[#1b2024] rounded-xl border border-[rgba(197,160,89,0.15)] text-xs">
                  {rawSubtotal >= 450 ? (
                    <div className="flex items-center gap-2 text-[var(--gold)] font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>تهانينا! مؤهل لشحن ملكي مجاني ومحمي 🚚</span>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[#a8abad]">
                        أضف مقتنيات بقيمة{' '}
                        <strong className="text-[var(--gold)]">
                          {formatPrice(450 - rawSubtotal)}
                        </strong>{' '}
                        للحصول على شحن مجاني
                      </p>
                      <div className="w-full bg-[#22282c] h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-[var(--gold)] h-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (rawSubtotal / 450) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Items List */}
                <div className="divide-y divide-[var(--line)]">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedVolume}`}
                      className="py-3 flex gap-3 items-center"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg bg-[#22282c] shrink-0 border border-[var(--line)]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#f5f2ea] truncate font-serif">
                          {item.product.name}
                        </h4>
                        <span className="text-[11px] text-[var(--gold)] block">
                          {item.selectedVolume}
                        </span>
                        <div className="text-xs font-bold text-[#f5f2ea] mt-1">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>

                        {/* Qty controller */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-[#343a3f] rounded bg-[#111417]">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQty(item.product.id, item.selectedVolume, -1)
                              }
                              className="px-2 py-0.5 text-xs text-[#a8abad] hover:text-[#f5f2ea]"
                            >
                              -
                            </button>
                            <span className="px-2 py-0.5 text-xs font-bold text-[#f5f2ea]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQty(item.product.id, item.selectedVolume, 1)
                              }
                              className="px-2 py-0.5 text-xs text-[#a8abad] hover:text-[#f5f2ea]"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              onRemoveItem(item.product.id, item.selectedVolume)
                            }
                            className="text-[#a8abad] hover:text-rose-400 p-1 mr-auto"
                            title="حذف من السلة"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyCoupon} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="كود الخصم (جرب AYN10)"
                      className="!py-2 !px-3 text-xs !bg-[#1b2024]"
                    />
                    <button
                      type="submit"
                      className="btn secondary !py-2 !px-4 text-xs shrink-0"
                    >
                      <Tag className="w-3.5 h-3.5 ml-1" />
                      تطبيق
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-[11px] text-rose-400 mt-1">{couponError}</p>
                  )}
                  {couponSuccess && (
                    <p className="text-[11px] text-emerald-400 mt-1">{couponSuccess}</p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Footer with Calculations and Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[var(--line)] bg-[#14181b] space-y-3">
              <div className="space-y-1.5 text-xs text-[#a8abad]">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span className="text-[#f5f2ea]">{formatPrice(rawSubtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>خصم الكوبون ({discountPercent}%):</span>
                    <span>- {formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>الشحن والتوصيل:</span>
                  <span className="text-[#f5f2ea]">
                    {shippingFee === 0 ? 'مجاني' : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#f5f2ea] pt-2 border-t border-[var(--line)]">
                  <span>الإجمالي الكلي:</span>
                  <span className="text-[var(--gold)]">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCheckoutModalOpen(true)}
                className="btn primary w-full !py-3 text-sm font-bold shadow-lg shadow-[#c5a059]/20"
                id="cart-checkout-btn"
              >
                <span>متابعة إتمام الطلب</span>
                <ArrowLeft className="w-4 h-4 mr-2" />
              </button>

              <button
                type="button"
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-[#a8abad] hover:text-rose-400 transition-colors pt-1"
              >
                تفريغ السلة بالكامل
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setIsCheckoutModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#171b1e] border border-[var(--gold)]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsCheckoutModalOpen(false)}
              className="absolute top-4 left-4 p-2 text-[#a8abad] hover:text-[#f5f2ea]"
            >
              <X className="w-5 h-5" />
            </button>

            {orderCompleted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-[#f5f2ea] mb-2">
                  تم تأكيد طلبك بنجاح!
                </h3>
                <p className="text-xs sm:text-sm text-[#a8abad] mb-6 leading-relaxed">
                  شكراً لاختيارك دار عين هاب. سيتواصل معك ممثل خدمة الوجهاء لتأكيد العنوان
                  وتجهيز الشحن المبرد والفاخر فوراً.
                </p>

                <div className="p-4 bg-[#1b2024] rounded-xl border border-[var(--line)] text-right text-xs mb-6 space-y-1">
                  <p>
                    <strong className="text-[#f5f2ea]">العميل:</strong> {customerName}
                  </p>
                  <p>
                    <strong className="text-[#f5f2ea]">المدينة:</strong> {customerCity}
                  </p>
                  <p>
                    <strong className="text-[#f5f2ea]">الإجمالي:</strong> {formatPrice(finalTotal)}
                  </p>
                </div>

                <a
                  href={`https://wa.me/966500000000?text=${getWhatsAppOrderText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary w-full !py-3 text-xs mb-3"
                >
                  إرسال تفاصيل الفاتورة عبر واتساب
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onClearCart();
                    setIsCheckoutModalOpen(false);
                    onClose();
                  }}
                  className="btn secondary w-full !py-2.5 text-xs"
                >
                  العودة للتسوق
                </button>
              </div>
            ) : (
              <div>
                <span className="kicker">إتمام الطلب الملكي</span>
                <h3 className="text-2xl font-serif font-bold text-[#f5f2ea] mb-4">
                  بيانات التوصيل والاستلام
                </h3>

                <form onSubmit={handleCompleteOrder} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#f5f2ea] mb-1">
                      الاسم الكريم:
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="مثال: عبدالمحسن بن سلطان"
                      className="text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#f5f2ea] mb-1">
                        رقم الجوال:
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                        className="text-sm text-right"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#f5f2ea] mb-1">
                        المدينة / الدولة:
                      </label>
                      <input
                        type="text"
                        required
                        value={customerCity}
                        onChange={(e) => setCustomerCity(e.target.value)}
                        placeholder="الرياض / أبوظبي / الكويت..."
                        className="text-sm"
                      />
                    </div>
                  </div>

                  {/* Payment Method Notice */}
                  <div className="p-3 bg-[#1b2024] rounded-xl border border-[rgba(197,160,89,0.2)] text-xs text-[#a8abad]">
                    <span className="text-[var(--gold)] font-bold block mb-1">
                      طرق الدفع المعتمدة:
                    </span>
                    مدى، فيزا، Apple Pay، أو الدفع عند الاستلام لمناطق مختارة بالرياض.
                  </div>

                  <div className="pt-3 border-t border-[var(--line)] flex gap-3">
                    <button
                      type="submit"
                      className="btn primary flex-1 !py-3 font-bold text-xs"
                      id="submit-order-btn"
                    >
                      تأكيد الطلب الآن ({formatPrice(finalTotal)})
                    </button>
                    <a
                      href={`https://wa.me/966500000000?text=${getWhatsAppOrderText()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn secondary !py-3 text-xs"
                      title="طلب سريع عبر واتساب"
                    >
                      طلب فوري بالواتساب
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
