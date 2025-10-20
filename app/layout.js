import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whats from "./components/Whatsapp";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "FLANGTEX | Industrial Flanges & Fittings Supplier",
  description: "Precision-engineered digital experiences for industrial excellence. FLANGTEX blends bold design with seamless functionality—where innovation meets impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-[#f9f9f9] text-[#23272f]`}>
        <Navbar />
        <Whats />
          {children}
        <Footer />
      </body>
    </html>
  );
}