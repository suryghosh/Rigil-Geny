import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Google Fonts
import "./globals.css"; // Make sure your global CSS file is included
import Menu from "@/components/menu/menu";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold weights
  variable: "--font-roboto", // This will create a custom variable for the font
});



export const metadata: Metadata = {
  title: "Hwscc",
  description: "Healthy Wave Skin Care Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`} // Apply the font variables
      >
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Menu />
        </div>
        {children}
      </body>
    </html>
  );
}


//concerns

//analytical tools


//book consultation
//visit the clinic
//google ads