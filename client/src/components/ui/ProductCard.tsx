import { Link } from "wouter";
import { Product } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group cursor-pointer h-full"
      >
        <Card className="h-full border-none shadow-none bg-transparent overflow-hidden">
          <CardContent className="p-0 relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            {product.isNew && (
              <Badge className="absolute top-3 left-3 bg-white/90 text-primary hover:bg-white" variant="secondary">
                New
              </Badge>
            )}
            {product.isPopular && (
              <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground hover:bg-primary">
                Bestseller
              </Badge>
            )}
            
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Details
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4 space-y-1">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</span>
            <h3 className="font-medium text-base leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm font-semibold">${product.price}</p>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
