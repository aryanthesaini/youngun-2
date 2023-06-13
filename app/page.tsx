import About from '@/components/About';
import Clients from '@/components/Clients';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Numbers from '@/components/Numbers';
import Slider from '@/components/Numbers';
import Team from '@/components/Team';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-red-500 scrollbar-thin'>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='clients' className='snap-start'>
        <Clients />
      </section>

      <section id='slider' className='snap-start'>
        <Numbers />
      </section>
      <section id='team' className='snap-center'>
        <Team />
      </section>
      <section id='contactMe' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  );
}
