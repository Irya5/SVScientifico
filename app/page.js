"use client";
import Image from "next/image";
import HeroImg from "@/public/assets/heroImg.png";
import Serve1 from "@/public/assets/what-serves/serve1.png";
import Serve2 from "@/public/assets/what-serves/serve2.png";
import Serve3 from "@/public/assets/what-serves/serve3.png";
import WhyUs1 from "@/public/assets/why-us/why1.svg";
import WhyUs2 from "@/public/assets/why-us/why2.svg";
import WhyUs3 from "@/public/assets/why-us/why3.svg";
import WhyUs4 from "@/public/assets/why-us/why4.svg";
import WhyBgImg from "@/public/assets/why-us/whyBg.svg";
import PartnerImg from "@/public/assets/partners.png";
import ReviewImg from "@/public/assets/reviews/review_stars.svg";

import { TbArrowNarrowRight } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiCopy, FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function Home() {

	const [setTypingComplete] = useState(false);
	const [isCopiedEmail, setIsCopiedEmail] = useState(false);

	const handleCopyEmail = (email) => {
		navigator.clipboard.writeText(email)
			.then(() => {
				setIsCopiedEmail(true);
				setTimeout(() => setIsCopiedEmail(false), 10000);
			})
			.catch((err) => console.error("Failed to copy text: ", err));
	};

	const [isCopiedPhone, setIsCopiedPhone] = useState(false);

	const handleCopyPhone = (phoneNumber) => {
		navigator.clipboard.writeText(phoneNumber)
			.then(() => {
				setIsCopiedPhone(true);
				setTimeout(() => setIsCopiedPhone(false), 10000);
			})
			.catch((err) => console.error("Failed to copy text: ", err));
	};

	return (
		<main className="min-h-screen bg-[#FAFCFF]">
			<div className="flex flex-col items-center">
				<div className="flex items-end justify-start col-span-2 mt-4">
					<Image src={HeroImg} alt="hero_img" width={690} height={390} />
				</div>
				<div className="md:text-md text-sm text-secondary font-gt-super mt-2 text-[15px]">
					India&apos;s Most Trusted Laboratory Supplier
				</div>
				<div className="text-[45px] md:text-[36px] mt-4 text-center font-gt-super w-full max-w-[1000px] h-[175px] sm:h-[175px] md:h-[100px] lg:h-[90px] px-4">
					<span className="text-[#242E49]">We provide</span>{" "}
					<span className="text-[#0F67FD] relative font-gt-super-it">
						{/* Animated Text */}
						<Typewriter
							words={[
								"Laboratory Equipments",
								"Laboratory Chemicals",
								"Laboratory Glassware",
								"Trusted Products",
								"Customer Satisfaction",
							]}
							loop={0}
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
							onLoopDone={() => setTypingComplete(true)}
						/>
					</span>
				</div>
			</div>

			<div className="bg-[#242E49] md:mx-20 mx-4 md:h-[350px] h-[650px] my-10 rounded-xl brand-background-svg flex md:items-center items-start md:pl-28 pl-6 pt-8">
				<div className="flex flex-col">
					<div className="text-[#DEE3E8] border border-[#DEE3E8] py-3 px-7 rounded-[9px] text-sm w-fit font-gt-super">
						Our Brands
					</div>
					<div className="mt-6 text-[#FDFCFF] text-[48px] font-[700]">
						Authorised <br />
						Distributor
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center py-10 ">
				<div className="max-w-4xl flex flex-col items-center md:grid grid-cols-2 gap-8 my-10 mx-4">
					<div className="text-[#242E49] flex flex-col md:items-start items-center ">
						<ul className="text-sm list-disc pl-4 font-gt-super">
							<li>Our Services</li>
						</ul>
						<div className="md:text-[48px] text-[36px] font-[500]">What We Serve</div>
					</div>
					<div className="text-[#5D6A85] text-md font-regular leading-7 md:text-left text-center">
						We offer an extensive selection of chemicals, glassware, and laboratory
						equipment tailored to meet the diverse requirements of industrial setups and
						institutes.
					</div>
				</div>

				<div className="max-w-5xl flex flex-col md:grid grid-cols-3 gap-8 my-10 mx-4">
					{/* First card */}
					<div className="flex flex-col p-4 rounded-[12px] cursor-pointer hover:shadow-serve group">
						<Image
							src={Serve1}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md w-full"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500] font-bold group-hover:text-black">
							Chemical Solutions
						</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16 group-hover:text-black">
							Precision in every chemical, ensuring optimal performance.
						</div>
						<div className="w-full flex justify-end mt-2">
							<div className="group flex items-center gap-2 text-white w-fit bg-[#242D47] group-hover:bg-blue-600 py-3 px-3 rounded-[12px] transition-all duration-300">
								<TbArrowNarrowRight size={24} className="group-hover:hidden text-white" />

								<span className="group-hover:block hidden text-sm font-bold">View More</span>
								<TbArrowNarrowRight size={24} className="group-hover:block hidden" />
							</div>
						</div>
					</div>

					{/* Second card */}
					<div className="flex flex-col p-4 rounded-[12px] cursor-pointer hover:shadow-serve group">
						<Image
							src={Serve2}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md w-full"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500] font-bold group-hover:text-black">Lab Glassware</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16 group-hover:text-black">
							Elevate your experiments with industry-standard laboratory glassware.
						</div>

						<div className="w-full flex justify-end mt-2">
							<div className="group flex items-center gap-2 text-white w-fit bg-[#242D47] group-hover:bg-blue-600 py-3 px-3 rounded-[12px] transition-all duration-300">
								<TbArrowNarrowRight size={24} className="group-hover:hidden text-white" />

								<span className="group-hover:block hidden text-sm font-bold">View More</span>
								<TbArrowNarrowRight size={24} className="group-hover:block hidden" />
							</div>
						</div>
					</div>

					{/* Third card */}
					<div className="flex flex-col p-4 rounded-[12px] cursor-pointer hover:shadow-serve group">
						<Image
							src={Serve3}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md w-full"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500] font-bold group-hover:text-black">
							Lab Equipment
						</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16 group-hover:text-black">
							Cutting-edge laboratory equipment sourced from industry leaders.
						</div>
						<div className="w-full flex justify-end mt-2">
							<div className="group flex items-center gap-2 text-white w-fit bg-[#242D47] group-hover:bg-blue-600 py-3 px-3 rounded-[12px] transition-all duration-300">
								<TbArrowNarrowRight size={24} className="group-hover:hidden text-white" />

								<span className="group-hover:block hidden text-sm font-bold">View More</span>
								<TbArrowNarrowRight size={24} className="group-hover:block hidden" />
							</div>
						</div>
					</div>


				</div>

				<div className="bg-[#242E48] md:h-[702px] h-fit w-full rounded-[24px] mt-20 flex items-center justify-center relative">
					<div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:px-0 px-4 sm:px-8">
						<div className="flex flex-col justify-center gap-4 w-full sm:w-[300px]">
							<div className="text-[#DEE3E8] px-6 py-2 rounded-[12px] border border-[#DEE3E8] w-fit font-gt-super">
								Features
							</div>
							<div className="text-[#FDFCFF] text-[40px] sm:text-[56px] leading-[45px] sm:leading-[60px] font-[700]">
								Why <br />
								Choose us
							</div>
							<div className="text-[#DCE1E8] text-base sm:text-lg">
								Elevate your labs with wide selection of chemicals, glassware, and
								equipment.
							</div>
						</div>
						<div className="flex flex-col md:gap-4 gap-y-8">
							{/* Card 1 */}
							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs1}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md"
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
										Authentic Brands Only
									</div>
									<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
										All products are 100% branded, ensuring authenticity and
										quality with every purchase.
									</div>
								</div>
							</div>

							{/* Card 2 */}
							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs2}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md"
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
										Unbeatable Pricing
									</div>
									<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
										We strive to offer the most competitive prices to our
										customers.
									</div>
								</div>
							</div>

							{/* Card 3 */}
							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs3}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md"
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
										Diverse Product Range
									</div>
									<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
										Your one-stop solution for diverse laboratory needs.
									</div>
								</div>
							</div>

							{/* Card 4 */}
							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs4}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md"
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
										Stock Availability
									</div>
									<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
										Shop with confidence knowing that our inventory is available
										with the products you need.
									</div>
								</div>
							</div>
						</div>
					</div>
					<Image
						src={WhyBgImg}
						alt="why_bg_img"
						width={97}
						height={143}
						className="absolute md:block hidden bottom-0 left-[12%]"
					/>
				</div>

				<div className="max-w-5xl grid md:grid-cols-5 grid-cols-1 md:gap-x-8 gap-y-8 mt-28 mb-20 mx-4">
					<div className="flex flex-col items-start md:col-span-2">
						<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px] font-gt-super">
							Trusted by many
						</button>
						<div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-2 pr-4">
							What people say about us
						</div>
					</div>
					<div className="flex flex-col items-start justify-end">
						<div className="text-[#242E49] text-[36px] font-[700]">30+</div>
						<div className="text-[#5D6A85] text-lg font-[700]">Years of Experience</div>
					</div>
					<div className="flex flex-col items-startt justify-end">
						<div className="text-[#242E49] text-[36px] font-[700]">2K+</div>
						<div className="text-[#5D6A85] text-lg font-[700]">Satisfied Clientage</div>
					</div>
					<div className="flex flex-col items-startt justify-end">
						<div className="text-[#242E49] text-[36px] font-[700]">1K+</div>
						<div className="text-[#5D6A85] text-lg font-[700]">Product Count</div>
					</div>
				</div>

				<div className="mt-8">
					<Image src={PartnerImg} alt="partner_img" className="w-full" />
				</div>

				{/* contact us */}
				<div className="my-20 mx-4">
					<div className="flex flex-col items-center">
						<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px] font-gt-super">
							Contact us
						</button>
						<div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-2 pr-4 font-bold">
							Get in Touch
						</div>
						<div className="text-[#5D6A85] text-left text-md mt-4">
							Ready to level up your Laboratory?
						</div>
					</div>

					<div className="grid md:grid-cols-3 grid-cols-1 gap-8 gap-x-24 max-w-7xl mt-12 text-[#242E49] font-[700] text-md mx-4">
						{/* Mail Section */}
						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14] w-full min-h-[250px]">
							<div className="bg-[#EDF5FF] w-fit p-2 rounded-[9px]">
								<CiMail />
							</div>
							<div className="mt-10">Mail us</div>
							<div className="text-[#5D6A85] font-[400]">We are here to help</div>
							<div className="mt-6 flex items-center space-x-2">
								<a
									href="mailto:svscientificco@gmail.com"
									className="hover:underline duration-200 linear mt-2"
								>
									svscientificco@gmail.com
								</a>
								{isCopiedEmail ?
									(<FiCheck
										className="cursor-pointer text-[#1367F4] text-xl"
									/>) :
									(
										<FiCopy
											className="cursor-pointer text-[#1367F4] text-xl"
											onClick={() => handleCopyEmail('svscientificco@gmail.com')}
										/>
									)}
							</div>
						</div>

						{/* Call Section */}
						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14] w-full min-h-[250px]">
							<div className="bg-[#FFF1F3] w-fit p-2 rounded-[9px]">
								<IoIosCall />
							</div>
							<div className="mt-10">Call us</div>
							<div className="text-[#5D6A85] font-[400]">Mon-Fri from 10am to 5pm</div>
							<div className="mt-6 flex items-center space-x-2">
								<a href="tel:+919119014669">
									<span>+91 9119014669</span>
								</a>
								{isCopiedPhone ? (
									<FiCheck
										className="cursor-pointer text-[#1367F4] text-xl"
									/>
								) : (
									<FiCopy
										className="cursor-pointer text-[#1367F4] text-xl"
										onClick={() => handleCopyPhone('+91 9119014669')}
									/>
								)}
							</div>
						</div>

						{/* Location Section */}
						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14] w-full min-h-[250px]">
							<div className="bg-[#F6F2FF] w-fit p-2 rounded-[9px]">
								<FaLocationDot />
							</div>
							<div className="mt-10">Visit us</div>
							<div className="text-[#5D6A85] font-[400]">Visit our office HQ</div>
							<button
								className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 mt-6 rounded-[9px]"
								onClick={() =>
									window.open(
										"https://www.google.com/maps/dir//s.v+scientific+mzn+address/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390c1b11f0598a57:0xb884f9f824467016?sa=X&ved=1t:3061&ictx=111ps://www.google.com/maps/dir/29.4613312,77.7288238/s.v+scientific+mzn+address/@29.4648898,77.7117666,20.37z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390c1b11f0598a57:0xb884f9f824467016!2m2!1d77.7116855!2d29.4648884?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D.com/maps?q=your+address+here",
										"_blank"
									)
								}
							>
								Get direction
							</button>
						</div>
					</div>


				</div>
			</div>
			{/* footer */}
		</main>
	);
}
