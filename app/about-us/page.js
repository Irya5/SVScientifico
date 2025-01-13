"use client"
import Image from "next/image";
import Team1 from "@/public/assets/team/team-1.png";
import Team2 from "@/public/assets/team/team-2.png";
import Core1 from "@/public/assets/core-values/core-1.svg";
import Core2 from "@/public/assets/core-values/core-2.svg";
import Core3 from "@/public/assets/core-values/core-3.svg";
import Core4 from "@/public/assets/core-values/core-4.svg";
import Thermofisher from "@/public/assets/authorized-users/Thermofisher.svg";
import Qualigens from "@/public/assets/authorized-users/Qualigens.svg";
import Whatman from "@/public/assets/authorized-users/Whatman.svg";
import Borosil from "@/public/assets/authorized-users/Borosil.svg";
import Remi from "@/public/assets/authorized-users/Remi.svg";
import Systronics from "@/public/assets/authorized-users/Systronics.svg";
import Finar from "@/public/assets/authorized-users/Finar.svg";
import Shimadzu from "@/public/assets/authorized-users/Shimadzu.svg";
import Duran from "@/public/assets/authorized-users/Duran.svg";
import Rankem from "@/public/assets/authorized-users/Rankem.svg";
import Avantor from "@/public/assets/authorized-users/Avantor.svg";
import Molychem from "@/public/assets/authorized-users/Molychem.svg";
import CoreBgImg from "@/public/assets/core-values/coreBg.svg";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	useEffect(() => {
		// Initialize AOS
		AOS.init({
			duration: 800, // Animation duration
		});

		// Refresh AOS if content changes dynamically (or elements are added after load)
		AOS.refresh();
	}, []);

	const handleClick = (url) => {
		window.open(url, '_blank'); // Open the URL in a new tab
	};

	return (
		<main className="min-h-screen bg-[#FAFCFF] ">
			<div className="pt-20 py-0 md:py-20 md:px-24 px-4">
				<div className="text-[#242E49]">
					<div className="text-[36px] md:text-[48px] font-[500] leading-[44px]  md:leading-[50px] mt-0 text-center md:text-left md:mt-4 w-full md:w-1/2">
						Welcome to a narrative of personalized excellence in every chapter.
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-5 gap-x-4 py-20 md:py-20 bg-white md:px-24 px-8">
				<div className="text-[#242E49] font-[500] text-[48px] col-span-2 flex items-start justify-center">
					Our Story
				</div>
				<div className="text-[#242D47] text-lg md:text-left text-center col-span-3 pt-3">
					<p>
						In the humble beginnings of our venture, we dared to dream big. Starting
						small, our vision was colossal — to reshape perceptions and promote the use
						of branded products.
					</p>
					<p className="mt-3">
						Working tirelessly at the grassroots, we etched our path by delivering not
						just products but unparalleled experiences. Every interaction was a
						testament to our commitment to the best and utmost satisfaction.
					</p>
					<p className="mt-3">
						With each passing day, our customers became our mentors. Their needs turned
						into valuable lessons, prompting us to diversify our offerings. Our
						portfolio evolved organically, reflecting the ever-growing dialogue between
						us and those we serve.
					</p>
					<p className="mt-3">
						In 1994, our journey took a significant turn with a dealership with
						Qualigens, transforming our trajectory. With their support, we navigated
						markets and institutes, delivering results that mirrored our customers'
						desires.
					</p>
					<p className="mt-3">
						During this journey, we secured dealerships with industry leaders like
						Avantor, Shimadzu, Molychem, and more. In 2010, we welcomed Borosil into our
						esteemed portfolio, followed by Whatman in 2014. These weren't mere
						dealerships; they were threads weaving a richer tapestry of quality and
						trust.
					</p>
					<p className="mt-3">
						Today, we stand as a testament to the power of vision, persistence, and
						partnerships. Our journey, shaped by the whispers of customers and
						strengthened by alliances, continues to unfold — a story of a laboratory
						supplier redefining horizons.
					</p>
				</div>
			</div>

			<div className="bg-[#242E48] h-fit md:h-[702px] w-full rounded-[12px] md:rounded-[24px] flex items-center justify-center relative">
				<div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:px-0 px-4 sm:px-8">
					<div className="flex flex-col justify-center gap-4 w-full sm:w-[340px]">
						<div className="text-[#DEE3E8] px-6 py-2 rounded-[12px] border border-[#DEE3E8] w-fit">
							Principles
						</div>
						<div className="text-[#FDFCFF] text-[40px] sm:text-[56px] leading-[45px] sm:leading-[60px] font-[700]">
							Our <br />
							Core Values
						</div>
						<div className="text-[#DCE1E8] text-base sm:text-lg">
							The Guiding principles that shape the culture and behavior of our
							company.
						</div>
					</div>
					<div className="flex flex-col md:gap-4 gap-y-8">
						<div className="bg-[#3D4966] flex flex-col md:flex-row md:items-center items-start gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
								<Image
									src={Core1}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md"
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
									Customer-Centric
								</div>
								<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
									We're dedicated to surpassing customer expectations with every
									heartbeat of our business.
								</div>
							</div>
						</div>

						<div className="bg-[#3D4966] flex flex-col md:flex-row md:items-center items-start gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
								<Image
									src={Core2}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md"
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
									Quality Excellence
								</div>
								<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
									We are committed to delivering products of the highest quality,
									adhering to rigorous standards.
								</div>
							</div>
						</div>

						<div className="bg-[#3D4966] flex flex-col md:flex-row md:items-center items-start gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
								<Image
									src={Core3}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md"
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
									Accountability
								</div>
								<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
									We take responsibility for our actions and outcomes, honoring
									our commitments to customers.
								</div>
							</div>
						</div>

						<div className="bg-[#3D4966] flex flex-col md:flex-row md:items-center items-start gap-4 p-6 md:p-4 md:rounded-[12px] rounded-[24px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px] md:w-auto w-fit">
								<Image
									src={Core4}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md"
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl sm:text-2xl font-[700]">
									Continuous Learning
								</div>
								<div className="text-[#BEC5D2] text-sm sm:text-base mt-1">
									With insights gleaned from our customers, we adapt and innovate
									each day.
								</div>
							</div>
						</div>
					</div>
				</div>
				<Image
					src={CoreBgImg}
					alt="core_bg_img"
					width={97}
					height={143}
					className="absolute md:block hidden bottom-0 left-[12%]"
				/>
			</div>

			<div className="py-24 bg-white md:px-24 px-12" id="our-brands-section">
				<div className="flex flex-col items-center">
					<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px]">
						Our Brands
					</button>
					<div className="text-[#242E49] font-[500] text-[48px] text-center leading-[50px] mt-2 pr-4">
						Authorised Distributor
					</div>
				</div>

				<div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 mt-16">
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.thermofisher.in/chemicals/en/home.html')}>
						<div className="p-2">
							<Image src={Thermofisher} alt="user" width={130} height={130} />
						</div>
					</div>

					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.thermofisher.in/chemicals/en/brands/qualigens.html')}>
						<div className="p-2">
							<Image src={Qualigens} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.cytivalifesciences.com/en/us/about-us/our-brands/whatman?srsltid=AfmBOorMSblEvKU94SZYdDVUOa5Dn-E9powjoLnnDZcAC7xJ0znloBU7')}>
						<div className="p-2">
							<Image src={Whatman} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://myborosil.com/')}>
						<div className="p-2">
							<Image src={Borosil} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.remilabworld.com/')}>
						<div className="p-2">
							<Image src={Remi} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.systronicsindia.com/')}>
						<div className="p-2">
							<Image src={Systronics} alt="user" width={100} height={80} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('')}>
						<div className="p-2">
							<Image src={Finar} alt="user" width={100} height={100} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.shimadzu.com/')}>
						<div className="p-2">
							<Image src={Shimadzu} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.dwk.com/')}>
						<div className="p-2">
							<Image src={Duran} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://in.vwr.com/cms/rankem')}>
						<div className="p-2">
							<Image src={Rankem} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://in.vwr.com/store/?gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LFU7QvO1T-qEfryIiJtjNiwPrtvZBIFcQwyZ3rNLRPMbg3LVZ79qQhoCcWkQAvD_BwE&gclsrc=aw.ds')}>
						<div className="p-2">
							<Image src={Avantor} alt="user" width={130} height={130} />
						</div>
					</div>
					<div className="w-full sm:w-[130px] md:w-[150px] lg:w-[192px] h-auto p-4 sm:p-2 md:p-4 rounded-[12px] flex items-center justify-center" style={{ boxShadow: '0 0px 8px rgba(0, 17, 94, 0.08)' }} data-aos="fade-up" data-aos-duration="800" onClick={() => handleClick('https://www.molychem.net/')}>
						<div className="p-2">
							<Image src={Molychem} alt="user" width={130} height={130} />
						</div>
					</div>
				</div>

			</div>

			<div className="py-20 md:px-48 px-8">
				<div className="flex flex-col md:items-start items-center">
					<div className="flex flex-col md:items-start items-center">
						<button className="text-[#3D4966] text-base w-fit border border-[#D6DAE4] px-3 py-2 rounded-[9px]">
							Management
						</button>
						<div className="text-[#242E49] font-[500] text-[36px] md:text-[48px] leading-[50px] mt-2 pr-4">
							Meet Our Leaders
						</div>
						<div className="text-[#5D6A85] text-md mt-4">
							Unlock the full potential of your Laboratory!
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-y-8 mt-12">
					<div className="flex flex-col md:flex-row justify-start gap-8 rounded-[12px] bg-white p-6 shadow-userCard">
						<div className="rounded-[12px] w-full h-auto md:w-[187px] md:h-[246px]">
							<Image
								src={Team1}
								alt="team_img"
								width={187}
								height={246}
								className="rounded-md  w-full h-auto md:w-[187px] md:h-[246px]"
							/>
						</div>
						<div className="flex-1 items-strech h-full py-2">
							<div className="text-[#242E49] text-lg font-[700]">Vinit Jain</div>
							<div className="text-[#5D6A85] text-lg mt-5">
								Greetings! Our journey at S.V. Scientific Co began with a simple yet
								profound vision — to create a space where reliability, outstanding
								customer service, and satisfaction form the very fabric of our
								existence. We hold ourselves to the promise of delivering excellence
								in every endeavor. Beyond being a provider of products and services,
								we are a beacon of dependability, and a testament to the enduring
								bond of trust we share with our valued customers.
							</div>
						</div>
					</div>

					<div className="flex flex-col md:flex-row justify-start gap-8 rounded-[12px] bg-white p-6 shadow-userCard">
						<div className="rounded-[12px] w-full h-auto md:w-[187px] md:h-[246px]">
							<Image
								src={Team2}
								alt="team_img"
								width={187}
								height={246}
								className="rounded-md  w-full h-auto md:w-[187px] md:h-[246px]"
							/>
						</div>
						<div className="flex-1 items-strech h-full py-2">
							<div className="text-[#242E49] text-lg font-[700]">Vipin Jain</div>
							<div className="text-[#5D6A85] text-lg mt-5">
								Namaste! we're a dedicated family driven by a shared commitment to
								reliability, unwavering quality, and the trust our customers bestow
								upon us. Beyond offering products and services, we stand as a
								promise — a promise of excellence, dependability, and a profound
								bond of trust that shapes every interaction. For us, reliability,
								quality, and trust are not just values; they're the very essence of
								our identity.
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
