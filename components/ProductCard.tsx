"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}
      className="block rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4 bg-background">
        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.price}</p>
        <p className="text-sm text-foreground/80">{product.description}</p>
      </div>
    </Link>
  );
}
