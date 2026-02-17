export const headerMenus = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Pages", path: "/pages" },
];

export const heroSlides = [
  {
    id: "slide-1",
    bg: "src/assets/hero-fashion-1.jpg",
    title: "NEW SEASON DROP",
    subtitle: "Fresh looks for your everyday style.",
    cta: "Shop Now",
    ctaLink: "/shop",
  },
  {
    id: "slide-2",
    bg: "src/assets/hero-fashion-2.jpg",
    title: "STREETWEAR ESSENTIALS",
    subtitle: "T-shirts, hoodies, sneakers — all in one place.",
    cta: "Explore",
    ctaLink: "/shop",
  },
  {
    id: "slide-3",
    bg: "src/assets/hero-fashion-3.jpg",
    title: "BESTSELLERS",
    subtitle: "Most loved pieces this week.",
    cta: "Browse",
    ctaLink: "/shop",
  },
];


export const shopCards = [
  {
    id: "women",
    tag: "New Season",
    title: "Women",
    cta: "Explore Collection",
    img: "src/assets/shopcard-women.jpg",
    link: "/shop/k", // senin route yapına göre
  },
  {
    id: "men",
    tag: "Trending",
    title: "Men",
    cta: "Explore Collection",
    img: "src/assets/shopcard-men.jpg",
    link: "/shop/e",
  },
  {
    id: "shoes",
    tag: "Top Rated",
    title: "Shoes",
    cta: "Shop Shoes",
    img: "src/assets/shopcard-shoes.jpg",
    link: "/shop",
  },
];

export const bestSellerTabs = ["Women", "Men", "Shoes", "Accessories"];

export const bestSellerProducts = [
  {
    id: 1,
    name: "Basic Cotton Tee",
    category: "Tişört",
    oldPrice: 399.99,
    price: 249.99,
    img: "src/assets/product-tee.jpg",
  },
  {
    id: 2,
    name: "Everyday Sneakers",
    category: "Ayakkabı",
    oldPrice: 1499.99,
    price: 1199.99,
    img: "src/assets/shopcard-shoes.jpg",
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    category: "Ceket",
    oldPrice: 1899.99,
    price: 1499.99,
    img: "src/assets/product-jacket.jpg",
  },
  {
    id: 4,
    name: "Minimal Shirt",
    category: "Gömlek",
    oldPrice: 999.99,
    price: 799.99,
    img: "src/assets/shopcard-men.jpg",
  },
  {
    id: 5,
    name: "Relaxed Pants",
    category: "Pantalon",
    oldPrice: 1299.99,
    price: 999.99,
    img: "src/assets/product-pants.jpg",
  },
  {
    id: 6,
    name: "Soft Knit Sweater",
    category: "Kazak",
    oldPrice: 1199.99,
    price: 899.99,
    img: "src/assets/product-sweater.jpg",
  },
];

export const benefits = [
  {
    id: 1,
    title: "Easy Returns",
    desc: "Try at home. Return in a few clicks if it’s not for you.",
  },
  {
    id: 2,
    title: "Fast Shipping",
    desc: "Quick delivery options for your new fit.",
  },
  {
    id: 3,
    title: "Quality Materials",
    desc: "Pieces designed for comfort and durability.",
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "We’re here whenever you need help.",
  },
];

export const allProducts = [
  {
    id: "dress",
    name: "Flowy Dress",
    category: "Elbise",
    oldPrice: 1599.99,
    price: 1199.99,
    img: "src/assets/product-dress.jpg",
  },
  {
    id: "skirt",
    name: "Everyday Skirt",
    category: "Etek",
    oldPrice: 899.99,
    price: 699.99,
    img: "src/assets/product-skirt.jpg",
  },
  {
    id: "jacket",
    name: "Light Jacket",
    category: "Ceket",
    oldPrice: 1799.99,
    price: 1399.99,
    img: "src/assets/product-jacket-2.jpg",
  },
  {
    id: "tee",
    name: "Graphic Tee",
    category: "Tişört",
    oldPrice: 499.99,
    price: 349.99,
    img: "src/assets/product-tee.jpg",
  },
  {
    id: "pants",
    name: "Wide Leg Pants",
    category: "Pantalon",
    oldPrice: 1399.99,
    price: 1099.99,
    img: "src/assets/product-pants.jpg",
  },
  {
    id: "shoes",
    name: "Daily Shoes",
    category: "Ayakkabı",
    oldPrice: 1699.99,
    price: 1299.99,
    img: "src/assets/shopcard-shoes.jpg",
  },
];

export const clients = [
  { id: "hooli", name: "Hooli", img: "src/assets/hooli.png" },
  { id: "lyft", name: "Lyft", img: "src/assets/lyft.png" },
  { id: "meta", name: "Meta", img: "src/assets/meta.png" },
  { id: "stripe", name: "Stripe", img: "src/assets/stripe.png" },
  { id: "aws", name: "Amazon Web Services", img: "src/assets/aws.png" },
  { id: "reddit", name: "Reddit", img: "src/assets/reddit.png" },
];

export const blogPosts = [
  {
    id: "post-1",
    img: "src/assets/blog-fashion-1.jpg",
    tags: ["Style", "Trend", "New"],
    title: "How to Build a Capsule Wardrobe",
    desc: "A simple guide to creating outfits with fewer, better pieces.",
    date: "22 April 2024",
    comments: 10,
  },
  {
    id: "post-2",
    img: "src/assets/blog-fashion-2.jpg",
    tags: ["Style", "Tips", "New"],
    title: "Sneaker Styling: 5 Easy Looks",
    desc: "Make your sneakers work for office, street, and weekend fits.",
    date: "22 April 2024",
    comments: 8,
  },
  {
    id: "post-3",
    img: "src/assets/blog-fashion-3.jpg",
    tags: ["Trend", "Guide", "New"],
    title: "Spring Colors That Always Work",
    desc: "Pairing colors with basics for a clean, modern look.",
    date: "22 April 2024",
    comments: 12,
  },
];

export const locations = [
  {
    id: 1,
    city: "Istanbul",
    mall: "Emaar Square AVM",
    address: "34700 Üsküdar",
    phone: "+90 (850) 290 80 90",
    fax: "+90 (216) 123 45 67",
  },
  {
    id: 2,
    city: "Ankara",
    mall: "ANKAmall",
    address: "06560 Yenimahalle",
    phone: "+90 (312) 541 12 12",
    fax: "+90 (312) 123 45 67",
  },
  {
    id: 3,
    city: "Bursa",
    mall: "Korupark",
    address: "16160 Osmangazi",
    phone: "+90 (224) 242 35 35",
    fax: "+90 (224) 123 45 67",
  },
  {
    id: 4,
    city: "Balıkesir",
    mall: "Esas 10 Burda AVM",
    address: "10100 Altıeylül",
    phone: "+90 (266) 266 10 10",
    fax: "+90 (266) 123 45 67",
  },
];

export const relatedProducts = [
  {
    id: 1,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
  {
    id: 2,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
  {
    id: 3,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
  {
    id: 4,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
  {
    id: 5,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
  {
    id: 6,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
  {
    id: 7,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
  {
    id: 8,
    name: "Product Name",
    category: "Frozen Products",
    img: "src/assets/pillow.jpg",
    oldPrice: 16.48,
    price: 6.48,
  },
];

