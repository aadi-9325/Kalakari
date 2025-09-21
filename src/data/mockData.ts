import { Product, Artisan, AIFeature, Category } from '../types';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Handwoven Banarasi Silk Saree',
    nameHindi: 'हस्तनिर्मित बनारसी रेशम साड़ी',
    price: 15000,
    originalPrice: 18000,
    image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?w=400&h=400',
    artisan: 'Meera Devi',
    location: 'Varanasi, UP',
    category: 'Textiles',
    rating: 4.8,
    reviews: 124,
    description: 'Exquisite handwoven Banarasi silk saree with traditional gold zari work, crafted by master weaver Meera Devi.',
    isAIGenerated: true,
    sustainabilityScore: 95
  },
  {
    id: '2',
    name: 'Blue Pottery Decorative Vase',
    nameHindi: 'नीली मिट्टी का सजावटी फूलदान',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.pexels.com/photos/1084558/pexels-photo-1084558.jpeg?w=400&h=400',
    artisan: 'Rajesh Kumar',
    location: 'Jaipur, Rajasthan',
    category: 'Pottery',
    rating: 4.6,
    reviews: 89,
    description: 'Traditional Jaipur blue pottery vase featuring intricate floral patterns, perfect for modern home decor.',
    isAIGenerated: true,
    sustainabilityScore: 88
  },
  {
    id: '3',
    name: 'Madhubani Painting - Peacock',
    nameHindi: 'मधुबनी चित्रकारी - मयूर',
    price: 3500,
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?w=400&h=400',
    artisan: 'Sunita Jha',
    location: 'Madhubani, Bihar',
    category: 'Paintings',
    rating: 4.9,
    reviews: 156,
    description: 'Authentic Madhubani painting depicting a majestic peacock, hand-painted using natural colors and traditional techniques.',
    isAIGenerated: true,
    sustainabilityScore: 92
  },
  {
    id: '4',
    name: 'Kashmiri Pashmina Shawl',
    nameHindi: 'कश्मीरी पश्मीना शॉल',
    price: 8500,
    originalPrice: 10000,
    image: 'https://images.pexels.com/photos/5749137/pexels-photo-5749137.jpeg?w=400&h=400',
    artisan: 'Abdul Rahman',
    location: 'Srinagar, Kashmir',
    category: 'Textiles',
    rating: 4.7,
    reviews: 203,
    description: 'Luxurious hand-woven Kashmiri Pashmina shawl with intricate embroidery, sourced directly from Kashmir valley.',
    sustainabilityScore: 90
  }
];

export const featuredArtisans: Artisan[] = [
  {
    id: '1',
    name: 'Meera Devi',
    craft: 'Banarasi Weaving',
    location: 'Varanasi, UP',
    experience: 25,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=200&h=200',
    story: 'Master weaver with 25 years of experience, preserving the ancient art of Banarasi silk weaving passed down through generations.',
    rating: 4.8,
    totalSales: 1250,
    isVerified: true,
    languages: ['Hindi', 'English', 'Bhojpuri']
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    craft: 'Blue Pottery',
    location: 'Jaipur, Rajasthan',
    experience: 18,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200&h=200',
    story: 'Third-generation potter specializing in traditional Jaipur blue pottery, blending heritage techniques with contemporary designs.',
    rating: 4.6,
    totalSales: 890,
    isVerified: true,
    languages: ['Hindi', 'Rajasthani', 'English']
  },
  {
    id: '3',
    name: 'Sunita Jha',
    craft: 'Madhubani Painting',
    location: 'Madhubani, Bihar',
    experience: 20,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=200&h=200',
    story: 'Renowned Madhubani artist who has exhibited internationally, dedicated to preserving and promoting this ancient art form.',
    rating: 4.9,
    totalSales: 2100,
    isVerified: true,
    languages: ['Hindi', 'Maithili', 'English']
  }
];

export const aiFeatures: AIFeature[] = [
  {
    id: '1',
    title: 'Voice-Powered Onboarding',
    description: 'Register and manage your shop using voice commands in your native language',
    icon: 'Mic',
    benefit: 'No typing required - speak in Hindi, Tamil, Bengali, or any regional language'
  },
  {
    id: '2',
    title: 'AI Story Generator',
    description: 'Transform simple inputs about your craft into compelling brand stories',
    icon: 'BookOpen',
    benefit: 'Professional storytelling that connects with customers emotionally'
  },
  {
    id: '3',
    title: 'Smart Pricing Assistant',
    description: 'Get AI-powered pricing recommendations based on market analysis',
    icon: 'TrendingUp',
    benefit: 'Maximize earnings while staying competitive in the market'
  },
  {
    id: '4',
    title: 'Visual Product Search',
    description: 'Customers can find products by uploading inspiration images',
    icon: 'Search',
    benefit: 'Increase discoverability and match customer vision with your crafts'
  },
  {
    id: '5',
    title: 'Multilingual Chat Support',
    description: 'AI chatbot handles customer queries in 10+ Indian languages',
    icon: 'MessageCircle',
    benefit: 'Never miss a sale due to language barriers'
  },
  {
    id: '6',
    title: 'Heritage Documentation',
    description: 'AI preserves and showcases traditional craft techniques',
    icon: 'Archive',
    benefit: 'Keep cultural heritage alive while attracting modern customers'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Textiles & Fabrics',
    nameHindi: 'वस्त्र और कपड़े',
    image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?w=300&h=200',
    productCount: 1250
  },
  {
    id: '2',
    name: 'Pottery & Ceramics',
    nameHindi: 'मिट्टी के बर्तन',
    image: 'https://images.pexels.com/photos/1084558/pexels-photo-1084558.jpeg?w=300&h=200',
    productCount: 890
  },
  {
    id: '3',
    name: 'Paintings & Art',
    nameHindi: 'चित्रकारी और कला',
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?w=300&h=200',
    productCount: 650
  },
  {
    id: '4',
    name: 'Jewelry & Accessories',
    nameHindi: 'आभूषण और सहायक उपकरण',
    image: 'https://images.pexels.com/photos/1454440/pexels-photo-1454440.jpeg?w=300&h=200',
    productCount: 1100
  },
  {
    id: '5',
    name: 'Home Decor',
    nameHindi: 'घर की सजावट',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?w=300&h=200',
    productCount: 780
  },
  {
    id: '6',
    name: 'Wooden Crafts',
    nameHindi: 'लकड़ी के शिल्प',
    image: 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?w=300&h=200',
    productCount: 420
  }
];