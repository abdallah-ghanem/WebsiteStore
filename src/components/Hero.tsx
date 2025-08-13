import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center w-full">
        
        {/* Left side */}
        <div>
          {/* Social icons */}
          <div className="flex gap-6 text-purple-700 mb-6">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>

          {/* Text */}
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Abdallah</h1>
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Software Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md shadow hover:bg-purple-700 transition text-lg">
            Contact Me
          </button>
        </div>

        {/* Right side */}
        <div className="flex justify-center relative">
          <div className="absolute w-80 h-80 bg-purple-200 rounded-full top-10 -z-10"></div>
          <Image
            src="/profile.jpg"
            alt="Abdallah"
            width={320}
            height={320}
            className="object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
