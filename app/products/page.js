'use client'; // Ensures that the code runs on the client side

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
	const [cart, setCart] = useState([]); // Cart state

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
					.slice(1) // Skip the header row (index 0)
					.filter((row) => row[0] && row[1]) // Filter out rows with missing category or product name
					.map((row) => {
						// Handle pack size: check if row[3] is an array-like string
						let packSizes = [];

						if (row.length > 3 && row[3]) {
							try {
								// Check if the pack sizes are in a format that can be parsed as a JSON array
								const packString = row[3].replace(/\s+/g, ''); // Remove unnecessary spaces
								if (packString.startsWith('[') && packString.endsWith(']')) {
									// Parse the string to a real array
									packSizes = JSON.parse(packString);
								} else {
									// Fallback in case it's not a valid JSON format, split by commas
									packSizes = packString.split(',').map((size) => size.trim());
								}
							} catch (error) {
								console.error('Error parsing pack sizes:', error);
							}
						}

						return {
							Category: row[1], // Category is in column 1
							ProductName: row[2], // ProductName is in column 2
							Pack: packSizes, // Pack sizes (as an array)
						};
					});

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
			const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
			setCart(savedCart);
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

	const indexOfLastProduct = currentPage * 10;
	const indexOfFirstProduct = indexOfLastProduct - 10;
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

	// State to store the selected pack size for each product
	const [selectedPackSize, setSelectedPackSize] = useState('');

	// Set default pack size when a product is loaded
	useEffect(() => {
		// If the product has pack sizes, set the first one as the default selected value
		if (products.length > 0 && selectedPackSize === '') {
			setSelectedPackSize(products[0]?.Pack[0] || ''); // Set first product's first pack size as default
		}
	}, [products]);

	const handleAddToCart = (product, selectedPackSize) => {
		// Only add product if a valid pack size is selected
		if (selectedPackSize) {
			const updatedCart = [...cart, { ...product, selectedPackSize }];
			setCart(updatedCart);
			localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
		} else {
			alert('Please select a pack size.');
		}
	};

	const handleViewCart = () => {
		router.push('/cart');
	};

	if (!isClient) {
		return <div>Loading...</div>;
	}

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
										<div className="text-[#5D6A85] text-lg">Pack: {product.Pack.join(', ')}</div> {/* Display all pack sizes */}
									</div>

									{/* Pack size selection dropdown */}
									<div className="flex items-center">
										<select
											className="border rounded-md py-1 px-3"
											onChange={(e) => setSelectedPackSize(e.target.value)}
											value={selectedPackSize} // Controlled component
										>
											{product.Pack.map((size, index) => (
												<option key={index} value={size}>{size}</option>
											))}
										</select>

										<div
											className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49] hover:bg-blue-600 hover:text-white ml-4"
											onClick={() => handleAddToCart(product, selectedPackSize)}
										>
											Add to Cart
										</div>
									</div>
								</div>
							))
						)}
					</div>

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
							disabled={currentPage * 10 >= filteredProducts.length}
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

			{/* Floating cart button */}
			<div
				onClick={handleViewCart}
				className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full cursor-pointer shadow-lg"
			>
				Cart ({cart.length})
			</div>
		</main>
	);
}
