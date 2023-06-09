'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

function Client({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale'
        src='https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png'
        alt='logos'
      />
    </div>
  );
}

export default Client;
