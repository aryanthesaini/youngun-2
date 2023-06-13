import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      {' '}
      <h3 className='absolute top-24 uppercase tracking-[15px]  text-gray-500 text-xl'>
        Get in touch
      </h3>
      <div className='flex flex-col space-y-6 mt-6'>
        <h4 className='text-xl md:text-2xl lg:text-3xl text-center'>
          It is easier than you think{' '}
          <span className='text-red-500 text-2xl md:text-3xl lg:text-4xl'>
            Let's Talk
          </span>{' '}
        </h4>
        <br />
        <br />
        {/* <div className='space-y-8 py-2'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-red-500 h-7 w-7 animate-pulse' />
            <p className='text-xl'>+91 1234567890</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-red-500 h-7 w-7 animate-pulse' />
            <p className='text-xl'>youngun.in@gmail</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-red-500 h-7 w-7 animate-pulse' />
            <p className='text-xl'>Gurgaon address</p>
          </div>
        </div> */}

        <form className='flex flex-col space-y-2 w-fit mx-auto '>
          <div className='flex space-x-2'>
            <input className='contactInput' placeholder='Name' type='text' />
            <input className='contactInput' type='email' placeholder='Email' />
          </div>
          <input className='contactInput' placeholder='Subject' type='text' />
          <textarea placeholder='Message' className='contactInput' />
          <button
            type='submit'
            className='bg-[#F7A999] py-5 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
