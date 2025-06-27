import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return <div className="p-6">Product not found.</div>;
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline">&larr; Back</Link>
      <div className="relative h-80 w-full mt-4 mb-6">
        <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
      </div>
      <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-500 mb-4">{product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}
