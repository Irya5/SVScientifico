import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactUs() {
	return (
		<main className="bg-[#FAFCFF] md:px-24 py-20 md:px-24 px-4">
			<div className="">
				<div className="text-[#242E49]">
					<ul className="text-sm list-disc pl-4 md:block hidden">
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

			<div className="grid md:grid-cols-3 grid-cols-1 gap-20 mt-16 text-[#242E49] font-[700] text-md">
				<div className="flex flex-col items-center">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<CiMail />
					</div>
					<div className=" mt-4">Mail us</div>
					<div className="text-[#5D6A85] font-[400]">We are here to help</div>
					<div className="">svscientificco@gmail.com</div>
				</div>

				<div className="flex flex-col items-center">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<IoIosCall />
					</div>
					<div className=" mt-4">Call us</div>
					<div className="text-[#5D6A85] font-[400]">Mon-Fri from 10am to 5pm</div>
					<div className="">+91 9119014669</div>
				</div>

				<div className="flex flex-col items-center">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<FaLocationDot />
					</div>
					<div className=" mt-4">Visit us</div>
					<div className="text-[#5D6A85] font-[400] text-center md:text-left">13, Ramlila Bhawan, New Mandi,
                        <br />
                    Muzaffar Nagar, U.P.-251001</div>
				</div>
			</div>
		</main>
	);
}
