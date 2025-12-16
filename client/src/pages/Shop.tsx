import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { products } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Shop() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const categoryParam = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState([0, 500]);
  
  // Sync URL param with state if it changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    } else {
      setSelectedCategories([]);
    }
  }, [categoryParam]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const categories = ["Jewelry", "Clothing", "Wedding Accessories", "Home Decor"];

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif font-medium mb-4 text-lg">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`cat-${category}`} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label 
                htmlFor={`cat-${category}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-serif font-medium mb-4 text-lg">Price Range</h3>
        <div className="px-1">
          <Slider 
            defaultValue={[0, 500]} 
            max={500} 
            step={10} 
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 500) && (
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            setSelectedCategories([]);
            setPriceRange([0, 500]);
          }}
        >
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-medium mb-2">Shop Collection</h1>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} results
            </p>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="font-serif text-left">Filters</SheetTitle>
              </SheetHeader>
              <FilterContent />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pr-4">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <X className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-serif mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 500]);
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
