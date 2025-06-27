import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">FutureTech</h1>
        <p className="text-lg text-gray-500">Innovative products for everyday life.</p>
      </section>
      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
