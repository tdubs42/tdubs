import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import Navbar from "@/components/NavBar";

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
				<Navbar />
				<main className='px-4 py-10 max-w-7xl mx-auto'>
					{children}
				</main>
			</body>
		</html>
	);
}
