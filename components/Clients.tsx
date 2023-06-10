'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Client from './Client';

type Props = {};

function Clients({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      whileInView={{
        opacity: 1,
      }}
      className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:scroll-px-10 min-h-screen justify-center xl-space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px]  text-gray-500 text-xl'>
        Our clients
      </h3>

      <h3 className=' absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over the icons
      </h3>

      <div className='grid grid-cols-4 gap-5 mt-10 pt-10 px-2'>
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
      </div>
    </motion.div>
  );
}

export default Clients;
