export type CategoryType = 
  | 'all'
  | 'oud-oil'
  | 'perfumes'
  | 'incense'
  | 'censers'
  | 'gifts';

export interface FragranceNotes {
  top: string;
  middle: string;
  base: string;
}

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  category: CategoryType;
  categoryNameAr: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
  description: string;
  notes?: FragranceNotes;
  volumeOptions: string[];
  inStock: boolean;
  origin: string;
  concentration?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVolume: string;
}

export interface FilterState {
  search: string;
  category: CategoryType;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  inStockOnly: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  productName: string;
  date: string;
}
