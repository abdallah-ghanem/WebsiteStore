// src/app/checkout/page.tsx
export default function CheckoutPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout 💳</h1>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-2 w-full mb-4 rounded"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Place Order
        </button>
      </form>
    </main>
  );
}
