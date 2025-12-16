import { useLocation } from "wouter";
import { products } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function Search() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(query);
    setLocation(`/search?q=${encodeURIComponent(query)}`);
  };

  const results = searchTerm 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-3xl font-serif mb-6">Search Collection</h1>
          <form onSubmit={handleSearch} className="relative flex gap-2">
            <div className="relative flex-1">
              <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products, categories..." 
                className="pl-10 h-12 text-lg"
              />
              <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8">Search</Button>
          </form>
        </div>

        {searchTerm && (
          <div className="space-y-8">
            <h2 className="text-xl font-medium text-muted-foreground">
              Found {results.length} results for "{searchTerm}"
            </h2>
            
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-lg">
                <p className="text-lg text-muted-foreground">No products found matching your search.</p>
                <Button variant="link" onClick={() => setLocation('/shop')}>Browse all products</Button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
