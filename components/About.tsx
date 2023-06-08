'use client';

import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

function About({}: Props) {
  return (
    <div className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px]  text-gray-500 text-xl '>
        About us
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{ once: true }} //optional
        src='https://testapp.youngun.in/static/media/youngunnew.b912bef6.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl '>
          Here is a{' '}
          <span className='text-red-500 text-xl md:text-2xl lg:text-3xl'>
            little
          </span>{' '}
          background
        </h4>
        <p className='text-base md:text-2xl lg:text-3xl font-thin'>
          We are a humour-led creative agency that opens doors to the internet
          culture for brands powered by{' '}
          <span className='text-red-500 '>meme marketing</span>
        </p>
      </div>
    </div>
  );
}

export default About;
