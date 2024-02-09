import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Grey Way Web Design and Photography",
	description: "Faith-Driven Web & Photo Excellence. Transform Your Digital and Visual Space.",
};

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<Navbar/>
		<main className='px-10 py-10 font-mono'>
			{children}
		</main>
		<Footer/>
		</body>
		</html>
	);
}
