'use client';  // Ensures that the code runs on the client side

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdOutlineSearch } from 'react-icons/md';
import ContactSection from '@/components/ContactSection';
import * as XLSX from 'xlsx';

export default function Products() {
	const categories = ['All Products', 'Chemicals', 'Glassware', 'Equipments'];
	const router = useRouter();
	const [activeCategory, setActiveCategory] = useState('All Products');
	const [products, setProducts] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(true); // Loading state
	const [isClient, setIsClient] = useState(false); // State to track if we are on the client

	const googleDriveLink =
		'https://docs.google.com/spreadsheets/d/1R66dgCmLpU3IL5duxVkoCjKqux38o7o3/edit?usp=sharing&ouid=115046879177425011658&rtpof=true&sd=true';

	// Set isClient to true once the component is mounted (client-side)
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Fetch and parse the Excel file when the component mounts
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

				// Parse the Excel data into a JSON format
				const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Get raw data with row numbers

				// Clean the data (skip empty rows and map correctly)
				const cleanedData = rawData
					.slice(1)
					.filter((row) => row[0] && row[1]) // Filter out empty rows
					.map((row) => ({
						Category: row[1], // 'A' column
						ProductName: row[2], // 'B' column
						Pack: row[3], // 'C' column
					}));

				// Set the products state
				setProducts(cleanedData);
			} catch (error) {
				console.error('Error fetching or parsing Excel file:', error);
			} finally {
				setLoading(false); // Set loading to false after the fetch operation
			}
		};

		fetchAndParseExcel();
	}, []);

	// Conditionally use searchParams only on the client side
	useEffect(() => {
		if (isClient) {
			const searchParams = new URLSearchParams(window.location.search); // Use the window object to access the query params
			const category = searchParams.get('category');
			if (category) {
				setActiveCategory(category);
			}
		}
	}, [isClient]); // Ensure this effect runs after isClient is set to true

	// Filtering products based on category and search query
	const filteredProducts = products.filter((product) => {
		// Ensure Category is a string, otherwise fallback to an empty string
		const category = typeof product.Category === 'string' ? product.Category.trim() : '';
		const matchesCategory = activeCategory === 'All Products' || category === activeCategory.toLowerCase();
		const matchesSearchQuery = product.ProductName && product.ProductName.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesCategory && matchesSearchQuery;
	});

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

	return (
		<main className="bg-[#FAFCFF] md:px-24 py-20 md:px-24 px-4">
			<div className="text-[#242E49]">
				<ul className="text-sm list-disc pl-4 hidden md:block font-gt-super">
					<li>Products</li>
				</ul>
				<div className="text-[36px] md:text-[48px] font-[500] text-center md:text-left leading-[50px] mt-4 w-full md:w-1/2">
					Unmatched Quality in <br />
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
								? 'bg-black text-white' // Active category styles
								: 'bg-[#F2F5F9] text-[#242E49] hover:bg-[#d9dce0] hover:text-black'
								}`}
							onClick={() => handleCategoryClick(categoryName)} // Update category and URL
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
						) : filteredProducts.length === 0 ? (
							<div>No products found</div>
						) : (
							filteredProducts.map((product, index) => (
								<div key={index} className="flex items-center justify-between border-b py-6 border-[#DCE1E8]">
									<div className="flex flex-col gap-2">
										<div className="text-[#242E49] font-[700] text-lg">{product.ProductName}</div>
										<div className="text-[#5D6A85] text-lg">Pack: {product.Pack}</div>
									</div>
									<div className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49]">
										Get Quote
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>

			<div>
				<ContactSection />
			</div>
		</main>
	);
}
