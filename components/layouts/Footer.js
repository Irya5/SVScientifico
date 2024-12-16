'use client';

import LogoFooterImg from "@/public/assets/logo_footer.svg";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {

	const footerLinks = [
		{ name: "Home", route: "/" },
		{ name: "About us", route: "/about-us" },
		{ name: "Products", route: "/products" },
		{ name: "Contact us", route: "/contact-us" },
		{ name: "Pricelists", route: "/pricelists" },
	];

	return (
		<div className="bg-[#242E48] flex items-center justify-center px-16 py-20 rounded-t-[24px] mt-10">
			<div className="max-w-4xl flex md:flex-row flex-col md:items-center justify-between w-full">
				<div className="flex flex-col md:items-start items-center">
					<Image src={LogoFooterImg} alt="logo" />
					<div className="text-[#BEC5D2] md:text-left text-center text-md w-[250px] mt-6">
						S.V. Scientific Co was established in 1991 with a vision to redefine
						industry standards, we take pride in our commitment to delivering quality
						products.
					</div>
				</div>

				<div className="flex flex-col gap-5 font-[500] text-[#FDFCFF] md:mx-25 mt-10">
					{footerLinks.map((link) => (
						<Link
							href={link.route}
							key={link.name}
							className="cursor-pointer transform transition-all duration-200 ease-in-out hover:translate-x-[5px]" // Move to the right on hover
						>
							{link.name}
						</Link>
					))}
				</div>


				<div className="flex flex-col gap-4 text-[#FDFCFF] md:mx-25 mt-10">
					<div className="hover:translate-x-[5px]">
						<a onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=svscientificco@gmail.com', '_blank')}>
							<CiMail />
							<div>svscientificco@gmail.com</div>
						</a>
					</div>
					<div className="hover:translate-x-[5px]">
						<a href="tel:+919119014669">
							<IoIosCall />
							<div className="mt-1">+91 9119014669</div>
						</a>
					</div>
					<div className="hover:translate-x-[5px]">
						<FaLocationDot />
						<div className="w-[230px] mt-1" >
							<a href="https://www.google.com/maps/dir//s.v+scientific+mzn+address">
								13 Ram Lila Bhawan, New Mandi, Muzaffar Nagar, Uttar Pradesh-251001
							</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
