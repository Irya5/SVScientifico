"use client";
import ContactSection from "@/components/ContactSection";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState } from 'react';

export default function Pricelists() {

  const pricelists = [
    { name: 'Aczet Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1U63g-x_Nz-ZbxQdCvoZli8liCZ18CJrC' },
    { name: 'Ambassador Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1FlzLzc80ob1vw6dbabHuFfLwMKkr5O7u' },
    { name: 'Aquasol Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1lbzI9n-GpWuWZj_6f09Wog6py7gvGEiN' },
    { name: 'Avantor Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1zj513oPHHjFraPmlaaM1UQbHg_0E28iY' },
    { name: 'Axiva Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1f51PymHW5Xmwe8juvIfgzxrJH88Lifhm' },
    { name: 'Borosil Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1nugGK1oHdTDUzdlNs4__C8yTgkVPxCoP' },
    { name: 'Eutech Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1Jq7sPwhqasbyxLDOoD8VJUh1Yts76aYN' },
    { name: 'Himedia Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1sMN6aOMmYtYrA6gU9LMR1JF1a3A10Wit' },
    { name: 'Labtronics Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/uc?export=download&id=1mW7t788H1wguI8FCw-5mE1QfSYNY0dBr' },
    { name: 'Lemico Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/uc?export=download&id=1YR8CTPmPjZLxxoNecm6I6NglfyoJQROD' },
    { name: 'Loba Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/uc?export=download&id=1Jbt_lE4UsGMtpTODukd_WBWNEpJNJjs7' },
    { name: 'Merck Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1R9QNstcZLzVoDsZWTH6eVlrxcfqGC59u' },
    { name: 'Olympus Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1PYzkz3uB8V4w9mXz6M8YWm7sXYB5XHBl' },
    { name: 'Physics Indosaw Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1rXjSkC-TPG3-OYQT23jqjVbfC5olGAe-' },
    { name: 'Qualigens Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1W-aPhtk_wHcRbYC5JWZxwAiYuUKfc8kF' },
    { name: 'Remi Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1rJ43RX1MHsnvKVNXxs-C7wj90CiUwYyL' },
    { name: 'Shimadzu Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1vAejexq6-BHtGmiixUzBTLy_6drdItXf' },
    { name: 'SRL Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1SwRYSkF0gN0QZh0LDaf4MtWjxjuz5PQv' },
    { name: 'Systronics Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1SRWv0Xef23Su735LG9SS7Bll2A-IMbIr' },
    { name: 'Tarson Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/uc?export=download&id=1MufGJZAKDy4zdMMzHiryiOlsG0wyj6dJ' },
    { name: 'Toshniwal Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/uc?export=download&id=1RHibjcYf5fNOwt3bp1GLazsI7wZW9mad' },
    { name: 'Whatman Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1OBJUVo7m0N4R3L3FHhEzTL5xM5XT2ZE8' },
  ];



  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered pricelists based on search term
  const filteredPricelists = pricelists.filter((pricelist) =>
    pricelist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="bg-[#FAFCFF] md:px-24 py-10 md:px-24 px-4">
      <div className="text-[#242E49]">
        <div className="text-[36px] md:text-[48px] font-[500] text-center md:text-left leading-[50px] mt-4 w-full md:w-1/2">
          Explore Pricing of the<br />
          Products
        </div>
      </div>
      <div className="flex flex-col mt-16 md:mt-28 max-w-3xl md:px-0 px-8">
        {/* Search box */}
        <div className="flex gap-2 border-2 border-[#E4E8ED] rounded-[8px] p-3 text-[#242E49]">
          <MdOutlineSearch size={24} color="#C5CAD3" />
          <input
            className="outline-none text-[#242E49] bg-transparent"
            type="text"
            placeholder="Search . . ."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Display filtered pricelists */}
        <div className="flex flex-col mt-6">
          {filteredPricelists.length > 0 ? (
            filteredPricelists.map((pricelist, index) => (
              <div key={index} className="flex items-center justify-between border-b py-6 border-[#DCE1E8]">
                <div className="flex flex-col gap-2">
                  <div className="text-[#242E49] font-[700] text-lg">{pricelist.name}</div>
                  <div className="text-[#5D6A85] text-lg">{pricelist.year}</div>
                </div>
                <a
                  href={pricelist.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49] hover:bg-blue-600 hover:text-white"
                >
                  Download
                </a>
              </div>
            ))
          ) : (
            <div className="text-[#5D6A85] text-lg">No results found</div>
          )}
        </div>
      </div>

      <div>
        <ContactSection />
      </div>

    </main>
  );
}
