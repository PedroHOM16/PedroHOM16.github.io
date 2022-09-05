import React, { useContext } from 'react';
import Header from '../component/Header';
import frontImg from '../images/tools/front.jpg';
import backImg from '../images/tools/back.jpg';
import dbImg from '../images/tools/db.jpg';
import PortContext from '../context/PortContext';
import Card from '../component/Card';
import Footer from '../component/Footer';

const stacks = [frontImg, backImg, dbImg]
//Fazer a parte em ingles #################################################################
export default function Home() {
  const { language } = useContext(PortContext);

  if (language === 'Port') {
    return (
      <div className='bg-gray-900'>
        <Header />
        <div className='flex flex-col ml-2'>
          <h1 className="text-zinc-200 lg:text-4xl sm:text-3xl text-xl ml-4 mt-4 ">Desenvolvedor Web Full-Stack</h1>
          <div>
            <Card imgArray={ stacks } string='Ferramentas de Trabalho:' />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
