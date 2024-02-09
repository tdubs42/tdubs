import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import DropdownMenu from "@/components/DropdownMenu";

const Navbar = () => {
	return (
		<nav className='navbar bg-base-300 border-base-100 border-8 rounded-3xl font-mono'>
			<div className="navbar-start">
				<DropdownMenu />
			</div>
			<div className="navbar-center hidden lg:flex">
				<Link href="/">
					<Image src="/wide-logo-transparent.png" width={400} height={400} alt="Grey Way logo"/>
				</Link>
			</div>
			<div className="navbar-end">
				<ThemeToggle/>
			</div>
		</nav>
	);
};
export default Navbar;