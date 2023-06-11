'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TeamMembers from './TeamMembers';

type Props = {};

function Team({}: Props) {
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
      className='h-screen flex relative  overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px]  text-gray-500 text-xl  '>
        Meet our team
      </h3>

      <h3 className=' absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm py-4'>
        swipe to see more
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20'>
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
      </div>
    </motion.div>
  );
}

export default Team;
