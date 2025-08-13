// src/app/products/page.tsx
"use client";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "ساعة يد فاخرة", price: 1500, image: "/products/watch.jpg" },
    { id: 2, name: "حذاء رياضي", price: 900, image: "/products/sneakers.jpg" },
    { id: 3, name: "حقيبة ظهر", price: 600, image: "/products/backpack.jpg" },
  ];

  return (
    <div className="p-8 font-sans">
      <h1 className="text-center text-3xl mb-8">🛍️ جميع المنتجات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl shadow-md p-4 text-center hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-blue-600 font-bold mb-4">{product.price} ج.م</p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors">
              أضف إلى السلة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
