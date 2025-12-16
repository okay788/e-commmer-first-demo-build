import { Link, useLocation } from "wouter";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
      setIsMobileSearchOpen(false);
      setIsSearchExpanded(false);
      searchInputRef.current?.blur();
    }
  };

  const closeSearch = () => {
    setIsSearchExpanded(false);
    setSearchQuery("");
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
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-2 md:hidden">
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
                <div className="flex flex-col gap-4">
                  <NavLinks />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl font-bold">
              Artisan
            </span>
          </Link>
        </div>

        {/* Desktop Logo - Hide when search is expanded */}
        <AnimatePresence>
          {!isSearchExpanded && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
              className="hidden md:flex items-center space-x-2 mr-6"
            >
              <Link href="/">
                <span className="font-serif text-2xl font-bold whitespace-nowrap">
                  Artisan
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Nav - Hide when search is expanded */}
        <AnimatePresence>
          {!isSearchExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="hidden md:flex items-center gap-6"
            >
              <NavLinks />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className={`flex items-center gap-2 ${isSearchExpanded ? 'flex-1 justify-end' : ''}`}>
          {/* Desktop Search - Expanding */}
          <motion.form 
            layout
            onSubmit={handleSearch} 
            className={`hidden md:relative md:flex items-center transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-full ml-4' : 'w-auto'}`}
          >
             <div className={`relative ${isSearchExpanded ? 'w-full' : 'w-auto'}`}>
               <Input 
                  ref={searchInputRef}
                  placeholder="Search products..." 
                  className={`pl-8 transition-all duration-300 ${isSearchExpanded ? 'w-full' : 'w-[200px] hover:w-[250px]'}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchExpanded(true)}
                />
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                
                {isSearchExpanded && (
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-1 h-7 w-7 text-muted-foreground hover:text-foreground"
                    onClick={closeSearch}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
             </div>
          </motion.form>

          {/* Mobile Search Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" className="relative shrink-0" onClick={() => setLocation('/cart')}>
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar (Expandable) */}
      {isMobileSearchOpen && (
        <div className="md:hidden border-t px-4 py-3 bg-background animate-in slide-in-from-top-2">
          <form onSubmit={handleSearch} className="relative">
            <Input 
              autoFocus
              placeholder="Search products..." 
              className="pl-8 w-full" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </form>
        </div>
      )}
    </nav>
  );
}
