'use client';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Jokes', 'Memes', 'Social media presence'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://testapp.youngun.in/static/media/youngunnew.b912bef6.jpg'
        alt='youngun Logo'
      />
      <div className='z-20'>
        <h1 className='text-3xl font-semibold uppercase  pb-2 tracking-[15px]'>
          {' '}
          YOUNGUN
        </h1>
        <h2 className=' text-2xl  scroll-px-10  text-gray-500'>
          <span className='mr-3'>We create {text}</span>
          <Cursor cursorColor='white' />
        </h2>

        <div className='pt-5'>
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
        </div>
      </div>
    </div>
  );
}
