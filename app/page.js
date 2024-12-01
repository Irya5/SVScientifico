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
import Link from "next/link";

export default function Home() {
	const [isTypingComplete, setTypingComplete] = useState(false);

	return (
		<main className="min-h-screen bg-[#FAFCFF]">
			<div className="flex flex-col items-center">
				<div className="flex items-end justify-start col-span-2">
					<Image src={HeroImg} alt="hero_img" width={671} height={373} />
				</div>
				<div className="md:text-md text-sm text-secondary font-regular">
					India&apos;s Most Trusted Laboratory Supplier
				</div>
				<div className="text-[32px] md:text-[36px] mt-4 text-center">
					<span className="text-[#242E49]">We provide</span>{" "}
					<span className="text-[#0F67FD] relative">
						{/* Animated Text */}
						<Typewriter
							words={["Laboratory Equipments", "Laboratory Chemicals", "Laboratory Glassware", "Trusted Products", "Customer Satisfaction"]}
							loop={0}
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
							onLoopDone={() => setTypingComplete(true)} 
						/>

						{/* Curved Line */}
						{isTypingComplete && (
							<svg
								className="absolute left-1/2 transform -translate-x-1/2 mt-2"
								width="200"
								height="20"
								viewBox="0 0 200 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 10 Q100 30 200 10"
									stroke="#0F67FD"
									strokeWidth="2"
									fill="none"
								>
									<animate
										attributeName="stroke-dasharray"
										from="0, 200"
										to="200, 0"
										dur="0.5s"
										fill="freeze"
									/>
								</path>
							</svg>
						)}
					</span>
				</div>
			</div>

			<div className="bg-[#242E49] md:mx-20 mx-4 md:h-[350px] h-[550px] my-10 mt-20 rounded-xl brand-background-svg flex md:items-center items-start md:pl-28 pl-6 pt-6">
				<div className="flex flex-col">
					<div className="text-[#DEE3E8] border border-[#DEE3E8] py-3 px-7 rounded-[9px] text-sm w-fit">
						Our Brands
					</div>
					<div className="text-[#FDFCFF] text-[48px] font-[700]">
						Authorised <br />
						Distributor
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center py-10 ">
				<div className="max-w-4xl flex flex-col items-center md:grid grid-cols-2 gap-8 my-10 mx-4">
					<div className="text-[#242E49] flex flex-col md:items-start items-center ">
						<ul className="text-sm list-disc pl-4">
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
					<div className="flex flex-col p-4 rounded-[12px] cursor-pointer hover:shadow-serve">
						<Image
							src={Serve1}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md w-full"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500]">
							Chemical Solutions
						</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16">
							Precision in every chemical, ensuring optimal performance.
						</div>
						<div className="w-full flex justify-end">
							<div className="flex items-center gap-2 text-white w-fit bg-[#242D47] py-3 px-3 rounded-[12px]">
								<TbArrowNarrowRight size={24} />
							</div>
						</div>
					</div>

					<div className="flex flex-col p-4 rounded-[12px] cursor-pointer hover:shadow-serve">
						<Image
							src={Serve2}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md w-full"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500]">Lab Glassware</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16">
							Elevate your experiments with industry-standard laboratory glassware.
						</div>
						<div className="w-full flex justify-end">
							<div className="flex items-center gap-2 text-white w-fit bg-[#242D47] py-3 px-3 rounded-[12px]">
								<TbArrowNarrowRight size={24} />
							</div>
						</div>
					</div>

					<div className="flex flex-col p-4 rounded-[12px] cursor-pointer hover:shadow-serve">
						<Image
							src={Serve3}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md w-full"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500]">Lab Equipment</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16">
							Cutting-edge laboratory equipment sourced from industry leaders.
						</div>
						<div className="w-full flex justify-end">
							<div className="flex items-center gap-2 text-white w-fit bg-[#242D47] py-3 px-3 rounded-[12px]">
								<TbArrowNarrowRight size={24} />
							</div>
						</div>
					</div>
				</div>

				<div className="bg-[#242E48] md:h-[702px] h-fit w-full rounded-[24px] mt-20 flex items-center justify-center relative">
					<div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:px-0 px-8">
						<div className="flex flex-col justify-center gap-4 w-[300px]">
							<div className="text-[#DEE3E8] px-6 py-2 rounded-[12px] border border-[#DEE3E8] w-fit">
								Features
							</div>
							<div className="text-[#FDFCFF] text-[56px] leading-[60px] font-[700]">
								Why <br />
								Choose us
							</div>
							<div className="text-[#DCE1E8] text-lg">
								Elevate your labs with wide selection of chemicals, glassware, and
								equipment.
							</div>
						</div>
						<div className="flex flex-col gap-y-8 md:gap-4">
							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs1}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Authentic Brands Only
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
										All products are 100% branded, ensuring authenticity and
										quality with every purchase.
									</div>
								</div>
							</div>

							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs2}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Unbeatable Pricing
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
										We strive to offer the most competitive prices to our
										costumers.
									</div>
								</div>
							</div>

							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs3}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Diverse Product Range
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
										Your one-stop solution for diverse laboratory needs.
									</div>
								</div>
							</div>

							<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
									<Image
										src={WhyUs4}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Stock Availability
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
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
						<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px]">
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

				<div>
					<Image src={PartnerImg} alt="partner_img" className="w-full" />
				</div>

				{/* contact us */}
				<div className=" my-20 mx-4">
					<div className="flex flex-col items-center">
						<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px]">
							Contact us
						</button>
						<div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-2 pr-4">
							Get in Touch
						</div>
						<div className="text-[#5D6A85] text-md mt-4">
							Ready to level up your Laboratory?
						</div>
					</div>

					<div className="grid md:grid-cols-3 grid-cols-1 gap-8 max-w-4xl mt-10 text-[#242E49] font-[700] text-md mx-4">
						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14]">
							<div className="bg-[#EDF5FF] w-fit p-2 rounded-[9px]">
								<CiMail />
							</div>
							<div className=" mt-10">Mail us</div>
							<div className="text-[#5D6A85] font-[400]">We are here to help</div>
							<div className="mt-2">
								<a
									href="mailto:svscientificco@gmail.com"
									className="hover:underline duration-200 linear mt-2"
								>
									svscientificco@gmail.com
								</a>
							</div>
						</div>

						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14]">
							<div className="bg-[#FFF1F3] w-fit p-2 rounded-[9px]">
								<IoIosCall />
							</div>
							<div className=" mt-10">Call us</div>
							<div className="text-[#5D6A85] font-[400]">
								Mon-Fri from 10am to 5pm
							</div>
							<div className=" mt-2">+91 9119014669</div>
						</div>

						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14]">
							<div className="bg-[#F6F2FF] w-fit p-2 rounded-[9px]">
								<FaLocationDot />
							</div>
							<div className=" mt-10">Visit us</div>
							<div className="text-[#5D6A85] font-[400]">Visit our office HQ</div>
							<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 mt-2 rounded-[9px]">
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
