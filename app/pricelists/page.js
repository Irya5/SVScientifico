"use client";
import ContactSection from "@/components/ContactSection";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState } from 'react';

export default function Pricelists() {

  const pricelists = [
    { name: 'Aczet Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1U63g-x_Nz-ZbxQdCvoZli8liCZ18CJrC' },
    { name: 'Ambassador Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1FlzLzc80ob1vw6dbabHuFfLwMKkr5O7u' },
    { name: 'Aquasol Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1lbzI9n-GpWuWZj_6f09Wog6py7gvGEiN' },
    { name: 'Avantor Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1PeJM0vP9dso1gY10ZlIP5MX85uZ27H6D' },
    { name: 'Axiva Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1f51PymHW5Xmwe8juvIfgzxrJH88Lifhm' },
    { name: 'Borosil Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1P8876N89V46kaF1XcZczytnLYORl-3T-' },
    { name: 'Eutech Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1Jq7sPwhqasbyxLDOoD8VJUh1Yts76aYN' },
    { name: 'Hamilton Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1xi82nn2wyoQvvE_zXE8ryfI_01UQtuAE' },
    { name: 'Himedia Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=17bIxWJHT0qknab6MSk1yfBprDoNLBDta' },
    { name: 'Labtronics Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1Gy6MIcKv4DFyBpQCz1O8Vyac2lNnIGPr' },
    { name: 'Lemico Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1ObJZ5wVAHzS6YIxPveTSa1qq3ahpwIb8' },
    { name: 'Loba Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1Po-ZYPBO2vn8igUlxOCJzmflRuocF5Iz' },
    { name: 'Merck Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1j1bd_VihZ560kWX9a4ndG8FfGte8zj-w' },
    { name: 'Olympus Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1hAH9qxeuUUvA6J09M-vAqAR7Jhwg4M2f' },
    { name: 'Physics Indosaw Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1rXjSkC-TPG3-OYQT23jqjVbfC5olGAe-' },
    { name: 'PolyLab Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1RZSjMck-ctbZnFKtFvgh1oM5RGGg14QI'},
    { name: 'Qualigens Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1CHiPkxNnyZnExrkZpJfWWKj06HOV2isw' },
    { name: 'Remi Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1rJ43RX1MHsnvKVNXxs-C7wj90CiUwYyL' },
    { name: 'Shimadzu Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1ko_TARIyhuO2-YCDTj_BZYaA1DwK4Mpq' },
    { name: 'SRL Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1SwRYSkF0gN0QZh0LDaf4MtWjxjuz5PQv' },
    { name: 'Systronics Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1SRWv0Xef23Su735LG9SS7Bll2A-IMbIr' },
    { name: 'Tarson Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1PqLdj78MoVXQgOR4ZDM9WvKeZwGr9_75' },
    { name: 'Toshniwal Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/uc?export=download&id=1RHibjcYf5fNOwt3bp1GLazsI7wZW9mad' },
    { name: 'Whatman Pricelist', year: '2025-2026', pdf: 'https://docs.google.com/spreadsheets/d/1tJPwUhmPtR7iS9YXONJJtEI9J1KPfKqC/export?format=pdf' },
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
