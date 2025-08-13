// src/app/product/[id]/page.tsx
interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Product Details for ID: {params.id}</h1>
      <p className="mt-4">Here you can show product information and add to cart.</p>
    </main>
  );
}
