// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "amarok.dev",
  description: "Portfolio of Filipe Amarok — in development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}

        <footer className="absolute bottom-5 w-full text-center text-xs text-gray-500">
          © {new Date().getFullYear()} amarok.dev — crafted by Filipe Amarok
        </footer>
      </body>
    </html>
  );
}
