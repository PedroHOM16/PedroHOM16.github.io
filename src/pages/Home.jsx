import React from 'react';
import Header from '../component/Header';
import frontImg from '../images/tools/front.jpg';
import backImg from '../images/tools/back.jpg';
import dbImg from '../images/tools/db.jpg';
// import PortContext from '../context/PortContext';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Pokemon from '../component/Pokemon'
import PaintBox from '../component/PaintBox'
import '../index.css'

const stacks = [frontImg, backImg, dbImg]
//Fazer a parte em ingles #################################################################
export default function Home() {
  const langLocalStorage = localStorage.getItem('language');
  // const nameLocalStorage = localStorage.getItem('clientName');
  // const { language } = useContext(PortContext);

  if (langLocalStorage === 'Port') {
    return (
      <div className='bg-gray-900 w-full flex flex-col justify-around'>
        <Header />
        <h1 className="text-zinc-200 lg:text-4xl sm:text-3xl mt-4 mb-4 ml-4 text-xl">Desenvolvedor Web Full-Stack:</h1>
        <div className='mb-4'>
          <Card imgArray={stacks} string='Stacks:' />
        </div>
        <h1 className='text-zinc-200 hover:text-yellow-400 lg:text-4xl sm:text-3xl mt-4 mb-4 ml-4 text-xl'>Divirta-se:</h1>
        <div className='flex flex-row flex-wrap justify-around'>
          <div className='border-8 bg-green-600 rounded-md border-orange-800 p-2 h-96 '>
            <PaintBox />
          </div>
          <div className='w-96 mb-10'>
            <Pokemon />
          </div>
        </div>
        <Footer />
      </div>
    )
  } if (langLocalStorage === 'Eng') {
    return (
      <div className='bg-gray-900 w-full flex flex-col justify-around'>
        <Header />
        <h1 className="text-zinc-200 lg:text-4xl sm:text-3xl mt-4 mb-4 ml-4 text-xl">Full-Stack Web Development:</h1>
        <div className='mb-4'>
          <Card imgArray={stacks} string='Stacks:' />
        </div>
        <h1 className='text-zinc-200 hover:text-yellow-400 lg:text-4xl sm:text-3xl mt-4 mb-4 ml-4 text-xl'>Have fun:</h1>
        <div className='flex flex-row flex-wrap justify-around'>
          <div className='border-8 bg-sky-600 rounded-md border-orange-800 p-2 h-96 '>
            <PaintBox />
          </div>
          <div className='w-96 mb-10'>
            <Pokemon />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
