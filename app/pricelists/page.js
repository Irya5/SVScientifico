"use client";
import ContactSection from "@/components/ContactSection";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState } from 'react';

export default function Pricelists() {

  const pricelists = [
    { name: 'Aczet Pricelist', year: '2024-2025', pdf: '/assets/current-pricelist/Qualigens.pdf' },
    { name: 'Aquasol Pricelist', year: '2024-2025', pdf: '/assets/current-pricelist/Qualigens.pdf' },
    { name: 'Avantor Pricelist', year: '2024-2025', pdf: '/assets/current-pricelist/Qualigens.pdf' },
    { name: 'Axiva Pricelist', year: '2024-2025', pdf: '/assets/current-pricelist/Qualigens.pdf' },
    { name: 'Borosil Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'BP Industries Pricelist', year: '2024-2025', pdf: '/assets/current-pricelist/Qualigens.pdf' },
    { name: 'Glosil Pricelist', year: '2024-2025', pdf: '/assets/current-pricelist/Qualigens.pdf' },
    { name: 'Himedia Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'ITL Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Merck Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Olympus Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Physics Indosaw Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Prerana Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Qualigens Pricelist', year: '2024-2025', pdf: '/assets/current-pricelist/Qualigens.pdf' },
    { name: 'Remi Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Shimadzu Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'SRL Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Systrinics Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Tarsons Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Toshniwal Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },
    { name: 'Whatman Pricelist', year: '2024-2025', pdf: '/path/to/Borosil-Pricelist-2024-2025.pdf' },

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
                  download={`${pricelist.name.replace(/ /g, '_')}_${pricelist.year}.pdf`}
                  className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49]"
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
