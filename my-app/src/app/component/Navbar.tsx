'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBell, FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>(''); // Specify that the state is a string

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => { // Type the event parameter
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => { // Type the event parameter
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <nav className='bg-white py-4 px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center shadow-md'>
      <div className='flex items-center justify-between w-full'>
        {/* Logo and Search Bar */}
        <div className='flex items-center justify-between w-full sm:space-x-6'>
          {/* Logo */}
          <div className='text-2xl font-bold text-blue-600'>
            MORENT
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className='relative w-full sm:w-1/3 mb-4 sm:mb-0'>
            <input
              type='text'
              placeholder='Search Something here...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-full h-full pl-12 px-4 py-2 rounded-full border sm:border-0 border-blue-500 focus:outline-none focus:ring-0 focus:ring-blue-500'
            />
            <div className='absolute left-2 top-2'>
              <Image
                src='/searchbar.png'
                alt='searchbar icon'
                width={20}
                height={20}
              />
            </div>
          </form>
        </div>

        {/* Icons and Profile Section */}
        <div className='flex items-center space-x-4 mt-4 sm:mt-0'>
          <div className='w-[30px] h-[30px] rounded-full border border-gray-300 flex items-center justify-center'>
            <FaBell className='cursor-pointer' />
          </div>

          <div className='w-[30px] h-[30px] rounded-full border border-gray-300 flex items-center justify-center'>
            <FaHeart className='cursor-pointer' />
          </div>

          <div className='w-[30px] h-[30px] rounded-full border border-gray-300 flex items-center justify-center'>
            <IoMdSettings className='cursor-pointer' />
          </div>

          <div className='w-[30px] h-[30px] rounded-full border border-gray-300 flex items-center justify-center'>
            <Image src="/user.png" alt="pic" width={40} height={40} />
          </div>
        </div>
      </div>
    </nav>
  );
};
