import { useParams, Link } from "wouter";
import { products } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Heart, Truck, RefreshCcw, ShieldCheck } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
            <Link href="/shop"><Button>Back to Shop</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4" variant="secondary">New Arrival</Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
                    <img src={product.image} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-2">
                <Badge variant="outline" className="rounded-full px-3 py-1 border-primary/20 text-primary bg-primary/5">
                  {product.category}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-foreground">{product.name}</h1>
              <p className="text-2xl font-semibold mb-6">${product.price}</p>
              
              <div className="prose prose-sm text-muted-foreground mb-8">
                <p>{product.description}</p>
                <p>
                  This piece is meticulously handcrafted by skilled artisans. 
                  Slight variations in color and texture may occur, adding to the unique character of the product.
                </p>
              </div>

              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1 gap-2 rounded-full h-12 text-base">
                  <ShoppingBag className="h-5 w-5" /> Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 w-12 p-0">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Separator className="mb-8" />

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-secondary/30 text-primary mt-1">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Free Shipping</h4>
                    <p className="text-xs text-muted-foreground">On all orders over $150</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-secondary/30 text-primary mt-1">
                    <RefreshCcw className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Easy Returns</h4>
                    <p className="text-xs text-muted-foreground">30-day return policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-secondary/30 text-primary mt-1">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Authenticity Guaranteed</h4>
                    <p className="text-xs text-muted-foreground">Verified handcrafted quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-8 border-t">
              <h2 className="text-2xl font-serif mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
