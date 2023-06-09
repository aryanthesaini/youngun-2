import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function TeamMembers({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden '>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
        alt='Team member image'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>SAKSHAM JADON</h4>
        <p className='font-bold text-xl mt-1 py-2'>Founder</p>

        <ul className='list-disc space-y-4 ml-5 text-lg font-thin'>
          <li>what they do</li>
          <li>what they do</li>
          <li>what they do</li>
        </ul>
      </div>
    </article>
  );
}

export default TeamMembers;
