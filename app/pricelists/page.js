"use client";
import ContactSection from "@/components/ContactSection";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState } from 'react';

export default function Pricelists() {

  const pricelists = [
    { name: 'Aczet Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1U63g-x_Nz-ZbxQdCvoZli8liCZ18CJrC' },
    { name: 'Ambassador Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1FlzLzc80ob1vw6dbabHuFfLwMKkr5O7u' },
    { name: 'Aquasol Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1lbzI9n-GpWuWZj_6f09Wog6py7gvGEiN' },
    { name: 'Avantor Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=1qv-pXGpQ70rn4IEnrVyFCmlAY6EltmLO' },
    { name: 'Axiva Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1f51PymHW5Xmwe8juvIfgzxrJH88Lifhm' },
    { name: 'Borosil Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=1-_vgxtI9vZzX9tTyhVNiRkWwjbvMHiMR' },
    { name: 'Eutech Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1Jq7sPwhqasbyxLDOoD8VJUh1Yts76aYN' },
    { name: 'Hamilton Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1xi82nn2wyoQvvE_zXE8ryfI_01UQtuAE' },
    { name: 'Himedia Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=17bIxWJHT0qknab6MSk1yfBprDoNLBDta' },
    { name: 'Labtronics Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=17y-pDDJ1woHbT6UrqTdrqhRw00rERU9M' },
    { name: 'Lemico Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=1GoTWdpF1mj8a8sNF-WUYUua6rO8OTKE6' },
    { name: 'Loba Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=111M5H8zdphu3uPi5PXwDQaDb6xYe29We' },
    { name: 'Merck Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1eDENNUXaj2N31UlTyG30tnK9TsAk0m0q' },
    { name: 'Olympus Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1hAH9qxeuUUvA6J09M-vAqAR7Jhwg4M2f' },
    { name: 'Physics Indosaw Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1rXjSkC-TPG3-OYQT23jqjVbfC5olGAe-' },
    { name: 'PolyLab Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=1ieKd920oU_g1cmM5Xagf6MUUvZVN-0VD'},
    { name: 'Qualigens Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=1Oe58z5sj8BnksvqOrb67zz5XawQw3vNV' },
    { name: 'Remi Pricelist', year: '2026-2027', pdf: 'https://drive.google.com/uc?export=download&id=1rtikXunnBYlX6q8uFhsUaIaKQ52cm1Sc' },
    { name: 'Shimadzu Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1ko_TARIyhuO2-YCDTj_BZYaA1DwK4Mpq' },
    { name: 'SRL Pricelist', year: '2025-2026', pdf: 'https://drive.google.com/uc?export=download&id=1t638NLBDaRhNcD4c1UxkWjbEdXoBer7S' },
    { name: 'Systronics Pricelist', year: '2024-2025', pdf: 'https://drive.google.com/uc?export=download&id=1SRWv0Xef23Su735LG9SS7Bll2A-IMbIr' },
    { name: 'Tarson Pricelist', year: '2026-2027', pdf: 'https://docs.google.com/spreadsheets/d/1V68HHlldxrUTKOV5FG_AK3pB2yqJGadF/export?format=pdf' },
    { name: 'Toshniwal Pricelist', year: '2023-2024', pdf: 'https://drive.google.com/uc?export=download&id=1RHibjcYf5fNOwt3bp1GLazsI7wZW9mad' },
    { name: 'Whatman Pricelist', year: '2026-2027', pdf: 'https://docs.google.com/spreadsheets/d/1O0Ll2G1UpBiBJF-NHoInRLGPya98P19c/export?format=pdf' },
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
