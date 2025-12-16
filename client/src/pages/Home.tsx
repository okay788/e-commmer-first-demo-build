import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import PopularProducts from "@/components/sections/PopularProducts";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <PopularProducts />
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-background border-t">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Choose Artisan?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in the power of human touch. Every item in our collection tells a story of dedication, tradition, and skill.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-medium">100% Handmade</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every product is crafted by hand, ensuring that no two pieces are exactly alike. Unique, just like you.
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-medium">Unique Designs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We collaborate with artisans to create exclusive designs that blend traditional techniques with modern aesthetics.
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-medium">Crafted with Care</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quality is paramount. We use premium, ethically sourced materials to ensure longevity and beauty.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
