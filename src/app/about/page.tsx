// src/app/about/page.tsx
export default function About() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
      />
      <p className="text-lg leading-relaxed">
        مرحبًا! أنا Abdallah، مطور ويب متخصص في بناء تطبيقات React وNext.js.
        أحب تطوير الواجهات السريعة والجذابة وتجربة المستخدم الممتازة.
        أعمل على تطوير متاجر إلكترونية وتطبيقات ويب حديثة باستخدام أحدث التقنيات.
      </p>
    </main>
  );
}
