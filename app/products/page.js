'use client'; 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineSearch } from 'react-icons/md';
import ContactSection from '@/components/ContactSection';
import * as XLSX from 'xlsx';

export default function Products() {
	const categories = ['All Products', 'Chemicals', 'Glassware', 'Equipments'];
	const router = useRouter();
	const [activeCategory, setActiveCategory] = useState('All Products');
	const [products, setProducts] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(true);
	const [isClient, setIsClient] = useState(false); 
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(20); 

	const googleDriveLink =
		'https://docs.google.com/spreadsheets/d/1R66dgCmLpU3IL5duxVkoCjKqux38o7o3/edit?usp=sharing&ouid=115046879177425011658&rtpof=true&sd=true';

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		const fetchAndParseExcel = async () => {
			try {
				const response = await fetch(googleDriveLink);
				if (!response.ok) {
					console.error('Error fetching the Excel file');
					setLoading(false);
					return;
				}

				const arrayBuffer = await response.arrayBuffer();
				const workbook = XLSX.read(arrayBuffer, { type: 'array' });
				const sheet = workbook.Sheets[workbook.SheetNames[0]];

				const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); 

				const cleanedData = rawData
					.slice(1)
					.filter((row) => row[0] && row[1]) 
					.map((row) => ({
						Category: row[1], 
						ProductName: row[2], 
						Pack: row[3], 
					}));

				setProducts(cleanedData);
			} catch (error) {
				console.error('Error fetching or parsing Excel file:', error);
			} finally {
				setLoading(false); 
			}
		};

		fetchAndParseExcel();
	}, []);

	useEffect(() => {
		if (isClient) {
			const searchParams = new URLSearchParams(window.location.search); 
			const category = searchParams.get('category');
			if (category) {
				setActiveCategory(category); 
			}
		}
	}, [isClient]); 

	const filteredProducts = products.filter((product) => {
		const category = typeof product.Category === 'string' ? product.Category.trim() : '';
		const matchesCategory =
			activeCategory === 'All Products' || category.toLowerCase() === activeCategory.toLowerCase();
		const matchesSearchQuery =
			product.ProductName && product.ProductName.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesCategory && matchesSearchQuery;
	});

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

	const handleCategoryClick = (category) => {
		setActiveCategory(category);
		if (category !== 'All Products') {
			router.push(`/products?category=${category}`); 
		} else {
			router.push('/products'); 
		}
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (!isClient) {
		return <div>Loading...</div>; 
	}

	return (
		<main className="bg-[#FAFCFF] md:px-24 py-20 md:px-24 px-4">
			<div className="text-[#242E49]">
				<div className="text-[36px] md:text-[48px] font-[500] text-center md:text-left leading-[50px] mt-4 w-full md:w-1/2">
					Exceptional Quality in <br />
					Every Product
				</div>
			</div>

			<div className="grid md:grid-cols-4 grid-cols-1 gap-20 mt-16 md:mt-28 md:px-20 px-8">
				{/* Categories section */}
				<div className="col-span-1 flex flex-col gap-y-3">
					{categories.map((categoryName, index) => (
						<div
							key={index}
							className={`cursor-pointer rounded-[12px] text-center font-[700] text-lg py-3.5 transition-all duration-300 ${activeCategory === categoryName
								? 'bg-black text-white' 
								: 'bg-[#F2F5F9] text-[#242E49] hover:bg-[#d9dce0] hover:text-black'
								}`}
							onClick={() => handleCategoryClick(categoryName)} 
						>
							{categoryName}
						</div>
					))}
				</div>

				{/* Products section */}
				<div className="col-span-1 md:col-span-3 flex flex-col">
					<div className="flex gap-2 border-2 border-[#E4E8ED] rounded-[8px] p-3 text-[#242E49]">
						<MdOutlineSearch size={24} color="#C5CAD3" />
						<input
							className="outline-none text-[#242E49] bg-transparent"
							type="text"
							placeholder="Search . . ."
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					</div>

					<div className="flex flex-col mt-8">
						{loading ? (
							<div>Loading products...</div>
						) : currentProducts.length === 0 ? (
							<div>No products found</div>
						) : (
							currentProducts.map((product, index) => (
								<div key={index} className="flex items-center justify-between border-b py-6 border-[#DCE1E8]">
									<div className="flex flex-col gap-2">
										<div className="text-[#242E49] font-[700] text-lg">{product.ProductName}</div>
										<div className="text-[#5D6A85] text-lg">Pack: {product.Pack}</div>
									</div>
									<div
										className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49]"
										onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=svscientificco@gmail.com', '_blank')}
									>
										Get Quote
									</div>
								</div>
							))
						)}
					</div>

					{/* Pagination controls */}
					<div className="flex justify-between mt-8">
						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className="px-4 py-2 bg-[#F2F5F9] text-[#242E49] rounded-[8px] disabled:opacity-50"
						>
							Previous
						</button>
						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage * productsPerPage >= filteredProducts.length}
							className="px-4 py-2 bg-[#F2F5F9] text-[#242E49] rounded-[8px] disabled:opacity-50"
						>
							Next
						</button>
					</div>
				</div>
			</div>

			<div>
				<ContactSection />
			</div>
		</main>
	);
}
