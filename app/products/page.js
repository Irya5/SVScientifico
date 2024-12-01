import { MdOutlineSearch } from "react-icons/md";

export default function Products() {
	return (
		<main className="bg-[#FAFCFF]  md:px-24 py-20 md:px-24 px-4">
			<div className="">
				<div className="text-[#242E49]">
					<ul className="text-sm list-disc pl-4 hidden md:block">
						<li>Products</li>
					</ul>
					<div className="text-[36px] md:text-[48px] font-[500] text-center md:text-left  leading-[50px] mt-4  w-full md:w-1/2">
						Unmatched Quality in <br />
						Every Product
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-4 grid-cols-1 gap-20 mt-16 md:mt-28 md:px-20 px-8">
				<div className="col-span-1 flex flex-col gap-y-3">
					<div className="bg-[#242E49] cursor-pointer rounded-[12px] text-[#FDFCFF] text-center font-[700] text-lg py-3.5">
						All Products
					</div>
					<div className="bg-[#F2F5F9] hover:bg-[#d9dce0] duration-200 linear cursor-pointer rounded-[12px] text-[#242E49] text-center font-[700] text-lg py-3.5">
						All Products
					</div>
				</div>

				<div className="col-span-1 md:col-span-3 flex flex-col">
					<div className="flex gap-2 border-2 border-[#E4E8ED] rounded-[8px] p-3 text-[#242E49]">
						<MdOutlineSearch size={24} className="" color="#C5CAD3" />
						<input
							className="outline-none text-[#242E49] bg-transparent"
							type="text"
							placeholder="Search . . ."
						/>
					</div>
					<div className="flex flex-col">
						<div className="flex items-center justify-between border-b py-6 border-[#DCE1E8]">
							<div className="flex flex-col gap-2">
								<div className="text-[#242E49] font-[700] text-lg">
									Ammonium Molybdate
								</div>
								<div className="text-[#5D6A85] text-lg">Pack: 500gm</div>
							</div>
							<div className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49]">
								Get Quote
							</div>
						</div>

						<div className="flex items-center justify-between py-6">
							<div className="flex flex-col gap-2">
								<div className="text-[#242E49] font-[700] text-lg">
									Ammonium Molybdate
								</div>
								<div className="text-[#5D6A85] text-lg">Pack: 500gm</div>
							</div>
							<div className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49]">
								Get Quote
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
