import { Geist, Geist_Mono, Habibi } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/Context/ThemeContext";
import AuthProvider from "@/components/Authprovider/AuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const habibi = Habibi({
  weight: "400",
  variable: "--font-habibi",
  subsets: ["latin"],
});

export const metadata = {
  title: "nexus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${habibi.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
