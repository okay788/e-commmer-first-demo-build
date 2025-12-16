import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from '@assets/stock_images/woman_artist_paintin_425e9970.jpg';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                100% Handcrafted
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-foreground">
                Carefully Handcrafted <br/>
                <span className="italic text-primary">with Love</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Discover our collection of ethically made, authentic artisanal products that tell a story of tradition, skill, and human touch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Explore Collection
                </Button>
              </Link>
              <Link href="/shop?filter=popular">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full group border-primary/20 hover:border-primary hover:bg-primary/5">
                  View Best Sellers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground border-t border-border/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="font-semibold text-foreground">2,000+</span> art lovers</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Artisan working" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Featured Artist</p>
                    <p className="text-lg font-serif font-medium text-foreground">Elena Rodriguez</p>
                  </div>
                  <Button size="sm" variant="secondary" className="rounded-full">View Profile</Button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
