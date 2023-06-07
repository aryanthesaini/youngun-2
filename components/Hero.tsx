'use client';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Jokes', 'Memes', 'Revenue'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      {/* <img className='' src='https://testapp.youngun.in/static/media/youngunnew.b912bef6.jpg' /> */}
      <BackgroundCircles />

      <div className='z-20'>
        <h1 className='text-3xl font-semibold uppercase  pb-2 tracking-[15px]'>
          {' '}
          MAKE MEMES,<span className='text-red-400'> NOT ADS </span>
        </h1>
        <h2 className=' text-2xl  scroll-px-10  text-gray-500'>
          <span className='mr-3 mt-5'>
            We create <span className='text-red-400'>{text} </span>{' '}
          </span>
          <Cursor cursorColor='white' />
        </h2>

        {/* <div className='pt-7 pb-5 px-10   scroll-px-10  text-gray-500'>
          We are a humour-led creative agency that opens doors to the internet
          culture for brands Powered by meme marketing
        </div> */}

        {/* <div className='pt-7'>
          <Link href={'#about'}>
            <button className='heroButton'>About us</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Our Clients</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Our Team</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Reach Out</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
