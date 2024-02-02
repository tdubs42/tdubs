import React from 'react';
import Link from "next/link";

const DropdownMenu = () => {
	const links = [
		{href: '/projects', label: 'projects'}, {href: '/hobbies', label: 'hobbies'}, {href: '/contact', label: 'contact us'},
	];

	return (
			<div className="dropdown pl-6">
				<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24"
							 stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
					</svg>
				</div>
				<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content/40 rounded-box w-52">
					{links.map((link) => {
						return (
							<li key={link.href}>
								<Link href={link.href} className='capitalize text-xl'>
									{link.label}
								</Link>
							</li>);
					})}
				</ul>
			</div>
	);
};

export default DropdownMenu;