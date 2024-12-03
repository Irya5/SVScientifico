"use client";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ImNewTab } from "react-icons/im";
import { useState } from "react";
import { FiCopy } from 'react-icons/fi';

export default function ContactUs() {

	const phoneNumber = "+91 9119014669";
	const [emailTooltip, setEmailTooltip] = useState("Copy");
	const [phoneTooltip, setPhoneTooltip] = useState("Copy");

	// Handle copying email text
	const handleCopyEmail = (text) => {
		navigator.clipboard.writeText(text);
		setEmailTooltip("Copied!");
		setTimeout(() => setEmailTooltip("Copy"), 5000);
	};

	// Handle copying phone number
	const handleCopyPhone = (text) => {
		navigator.clipboard.writeText(text);
		setPhoneTooltip("Copied!");
		setTimeout(() => setPhoneTooltip("Copy"), 5000);
	};

	return (
		<main className="bg-[#FAFCFF] md:px-24 py-20 md:px-24 px-4">
			<div className="">
				<div className="text-[#242E49]">
					<ul className="text-sm list-disc pl-4 md:block hidden font-gt-super">
						<li>Contact us</li>
					</ul>
					<div className="text-[36px] md:text-[48px] font-[500] text-center md:text-left  leading-[50px] mt-4  w-full md:w-1/2">
						Connect with us
					</div>
					<div className="mt-4 md:px-0 px-8 text-[#5D6A85] text-md  text-center md:text-left">
						Get in Touch: Contact Us for Inquiries and Assistance
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-3 grid-cols-1 gap-20 mt-16 text-[#242E49] font-[700] text-md px-4 md:px-8">
				<div className="flex flex-col items-center md:items-start">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<a href="mailto:svscientificco@gmail.com" className="hover:underline duration-200 linear mt-2">
							<CiMail title="Mail" />
						</a>
					</div>
					<div className="mt-4 text-center md:text-left">Mail us</div>
					<div className="text-[#5D6A85] font-[400] text-center md:text-left">We are here to help</div>
					<div className="text-[#5D6A85] mt-2 flex items-center justify-center md:justify-start space-x-2">
						<a href="mailto:svscientificco@gmail.com" className="hover:underline duration-200 linear mt-2">
							svscientificco@gmail.com
						</a>
						<FiCopy
							className="cursor-pointer text-[#1367F4] text-xl"
							title={emailTooltip}
							onClick={() => handleCopyEmail('svscientificco@gmail.com')}
						/>
					</div>
				</div>

				<div className="flex flex-col items-center md:items-start">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<IoIosCall
							className="cursor-pointer"
							title={phoneTooltip}
							onClick={() => handleCopyPhone('+91 9119014669')}
						/>
					</div>
					<div className="mt-4 text-center md:text-left">Call us</div>
					<div className="text-[#5D6A85] font-[400] text-center md:text-left">Mon-Fri from 10am to 5pm</div>
					<div className="text-[#5D6A85] mt-2 flex items-center justify-center md:justify-start space-x-2">
						<a href="tel:+919119014669">
							<span>+91 9119014669</span>
						</a>
						<FiCopy
							className="cursor-pointer text-[#1367F4] text-xl"
							title={phoneTooltip}
							onClick={() => handleCopyPhone('+91 9119014669')}
						/>
					</div>
				</div>

				<div className="flex flex-col items-center md:items-start">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<FaLocationDot
							onClick={() =>
								window.open(
									"https://www.google.com/maps/dir//s.v+scientific+mzn+address/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390c1b11f0598a57:0xb884f9f824467016?sa=X&ved=1t:3061&ictx=111ps://www.google.com/maps/dir/29.4613312,77.7288238/s.v+scientific+mzn+address/@29.4648898,77.7117666,20.37z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390c1b11f0598a57:0xb884f9f824467016!2m2!1d77.7116855!2d29.4648884?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D.com/maps?q=your+address+here",
									"_blank"
								)
							}
							title="Go to Map"
						/>
					</div>
					<div className="mt-4 text-center md:text-left">Visit us</div>
					<div className="flex items-center justify-center md:justify-start">
						<span className="text-[#5D6A85] font-[400] text-left md:text-left">
							13, Ramlila Bhawan, New Mandi,
						</span>
						<ImNewTab
							onClick={() =>
								window.open(
									"https://www.google.com/maps/dir//s.v+scientific+mzn+address/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390c1b11f0598a57:0xb884f9f824467016?sa=X&ved=1t:3061&ictx=111ps://www.google.com/maps/dir/29.4613312,77.7288238/s.v+scientific+mzn+address/@29.4648898,77.7117666,20.37z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390c1b11f0598a57:0xb884f9f824467016!2m2!1d77.7116855!2d29.4648884?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D.com/maps?q=your+address+here",
									"_blank"
								)
							}
							title="Open in new tab"
							className="cursor-pointer text-[#1367F4] text-xl ml-2"
						/>
					</div>
					<div className="text-[#5D6A85] font-[400] text-left md:text-left">
						Muzaffar Nagar, U.P.-251001
					</div>
				</div>
			</div>
		</main>
	);
}
