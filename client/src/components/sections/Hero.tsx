import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/artisan_hands_workin_2247e338.jpg';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-muted">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>
      
      <div className="container relative h-full flex flex-col justify-center px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white space-y-6"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase border border-white/30 backdrop-blur-sm rounded-full">
            100% Handcrafted
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight">
            Carefully Handcrafted <br/>
            <span className="italic">with Love</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
            Discover our collection of ethically made, authentic artisanal products that tell a story of tradition and skill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/shop">
              <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-white/90 rounded-full">
                Explore Collection
              </Button>
            </Link>
            <Link href="/shop?filter=handmade">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white hover:bg-white/10 hover:text-white rounded-full bg-transparent">
                Why Choose Handmade?
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
