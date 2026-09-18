import React, { useState, useMemo } from 'react';
import { Product, CategoryType } from '../types';
import { Search, Star, Eye, Plus, Check } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  onSelectProduct: (p: Product) => void;
  onAddToCart: (p: Product, volume: string) => void;
  currency: string;
  currencyRate: number;
}

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'all', label: 'كافة المعروضات' },
  { id: 'oud-oil', label: 'دهن العود المعتّق' },
  { id: 'perfumes', label: 'عطور النيش' },
  { id: 'incense', label: 'البخور والدخون' },
  { id: 'censers', label: 'المباخر الكريستالية' },
  { id: 'gifts', label: 'صناديق الإهداء' },
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  currency,
  currencyRate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const formatPrice = (sarPrice: number) => {
    const converted = Math.round(sarPrice * currencyRate);
    return `${converted.toLocaleString('ar-SA')} ${currency === 'SAR' ? 'ر.س' : currency === 'AED' ? 'د.إ' : currency === 'KWD' ? 'د.ك' : 'ر.ق'}`;
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const q = searchTerm.trim().toLowerCase();
        const matchesSearch =
          q === '' ||
          product.name.toLowerCase().includes(q) ||
          product.nameEn.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          (product.notes &&
            (product.notes.top.toLowerCase().includes(q) ||
              product.notes.middle.toLowerCase().includes(q) ||
              product.notes.base.toLowerCase().includes(q)));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured
      });
  }, [products, selectedCategory, searchTerm, sortBy]);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product, product.volumeOptions[0]);
    setRecentlyAddedId(product.id);
    setTimeout(() => setRecentlyAddedId(null), 1600);
  };

  return (
    <section id="catalog" className="section bg-[#111417]">
      <div className="wrap">
        {/* Section Header */}
        <div className="head">
          <div>
            <span className="kicker">مقتنيات عين هاب المختارة</span>
            <h2 className="text-[#f5f2ea] font-serif">نفائس العود والعطور</h2>
            <p className="muted text-sm max-w-lg mt-2">
              تشكيلة حصرية منتقاة بعناية فائقة تليق بعشاق الروائح التراثية النادرة والنقاء المطلق.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0 text-sm muted">
            <span>عدد النتائج:</span>
            <span className="gold font-bold">{filteredProducts.length} منتج</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-[var(--gold)] text-[#111] border-[var(--gold)] shadow-md shadow-[#c5a059]/20'
                  : 'bg-[#171b1e] text-[#a8abad] border-[var(--line)] hover:border-[var(--gold)] hover:text-[#f5f2ea]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filters and Search matching .filters CSS specifications */}
        <div className="filters">
          <label>
            <span className="sr-only">ابحث عن منتج، نغمة عطرية، أو مكون</span>
            <div className="relative">
              <Search className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-[#a8abad] pointer-events-none" />
              <input
                id="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث بالاسم، المكونات (عود، عنبر، مسك، زعفران...)"
                className="pr-12 text-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#a8abad] hover:text-[#f5f2ea] px-2 py-1"
                >
                  مسح
                </button>
              )}
            </div>
          </label>

          <label>
            <span className="sr-only">ترتيب المعروضات</span>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-sm cursor-pointer"
            >
              <option value="featured">المميز والمقترح أولاً</option>
              <option value="rating">الأعلى تقييماً</option>
              <option value="price-asc">السعر: من الأقل للأعلى</option>
              <option value="price-desc">السعر: من الأعلى للأقل</option>
            </select>
          </label>
        </div>

        {/* Products Grid matching .grid .three .product-card .card */}
        {filteredProducts.length === 0 ? (
          <div className="card text-center py-16">
            <p className="text-lg text-[#f5f2ea] mb-2 font-serif">لم نعثر على نتائج مطابقة لبحثك</p>
            <p className="text-sm muted mb-6">جرّب البحث باسم مكون آخر أو تصفح جميع الأقسام</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="btn secondary text-xs"
            >
              إعادة تعيين الفلاتر
            </button>
          </div>
        ) : (
          <div className="grid three">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                id={`product-card-${product.id}`}
                className="card product-card flex flex-col justify-between cursor-pointer group"
                onClick={() => onSelectProduct(product)}
              >
                <div>
                  {/* Product Image */}
                  <div className="product-image relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Tag badge */}
                    {product.tag && (
                      <span className="absolute top-3 right-3 bg-[#111417]/90 text-[var(--gold)] border border-[rgba(197,160,89,0.3)] text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {product.tag}
                      </span>
                    )}

                    {/* Quick View overlay hint */}
                    <div className="absolute inset-0 bg-[#111417]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
                      <span className="text-xs bg-[#171b1e]/90 text-[#f5f2ea] px-3 py-1.5 rounded-full border border-[var(--gold)] flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[var(--gold)]" />
                        نظرة سريعة
                      </span>
                    </div>
                  </div>

                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mt-3 text-xs">
                    <span className="text-[var(--gold)] font-medium">{product.categoryNameAr}</span>
                    <div className="flex items-center gap-1 text-[#e0bc74]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-[#a8abad]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-[#f5f2ea] font-serif text-lg font-bold group-hover:text-[var(--gold)] transition-colors">
                    {product.name}
                  </h3>

                  {/* Description preview */}
                  <p className="text-xs muted line-clamp-2 mt-1 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Fragrance Notes Pills */}
                  {product.notes && (
                    <div className="mt-3 pt-2.5 border-t border-[rgba(197,160,89,0.1)] flex flex-wrap gap-1">
                      <span className="text-[10px] bg-[#22282c] text-[#a8abad] px-2 py-0.5 rounded">
                        {product.notes.top.split('،')[0]}
                      </span>
                      <span className="text-[10px] bg-[#22282c] text-[#a8abad] px-2 py-0.5 rounded">
                        {product.notes.middle.split('،')[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Card: Price & Add Button */}
                <div className="mt-5 pt-3 border-t border-[var(--line)] flex items-center justify-between">
                  <div>
                    <div className="product-price">{formatPrice(product.price)}</div>
                    {product.originalPrice && (
                      <span className="text-xs text-[#666] line-through -mt-1 block">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleQuickAdd(e, product)}
                    className={`btn !py-2 !px-4 text-xs flex items-center gap-1.5 transition-all ${
                      recentlyAddedId === product.id
                        ? '!bg-emerald-600 !text-white !border-emerald-600'
                        : 'primary'
                    }`}
                    title="إضافة سريعة إلى السلة"
                    id={`add-btn-${product.id}`}
                  >
                    {recentlyAddedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>تمت الإضافة</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>إضافة للسلة</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
