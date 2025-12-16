import { Link, useLocation } from "wouter";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  const NavLinks = () => (
    <>
      <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
        Home
      </Link>
      <Link href="/shop" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/shop' ? 'text-primary' : 'text-muted-foreground'}`}>
        Shop
      </Link>
      <Link href="/shop?category=Jewelry" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Jewelry
      </Link>
      <Link href="/shop?category=Clothing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Clothing
      </Link>
      <Link href="/shop?category=Home Decor" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Home
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="font-serif text-2xl font-bold">Artisan</Link>
                <form onSubmit={handleSearch} className="relative">
                  <Input 
                    placeholder="Search..." 
                    className="pl-8" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                </form>
                <div className="flex flex-col gap-4">
                  <NavLinks />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-serif text-2xl font-bold sm:inline-block">
            Artisan
          </span>
          <span className="font-serif text-xl font-bold sm:hidden">
            Artisan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden md:relative md:block w-full max-w-sm">
             <Input 
                placeholder="Search products..." 
                className="pl-8 w-[200px] focus:w-[300px] transition-all duration-300" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </form>

          <Button variant="ghost" size="icon" className="relative" onClick={() => setLocation('/cart')}>
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
