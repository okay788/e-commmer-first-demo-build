import { categories } from "@/lib/data";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Curated Categories</h2>
          <p className="text-muted-foreground">Explore our diverse collection of handcrafted treasures, sorted for your convenience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`}>
              <div className="group cursor-pointer relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-white/80 text-sm mb-1">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif text-white">{category.name}</h3>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
