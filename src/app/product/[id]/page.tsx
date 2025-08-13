// src/app/products/page.tsx
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("فشل في جلب المنتجات");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: any) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain"
          />
          <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </Link>
      ))}
    </main>
  );
}
