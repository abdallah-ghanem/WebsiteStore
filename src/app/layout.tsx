// src/app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Store",
  description: "My awesome e-commerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
