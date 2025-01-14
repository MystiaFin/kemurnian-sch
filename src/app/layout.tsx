import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import NavbarDesktop from "components/NavbarDesktop";
import SubNavbar from "components/SubNavbar";
import ImageSlider from "components/ImageSlider";
import Slide1 from "assets/1.webp";
import Slide2 from "assets/2.webp";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kemurnian School",
  description: "description",
};

interface School {
  name: string;
  address: string;
  image: StaticImageData;
  mapLink: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const images = [Slide1, Slide2, Slide2, Slide1, Slide1, Slide1];
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavbarDesktop />
        <div className="bg-semi-dark-red">
          <div className="container mx-auto">
            <ImageSlider images={images} />
          </div>
        </div>
        <SubNavbar />
        {children}
      </body>
    </html>
  );
}
