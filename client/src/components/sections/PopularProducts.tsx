import { products } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function PopularProducts() {
  const popularProducts = products.filter(p => p.isPopular).slice(0, 10); // Show more popular products

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2 block">Trending Now</span>
            <h2 className="text-3xl md:text-4xl font-serif">Popular Handcrafted Finds</h2>
          </div>
          <Link href="/shop">
            <Button variant="ghost" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
