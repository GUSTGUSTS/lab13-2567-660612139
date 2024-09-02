import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Footer from "@components/Footer";
import Header from "@components/Header";
import Navbar from "@components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* {children} */}
        <div style={{ maxWidth: "600px" }} className="mx-auto">
          <Header />
          <Navbar />
          {children}
          <Footer
            year="้2024"
            fullName="Kanathip Chiengthong"
            studentId="660612139"
          />
        </div>
      </body>
    </html>
  );
}
