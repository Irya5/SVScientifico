"use client";
import ContactSection from "@/components/ContactSection";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState } from 'react';

export default function Pricelists() {

  const pricelists = [

    { name: 'Aczet Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1U63g-x_Nz-ZbxQdCvoZli8liCZ18CJrC/view?usp=sharing' },
    { name: 'Aquasol Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1lbzI9n-GpWuWZj_6f09Wog6py7gvGEiN/view?usp=sharing' },
    { name: 'Avantor Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1zj513oPHHjFraPmlaaM1UQbHg_0E28iY/view?usp=sharing' },
    { name: 'Axiva Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1f51PymHW5Xmwe8juvIfgzxrJH88Lifhm/view?usp=drive_link' },
    { name: 'Borosil Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1FlzLzc80ob1vw6dbabHuFfLwMKkr5O7u/view?usp=drive_link' },
    { name: 'BP Industries Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1sMN6aOMmYtYrA6gU9LMR1JF1a3A10Wit/view?usp=drive_link' },
    { name: 'Eutech Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1R9QNstcZLzVoDsZWTH6eVlrxcfqGC59u/view?usp=drive_link' },
    { name: 'Himedia Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1Jq7sPwhqasbyxLDOoD8VJUh1Yts76aYN/view?usp=drive_link' },
    { name: 'Labtronics Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/file/d/1mW7t788H1wguI8FCw-5mE1QfSYNY0dBr/view?usp=drive_link'},
    { name: 'Lemico Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/file/d/1YR8CTPmPjZLxxoNecm6I6NglfyoJQROD/view?usp=drive_link'},
    { name: 'Loba Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/file/d/1Jbt_lE4UsGMtpTODukd_WBWNEpJNJjs7/view?usp=drive_link' },
    { name: 'Merck Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1PYzkz3uB8V4w9mXz6M8YWm7sXYB5XHBl/view?usp=drive_link' },
    { name: 'Olympus Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1rXjSkC-TPG3-OYQT23jqjVbfC5olGAe-/view?usp=drive_link' },
    { name: 'Physics Indosaw Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1GbmgEglKaSX1T-71pF5wkr1vxfDv82hX/view?usp=drive_link' },
    { name: 'Prerana Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1W-aPhtk_wHcRbYC5JWZxwAiYuUKfc8kF/view?usp=drive_link' },
    { name: 'Qualigens Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1W-aPhtk_wHcRbYC5JWZxwAiYuUKfc8kF/view?usp=sharing' },
    { name: 'Remi Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1rJ43RX1MHsnvKVNXxs-C7wj90CiUwYyL/view?usp=drive_link' },
    { name: 'Shimadzu Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1vAejexq6-BHtGmiixUzBTLy_6drdItXf/view?usp=drive_link' },
    { name: 'SRL Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1SwRYSkF0gN0QZh0LDaf4MtWjxjuz5PQv/view?usp=drive_link' },
    { name: 'Systronics Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1SRWv0Xef23Su735LG9SS7Bll2A-IMbIr/view?usp=drive_link' },
    { name: 'Tarson Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/file/d/1MufGJZAKDy4zdMMzHiryiOlsG0wyj6dJ/view?usp=drive_link' },
    { name: 'Toshniwal Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/file/d/1RHibjcYf5fNOwt3bp1GLazsI7wZW9mad/view?usp=drive_link' },
    { name: 'Whatman Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/file/d/1OBJUVo7m0N4R3L3FHhEzTL5xM5XT2ZE8/view?usp=drive_link' },

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
    <main className="bg-[#FAFCFF] md:px-24 py-20 md:px-24 px-4">
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
