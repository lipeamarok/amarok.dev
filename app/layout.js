// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import { Background } from "./components/background";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "amarok.dev",
  description: "Portfolio of Filipe Amarok — in development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Background intensity={0.8} enableGrain={true} enableBeams={false} />
        {children}
      </body>
    </html>
  );
}
