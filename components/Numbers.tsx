'use client';

import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
type Props = {};

function Numbers({}: Props) {
  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:scroll-px-10 min-h-screen justify-center xl-space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px]  text-gray-500 text-xl'>
        Our story in numbers
      </h3>
      <div className='w-[2000px] mt-[170px] xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929] py-4 font-light text-2xl xl:text-4xl text-red-500 '>
        <CountUp
          enableScrollSpy={true}
          redraw={true}
          end={40}
          scrollSpyDelay={2}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Dedicated meme <br /> marketing campaigns
        </h1>
      </div>
      <br />
      <div className='w-[2000px]  xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929]  py-4 font-light text-2xl xl:text-4xl text-red-500 '>
        <CountUp enableScrollSpy={true} end={425} suffix='m+'>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Campaign Reach Delivered
        </h1>
      </div>
      <br />
      <div className='w-[2000px]  xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929] py-4 font-light text-2xl xl:text-4xl text-red-500 '>
        <CountUp enableScrollSpy={true} end={7} suffix='k+'>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Object Driven Memes Crafted
        </h1>
      </div>
      <br />
      <div className='w-[2000px]  xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929] py-4 font-light text-2xl xl:text-4xl text-red-500  '>
        <CountUp enableScrollSpy={true} end={11} suffix='.5%'>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Average Engagement rate
        </h1>
      </div>
    </div>
  );
}

export default Numbers;
