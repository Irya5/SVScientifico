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

import { TbArrowNarrowRight } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

// Card Component
const ServiceCard = ({ imgSrc, title, description, category }) => (
	<div className="flex flex-col p-4 rounded-[12px] cursor-pointer hover:shadow-serve group">
		<Image src={imgSrc} alt={title} width={335} height={334} className="rounded-md w-full" />
		<div className="text-[#242E49] text-xl mt-4 font-bold group-hover:text-black">{title}</div>
		<div className="text-[#5D6A85] text-sm font-regular my-2 h-16 group-hover:text-black">{description}</div>
		<div className="w-full flex justify-end mt-2">
			<Link href={`/products?category=${category}`}>
				<div className="group flex items-center gap-2 text-white w-fit bg-[#242D47] group-hover:bg-blue-600 py-3 px-3 rounded-[12px] transition-all duration-300">
					<TbArrowNarrowRight size={24} className="group-hover:hidden text-white" />
					<span className="group-hover:block hidden text-sm font-bold">View More</span>
					<TbArrowNarrowRight size={24} className="group-hover:block hidden" />
				</div>
			</Link>
		</div>
	</div>
);

// Why Choose Us Card Component
const WhyChooseCard = ({ imgSrc, title, description }) => (
	<div className="bg-[#3D4966] flex md:flex-row flex-col gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
		<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit flex justify-center items-center">
			<Image src={imgSrc} alt={title} width={44} height={44} className="rounded-md" />
		</div>
		<div className="flex-1">
			<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">{title}</div>
			<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">{description}</div>
		</div>
	</div>
);

export default function Home() {
	return (
		<main className="min-h-screen bg-[#FAFCFF]">
			{/* Hero Section */}
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
						<Typewriter
							words={["Laboratory Equipments", "Laboratory Chemicals", "Laboratory Glassware", "Trusted Products", "Customer Satisfaction"]}
							loop={0}
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
				</div>
			</div>

			{/* Brand Section */}
			<div className="bg-[#242E49] md:mx-20 mx-4 md:h-[350px] h-[650px] my-10 rounded-xl brand-background-svg flex md:items-center items-start md:pl-28 pl-6 pt-8">
				<div className="flex flex-col">
					<div className="text-[#DEE3E8] border border-[#DEE3E8] py-3 px-7 rounded-[9px] text-sm w-fit font-gt-super">
					<a href="/about-us#our-brands-section"> Our Brands </a>
					</div>
					<div className="mt-6 text-[#FDFCFF] text-[48px] font-[700]">
						Authorised <br />
						Distributor
					</div>
				</div>
			</div>

			{/* What We Serve Section */}
			<div className="flex flex-col items-center justify-center py-10">
				<div className="max-w-4xl flex flex-col items-center md:grid grid-cols-2 gap-8 my-10 mx-4">
					<div className="text-[#242E49] flex flex-col md:items-start items-center">
						<div className="md:text-[48px] text-[36px] font-[500]">What We Serve</div>
					</div>
					<div className="text-[#5D6A85] text-md font-regular leading-7 md:text-left text-center">
						We offer an extensive selection of chemicals, glassware, and laboratory equipment tailored to meet the diverse requirements of industrial setups and institutes.
					</div>
				</div>

				<div className="max-w-5xl flex flex-col md:grid grid-cols-3 gap-8 my-10 mx-4">
					<ServiceCard imgSrc={Serve1} title="Lab Chemical Solutions" description="Precision in every chemical, ensuring optimal performance." category="Chemicals" />
					<ServiceCard imgSrc={Serve2} title="Lab Glassware" description="Elevate your experiments with industry-standard laboratory glassware." category="Glassware" />
					<ServiceCard imgSrc={Serve3} title="Lab Equipment" description="Cutting-edge laboratory equipment sourced from industry leaders." category="Equipments" />
				</div>
			</div>

			{/* Why Choose Us Section */}
			<div className="bg-[#242E48] md:h-[702px] h-fit w-full rounded-[24px] mt-20 flex items-center justify-center relative">
				<div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:px-0 px-4 sm:px-8">
					<div className="flex flex-col justify-center gap-4 w-full sm:w-[300px]">
					<div className="text-[#DEE3E8] px-6 py-2 rounded-[12px] border border-[#DEE3E8] w-fit font-gt-super">Features</div>						<div className="text-[#FDFCFF] text-[40px] sm:text-[56px] leading-[45px] sm:leading-[60px] font-[700]">
							Why <br />
							Choose us
						</div>
						<div className="text-[#DCE1E8] text-base sm:text-lg">
							Elevate your labs with wide selection of chemicals, glassware, and equipment.
						</div>
					</div>
					<div className="flex flex-col md:gap-4 gap-y-8">
						<WhyChooseCard imgSrc={WhyUs3} title="Authentic Brands Only" description="All products are 100% branded, ensuring authenticity and quality with each purchase." />
						<WhyChooseCard imgSrc={WhyUs4} title="Unbeatable Pricing" description="We strive to offer the most competitive prices to our customers." />
						<WhyChooseCard imgSrc={WhyUs2} title="Diverse Product Range" description="Your one-stop solution for diverse laboratory needs." />
						<WhyChooseCard imgSrc={WhyUs1} title="Stock Availability" description="Shop with confidence knowing that our inventory is available with all the products you need." />
					</div>
				</div>
				<Image src={WhyBgImg} alt="why_bg_img" width={97} height={143} className="absolute md:block hidden bottom-0 left-[12%]" />
			</div>

			{/* Stats Section */}
			<div className="max-w-5xl mx-auto grid md:grid-cols-5 grid-cols-1 md:gap-x-8 gap-y-8 mt-28 mb-20">
				<div className="flex flex-col items-start md:col-span-2 justify-center">
					<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px] font-gt-super">
						Trusted by many
					</button>
					<div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-4 pr-4">
						What client say about us
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-[#242E49] text-[36px] font-[700]">30+</div>
					<div className="text-[#5D6A85] text-lg font-[700]">Years of Experience</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-[#242E49] text-[36px] font-[700]">2K+</div>
					<div className="text-[#5D6A85] text-lg font-[700]">Satisfied Clients</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-[#242E49] text-[36px] font-[700]">1K+</div>
					<div className="text-[#5D6A85] text-lg font-[700]">Product Count</div>
				</div>
			</div>

			{/* Partner Section */}
			<div>
				<Image src={PartnerImg} alt="partner_img" className="w-full sm:w-[80%] md:w-[90%] lg:w-[100%] xl:w-[100%]" />
			</div>

			{/* Contact Section */}
			<div className="flex justify-center items-center mt-20">
				<ContactSection
					boldText="Let’s Connect!"
					subText="Excited to elevate your laboratory? We’re here to help you every step of the way!"
				/>
			</div>
		</main>
	);
}
