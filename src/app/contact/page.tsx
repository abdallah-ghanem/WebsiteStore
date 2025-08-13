"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!form.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "البريد الإلكتروني غير صحيح";
    if (!form.message.trim()) newErrors.message = "الرسالة مطلوبة";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // هنا ممكن تضيف منطق ارسال البيانات لخادم أو API
      console.log("Form submitted:", form);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">تواصل معنا</h1>

      {submitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
          تم إرسال الرسالة بنجاح! شكرًا لتواصلك معنا.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <label className="block mb-2 font-semibold">
          الاسم
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded mt-1 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </label>

        <label className="block mb-2 font-semibold mt-4">
          البريد الإلكتروني
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded mt-1 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </label>

        <label className="block mb-2 font-semibold mt-4">
          الرسالة
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`w-full p-2 border rounded mt-1 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </label>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          إرسال
        </button>
      </form>
    </main>
  );
}
