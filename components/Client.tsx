'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  name: string;
  url: string;
};

function Client({ directionLeft, name, url }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
        }}
        className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-28 xl:h-28 filter group-hover:grayscale transition-duration-300 ease-in-out'
        src={url}
        alt='logos'
      />

      <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-28 xl:h-28 rounded-full z-0 '>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl font-bold text-black opacity-100'>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Client;
