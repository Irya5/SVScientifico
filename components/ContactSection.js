// ContactSection.js

import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { IoIosCall } from 'react-icons/io';
import { FaLocationDot } from "react-icons/fa6";
import { FiCopy, FiCheck } from 'react-icons/fi';

const ContactSection = ({
  email = "svscientificco@gmail.com",
  phone = "+91 9119014669",
  addressLink = "https://www.google.com/maps/dir//s.v+scientific+mzn+address",
  emailPlaceholder = "Email Us",
  phonePlaceholder = "Call Us",
  visitPlaceholder = "Visit Us",
  boldText = "Wanna Explore More?",
  subText = " If you can't find what you need, reach out to us."
}) => {
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isCopiedPhone, setIsCopiedPhone] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setIsCopiedEmail(true);
    setTimeout(() => setIsCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (phone) => {
    navigator.clipboard.writeText(phone);
    setIsCopiedPhone(true);
    setTimeout(() => setIsCopiedPhone(false), 2000);
  };

  return (
    <div className="my-20 mx-4">
      <div className="flex flex-col items-center">
        <button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px] font-gt-super">
          Contact us
        </button>
        <div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-2 pr-4 font-bold">
          {boldText}
        </div>
        <div className="text-[#5D6A85] text-left text-md mt-4">
          {subText}
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 gap-x-24 max-w-7xl mt-12 text-[#242E49] font-[700] text-md mx-4">
        {/* Mail Section */}
        <div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14] w-full min-h-[250px]">
          <div className="bg-[#EDF5FF] w-fit p-2 rounded-[9px]">
            <CiMail />
          </div>
          <div className="mt-10">{emailPlaceholder}</div>
          <div className="text-[#5D6A85] font-[400]">We are here to help</div>
          <div className="mt-6 flex items-center space-x-2">
          <a
						onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=svscientificco@gmail.com', '_blank')}
						className="hover:underline duration-200 linear mt-2"
					>
              {email}
            </a>
            {isCopiedEmail ? (
              <FiCheck className="cursor-pointer text-[#1367F4] text-xl" />
            ) : (
              <FiCopy
                className="cursor-pointer text-[#1367F4] text-xl"
                onClick={() => handleCopyEmail(email)}
              />
            )}
          </div>
        </div>

        {/* Call Section */}
        <div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14] w-full min-h-[250px]">
          <div className="bg-[#FFF1F3] w-fit p-2 rounded-[9px]">
            <IoIosCall />
          </div>
          <div className="mt-10">{phonePlaceholder}</div>
          <div className="text-[#5D6A85] font-[400]">Mon-Fri from 10am to 5pm</div>
          <div className="mt-6 flex items-center space-x-2">
            <a href={`tel:${phone}`}>
              <span>{phone}</span>
            </a>
            {isCopiedPhone ? (
              <FiCheck className="cursor-pointer text-[#1367F4] text-xl" />
            ) : (
              <FiCopy
                className="cursor-pointer text-[#1367F4] text-xl"
                onClick={() => handleCopyPhone(phone)}
              />
            )}
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14] w-full min-h-[250px]">
          <div className="bg-[#F6F2FF] w-fit p-2 rounded-[9px]">
            <FaLocationDot />
          </div>
          <div className="mt-10">{visitPlaceholder}</div>
          <div className="text-[#5D6A85] font-[400]">Visit our office HQ</div>
          <button
            className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 mt-6 rounded-[9px]"
            onClick={() => window.open(addressLink, "_blank")}
          >
            Get direction
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
