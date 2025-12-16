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
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group cursor-pointer h-full"
      >
        <Card className="h-full border-none shadow-none bg-transparent overflow-hidden">
          <CardContent className="p-0 relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-white/90 text-primary hover:bg-white text-[10px] px-1.5 py-0.5 h-5" variant="secondary">
                New
              </Badge>
            )}
            {product.isPopular && (
              <Badge className="absolute top-2 right-2 bg-primary/90 text-primary-foreground hover:bg-primary text-[10px] px-1.5 py-0.5 h-5">
                Best
              </Badge>
            )}
            
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <Button size="sm" variant="secondary" className="w-[90%] translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 text-xs h-8">
                Quick View
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-2.5 space-y-0.5">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider truncate w-full">{product.category}</span>
            <h3 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-1 w-full">
              {product.name}
            </h3>
            <p className="text-sm font-semibold">${product.price}</p>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
