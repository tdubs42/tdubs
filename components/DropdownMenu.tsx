import React from 'react';
import Link from "next/link";
import PagesArray from "../utils/pagesArray";

const DropdownMenu = () => {
	const links = PagesArray()

	return (
			<div className="dropdown pl-6">
				<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" className="stroke-base-content fill-none" height="30" width="30"  viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
					</svg>
				</div>
				<ul tabIndex={0}
						className="menu menu-sm dropdown-content mt-12 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
					<li key="home">
						<Link href="/" className="capitalize text-xl text-base-content" key="home">
							home
						</Link>
					</li>
					{links.map((link) => {
						return (
							<li key={link.href}>
								<Link href={link.href} className='capitalize text-xl text-base-content' key={link.label}>
									{link.label}
								</Link>
							</li>);
					})}
				</ul>
			</div>
	);
};

export default DropdownMenu;