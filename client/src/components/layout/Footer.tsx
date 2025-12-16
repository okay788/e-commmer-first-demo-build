import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold">Artisan</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrating the beauty of imperfection. Authentic, handcrafted treasures for you and your home.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/shop?category=Jewelry" className="hover:text-primary transition-colors">Jewelry</Link></li>
              <li><Link href="/shop?category=Clothing" className="hover:text-primary transition-colors">Clothing</Link></li>
              <li><Link href="/shop?category=Home Decor" className="hover:text-primary transition-colors">Home Decor</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Artisans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Artisan. All rights reserved. Designed with love.</p>
        </div>
      </div>
    </footer>
  );
}
