export const headerMenus = [
  { label: "Home", path: "/"},
  { label: "Shop", path: "/shop"},
  { label: "About", path: "/about"},
  { label: "Blog", path: "/blog"},
  { label: "Contact", path: "/contact"},
  { label: "Pages", path: "/pages"},
];

export const heroSlides = [
  {
    id: "slide-1",
    bg: "src/assets/pizza-with-berries.jpg",
    title: "GROCERIES DELIVERY",
    subtitle: "Fast and reliable delivery to your doorstep.",
    cta: "Start Now",
    ctaLink: "/shop",
  },
  {
    id: "slide-2",
    bg: "src/assets/dinner.jpg",
    title: "FRESH MEALS",
    subtitle: "Premium quality ingredients, delivered fast.",
    cta: "Shop Meals",
    ctaLink: "/shop",
  },
  {
    id: "slide-3",
    bg: "src/assets/barista-drink.jpg",
    title: "COFFEE & DRINKS",
    subtitle: "Discover new tastes for your daily routine.",
    cta: "Explore",
    ctaLink: "/shop",
  },
];


export const shopCards = [
    {id: "ice", tag: "New Arrival", title: "Ice Cream", cta: "Explore Items", img: "src/assets/ice-cream.png"},
    {id: "apple", tag: "Ends Today", title: "Apple", cta: "Explore Items", img: "src/assets/apple.png"},
    {id: "steak", tag: "Best Seller", title: "Steak", cta: "Explore Items", img: "src/assets/steak.png"},
];

export const bestSellerTabs = ["Frozen", "Fruits", "MeatProducts"];

export const bestSellerProducts = [
  { id: 1, name: "Ice Cream", category: "Frozen Products", oldPrice: 16.48, price: 6.48, img: "src/assets/ice-cream.png" },
  { id: 2, name: "Apple", category: "Fruit Products", oldPrice: 16.48, price: 6.48, img: "src/assets/apple.png" },
  { id: 3, name: "Steak", category: "Meat Products", oldPrice: 16.48, price: 6.48, img: "src/assets/steak.png" },
  { id: 4, name: "Ice Cream", category: "Frozen Products", oldPrice: 16.48, price: 6.48, img: "src/assets/ice-cream.png" },
  { id: 5, name: "Apple", category: "Fruit Products", oldPrice: 16.48, price: 6.48, img: "src/assets/apple.png" },
  { id: 6, name: "Steak", category: "Meat Products", oldPrice: 16.48, price: 6.48, img: "src/assets/steak.png" },
];

export const benefits = [
  { id: 1, title: "Easy to use", desc: "Our products are designed with user-friendliness in mind, ensuring a seamless experience." },
  { id: 2, title: "Fast delivery", desc: "Get your products delivered quickly and efficiently, saving you time and effort." },
  { id: 3, title: "Quality products", desc: "We ensure all our products meet the highest quality standards, providing you with reliable and durable items." },
  { id: 4, title: "Non-stop service", desc: "We offer 24/7 support to ensure you never face any issues with our products or services." },
];

export const allProducts = [
  { id: "carafe", name: "Carafe", category: "Kitchen Department", oldPrice: 16.48, price: 6.48, img: "src/assets/carafe.png" },
  { id: "cheese-tray", name: "Cheese Tray", category: "Kitchen Department", oldPrice: 16.48, price: 6.48, img: "src/assets/cheese-tray.png" },
  { id: "bleach", name: "Bleach", category: "Cleaning Department", oldPrice: 16.48, price: 6.48, img: "src/assets/bleach.png" },
  { id: "caramel-candy", name: "Caramel Candies", category: "Grocery Department", oldPrice: 16.48, price: 6.48, img: "src/assets/caramel-candy.png" },
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
    img: "src/assets/avocado-egg.jpg",
    tags: ["Google", "Trend", "New"],
    title: "How to Use Google Trends for Market Research",
    desc: "Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.",
    date: "22 April 2024",
    comments: 10,
  },
  {
    id: "post-2",
    img: "src/assets/sandwiches.jpg",
    tags: ["Google", "Trend", "New"],
    title: "How to Use Google Trends for Market Research",
    desc: "Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.",
    date: "22 April 2024",
    comments: 10,
  },
  {
    id: "post-3",
    img: "src/assets/salad.jpg",
    tags: ["Google", "Trend", "New"],
    title: "How to Use Google Trends for Market Research",
    desc: "Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.",
    date: "22 April 2024",
    comments: 10,
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

