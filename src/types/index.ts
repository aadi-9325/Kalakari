export interface Product {
  id: string;
  name: string;
  nameHindi?: string;
  price: number;
  originalPrice?: number;
  image: string;
  artisan: string;
  location: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  isAIGenerated?: boolean;
  sustainabilityScore?: number;
}

export interface Artisan {
  id: string;
  name: string;
  craft: string;
  location: string;
  experience: number;
  image: string;
  story: string;
  rating: number;
  totalSales: number;
  isVerified: boolean;
  languages: string[];
}

export interface AIFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface Category {
  id: string;
  name: string;
  nameHindi?: string;
  image: string;
  productCount: number;
}