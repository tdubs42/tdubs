import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import DropdownMenu from "@/components/DropdownMenu";

const Navbar = () => {
	return (
		<nav className='navbar bg-base-300/100'>
			<div className="navbar-start">
				<DropdownMenu />
			</div>
			<div className="navbar-center hidden lg:flex">
				<Link href="/">
					<Image src="/wide-logo-transparent.png" width={400} height={300} alt="Grey Way logo"/>
				</Link>
			</div>
			<div className="navbar-end">
				<ThemeToggle/>
			</div>
			{/*<div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row justify-items-stretch'>*/}
			{/*	<Link href='/' className='btn btn-primary'>*/}
			{/*		Next.js*/}
			{/*	</Link>*/}
			{/*	<ul className='menu menu-horizontal md:ml-8'>*/}
			{/*		{links.map((link) => {*/}
			{/*			return (*/}
			{/*				<li key={link.href}>*/}
			{/*					<Link href={link.href} className='capitalize'>*/}
			{/*						{link.label}*/}
			{/*					</Link>*/}
			{/*				</li>);*/}
			{/*		})}*/}
			{/*	</ul>*/}
			{/*	<label className="flex cursor-pointer gap-2">*/}
			{/*		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"*/}
			{/*				 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
			{/*			<circle cx="12" cy="12" r="5"/>*/}
			{/*			<path*/}
			{/*				d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>*/}
			{/*		</svg>*/}
			{/*		<input type="checkbox" value="dim" className="toggle theme-controller"/>*/}
			{/*		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"*/}
			{/*				 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
			{/*			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>*/}
			{/*		</svg>*/}
			{/*	</label>*/}
			{/*</div>*/}
		</nav>
	);
};
export default Navbar;