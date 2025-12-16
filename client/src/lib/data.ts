import jewelry1 from '@assets/stock_images/handcrafted_jewelry__128c8fcd.jpg';
import jewelry2 from '@assets/stock_images/handcrafted_jewelry__ebf3ae00.jpg';
import clothing1 from '@assets/stock_images/hand_embroidered_flo_f5ed75df.jpg';
import clothing2 from '@assets/stock_images/hand_embroidered_flo_e0e4e6d3.jpg';
import home1 from '@assets/stock_images/handcrafted_pottery__416d7070.jpg';
import home2 from '@assets/stock_images/handcrafted_pottery__14a8f800.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  category: "Jewelry" | "Clothing" | "Wedding Accessories" | "Home Decor";
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  // Jewelry
  {
    id: "j1",
    name: "Golden Heirloom Necklace",
    description: "Hand-forged brass with semi-precious stones.",
    price: 120,
    category: "Jewelry",
    image: jewelry1,
    isPopular: true,
  },
  {
    id: "j2",
    name: "Silver Filigree Earrings",
    description: "Intricate silver wirework by master artisans.",
    price: 85,
    category: "Jewelry",
    image: jewelry2,
    isNew: true,
  },
  {
    id: "j3",
    name: "Hammered Gold Bangle",
    description: "Textured finish, adjustable sizing.",
    price: 95,
    category: "Jewelry",
    image: jewelry1,
  },
  {
    id: "j4",
    name: "Gemstone Drop Pendant",
    description: "Natural quartz set in recycled silver.",
    price: 110,
    category: "Jewelry",
    image: jewelry2,
  },
  {
    id: "j5",
    name: "Vintage Pearl Choker",
    description: "Freshwater pearls with a vintage brass clasp.",
    price: 145,
    category: "Jewelry",
    image: jewelry1,
  },
  {
    id: "j6",
    name: "Minimalist Silver Band",
    description: "Sleek sterling silver ring for everyday wear.",
    price: 45,
    category: "Jewelry",
    image: jewelry2,
  },
  {
    id: "j7",
    name: "Bohemian Beaded Anklet",
    description: "Colorful glass beads strung on durable cord.",
    price: 35,
    category: "Jewelry",
    image: jewelry1,
  },
  {
    id: "j8",
    name: "Rose Gold Studs",
    description: "Delicate rose gold studs with tiny diamonds.",
    price: 180,
    category: "Jewelry",
    image: jewelry2,
  },
  {
    id: "j9",
    name: "Oxidized Silver Necklace",
    description: "Tribal-inspired design with an oxidized finish.",
    price: 130,
    category: "Jewelry",
    image: jewelry1,
  },
  {
    id: "j10",
    name: "Emerald Cut Ring",
    description: "Lab-grown emerald set in 18k gold vermeil.",
    price: 210,
    category: "Jewelry",
    image: jewelry2,
    isNew: true,
  },
  
  // Clothing
  {
    id: "c1",
    name: "Embroidered Silk Tunic",
    description: "Hand-stitched floral patterns on pure silk.",
    price: 180,
    category: "Clothing",
    image: clothing1,
    isPopular: true,
  },
  {
    id: "c2",
    name: "Block Print Cotton Dress",
    description: "Traditional woodblock printing technique.",
    price: 140,
    category: "Clothing",
    image: clothing2,
    isNew: true,
  },
  {
    id: "c3",
    name: "Kantha Stitch Scarf",
    description: "Soft cotton with running stitch embroidery.",
    price: 65,
    category: "Clothing",
    image: clothing1,
  },
  {
    id: "c4",
    name: "Linen Wrap Kurti",
    description: "Breathable organic linen with minimal detailing.",
    price: 120,
    category: "Clothing",
    image: clothing2,
  },
  {
    id: "c5",
    name: "Handwoven Wool Shawl",
    description: "Warm and cozy shawl woven by local artisans.",
    price: 95,
    category: "Clothing",
    image: clothing1,
  },
  {
    id: "c6",
    name: "Indigo Dyed Kaftan",
    description: "Natural indigo dye on soft cotton fabric.",
    price: 85,
    category: "Clothing",
    image: clothing2,
  },
  {
    id: "c7",
    name: "Silk Blend Dupatta",
    description: "Elegant dupatta with zari border work.",
    price: 75,
    category: "Clothing",
    image: clothing1,
  },
  {
    id: "c8",
    name: "Patchwork Bohemian Skirt",
    description: "Vibrant patchwork skirt made from recycled fabrics.",
    price: 60,
    category: "Clothing",
    image: clothing2,
  },
  {
    id: "c9",
    name: "Raw Silk Blouse",
    description: "Tailored blouse made from textured raw silk.",
    price: 110,
    category: "Clothing",
    image: clothing1,
  },
  {
    id: "c10",
    name: "Khadi Cotton Shirt",
    description: "Hand-spun khadi cotton for ultimate comfort.",
    price: 55,
    category: "Clothing",
    image: clothing2,
  },

  // Home Decor
  {
    id: "h1",
    name: "Terracotta Artisan Vase",
    description: "Wheel-thrown clay with matte glaze.",
    price: 75,
    category: "Home Decor",
    image: home1,
    isPopular: true,
  },
  {
    id: "h2",
    name: "Woven Jute Rug",
    description: "Natural fibers, hand-loomed for durability.",
    price: 200,
    category: "Home Decor",
    image: home2,
  },
  {
    id: "h3",
    name: "Ceramic Table Lamp",
    description: "Hand-painted ceramic base with linen shade.",
    price: 150,
    category: "Home Decor",
    image: home1,
    isNew: true,
  },
  {
    id: "h4",
    name: "Carved Wooden Bowl",
    description: "Solid mango wood with intricate carving.",
    price: 55,
    category: "Home Decor",
    image: home2,
  },
  {
    id: "h5",
    name: "Macrame Wall Hanging",
    description: "Intricate knot work using organic cotton rope.",
    price: 45,
    category: "Home Decor",
    image: home1,
  },
  {
    id: "h6",
    name: "Brass Oil Lamp",
    description: "Traditional brass lamp for festive occasions.",
    price: 35,
    category: "Home Decor",
    image: home2,
  },
  {
    id: "h7",
    name: "Hand-Tufted Cushion",
    description: "Soft wool cushion with geometric patterns.",
    price: 40,
    category: "Home Decor",
    image: home1,
  },
  {
    id: "h8",
    name: "Rattan Serving Tray",
    description: "Hand-woven rattan tray with sturdy handles.",
    price: 50,
    category: "Home Decor",
    image: home2,
  },
  {
    id: "h9",
    name: "Stoneware Dinner Set",
    description: "Durable stoneware plates and bowls, set of 4.",
    price: 120,
    category: "Home Decor",
    image: home1,
  },
  {
    id: "h10",
    name: "Decorative Wall Mirror",
    description: "Antique-finish mirror with a wooden frame.",
    price: 90,
    category: "Home Decor",
    image: home2,
  },

  // Wedding (Using Jewelry/Clothing images as placeholders)
  {
    id: "w1",
    name: "Bridal Kundan Set",
    description: "Traditional bridal jewelry set with pearls.",
    price: 450,
    category: "Wedding Accessories",
    image: jewelry1,
    isPopular: true,
  },
  {
    id: "w2",
    name: "Embroidered Clutch",
    description: "Velvet clutch with zardosi work.",
    price: 90,
    category: "Wedding Accessories",
    image: clothing2,
  },
  {
    id: "w3",
    name: "Hair Jewelry Pin",
    description: "Gold-plated pin with crystal embellishments.",
    price: 45,
    category: "Wedding Accessories",
    image: jewelry2,
  },
  {
    id: "w4",
    name: "Handcrafted Juttis",
    description: "Leather footwear with silk embroidery.",
    price: 85,
    category: "Wedding Accessories",
    image: clothing1,
  },
  {
    id: "w5",
    name: "Silk Potli Bag",
    description: "Drawstring bag with beadwork and tassels.",
    price: 40,
    category: "Wedding Accessories",
    image: clothing2,
  },
  {
    id: "w6",
    name: "Groom's Brooch",
    description: "Elegant brooch with stone setting.",
    price: 55,
    category: "Wedding Accessories",
    image: jewelry1,
  },
  {
    id: "w7",
    name: "Beaded Waist Belt",
    description: "Adjustable belt with intricate beadwork.",
    price: 70,
    category: "Wedding Accessories",
    image: clothing1,
  },
  {
    id: "w8",
    name: "Ceremonial Tray",
    description: "Decorated tray for wedding rituals.",
    price: 65,
    category: "Wedding Accessories",
    image: home2,
  },
];

export const categories = [
  { name: "Jewelry", image: jewelry1, description: "Timeless elegance" },
  { name: "Clothing", image: clothing1, description: "Woven stories" },
  { name: "Wedding Accessories", image: jewelry2, description: "For your special day" },
  { name: "Home Decor", image: home1, description: "Artful living" },
];
