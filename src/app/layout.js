"use client";
import MainLayout from "@/components/MainLayout";
import localFont from "next/font/local";
import UserContextProvider from "../Context/UserContext";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider>
          <UserContextProvider>
            <MainLayout> {children} </MainLayout>
          </UserContextProvider>
        </ChakraProvider>{" "}
      </body>{" "}
    </html>
  );
}
