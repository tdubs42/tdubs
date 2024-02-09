import React from 'react';
import PagesArray from "../utils/pagesArray";
import Link from "next/link";

const FooterNav = () => {
	const links = PagesArray()

	return (
		<nav className="grid grid-flow-col gap-4">
			<Link href="/" className='link link-hover capitalize text-base-content' key="home">
				home
			</Link>
			{links.map((link) => {
									 return (
										 <Link href={link.href} className='link link-hover capitalize text-base-content' key={link.label}>
											 {link.label}
										 </Link>
									 )
								 }
			)}
		</nav>
	);
};

export default FooterNav;