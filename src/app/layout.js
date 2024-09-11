import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/templates/Header";
import Footer from "./components/footer";

const inter = localFont({
  src: "./fonts/Inter-Medium.ttf",
  variable: "--font-inter",
  weight: "500",
});

const poppins = localFont({
  src: "./fonts/Poppins-Black.ttf",
  variable: "--font-poppins",
  weight: "900",
});

const pretendard = localFont({
  src: "./fonts/Pretendard-Bold.otf",
  variable: "--font-pretendard",
  weight: "700",
});

export const metadata = {
  title: "Hyperhire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${pretendard.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
