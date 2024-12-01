"use client";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MenuIcon from "@/public/assets/hamburger.svg";
import { navlinks } from "../layouts/Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileMenu() {
	const pathname = usePathname();
	return (
		<div className="duration-200 linear">
			<Menu __demoMode>
				<MenuButton className="flex items-center gap-4 bg-white p-4 rounded-[12px] cursor-pointer shadow-userCard border border-black/01 ">
					<div className="text-[#242E49] font-[700] text-[16px]">Menu</div>
					<Image src={MenuIcon} alt="logo" width={18} height={12} />
				</MenuButton>

				<MenuItems
					transition
					anchor="bottom end"
					className="w-52 mt-5 shadow-userCard rounded-xl border border-black/01 bg-white p-1 text-md text-[#242E49] transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
				>
					{navlinks.map((navlink) => (
						<MenuItem>
							<Link href={navlink.route}>
								<button className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${navlink.route === pathname ? "text-[#0F67FD] font-[700]": 'hover:text-[#242E49] hover:font-[700]'}`}>
									{navlink.name}
								</button>
							</Link>
						</MenuItem>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
}

{
	/* <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] cursor-pointer shadow-userCard border border-black/01 ">
					<div className="text-[#242E49] font-[700] text-[16px]">Menu</div>
					<Image src={MenuIcon} alt="logo" width={18} height={12} />
				</div> */
}
