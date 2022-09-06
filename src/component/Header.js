import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PortContext from '../context/PortContext';
// import logo from '../images/foto-pessoal.jpeg';

export default function Header() {
  const { clientName, language } = useContext(PortContext);

  if (language === 'Port') {
    return (
      <div className='bg-slate-800 flex flex-col font-mono'>
        <h3 className='text-center text-zinc-200 sm:text-5xl lg:text-7xl text-2xl hover:italic'>Pedro Henrique Moura</h3>
        <p className='text-center text-md sm:text-lg md:text-3xl hover:text-sky-200 text-lime-200'>Olá {clientName}, seja muito bem vindo(a)! &#128526;</p>
        <div className='border-dotted border border-x-0 border-b-0 border-zinc-400 container flex flex-wrap justify-around items-center mx-auto'>
          <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/home">Iníci&#8962;</Link>
          <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/resume">Currículo</Link>
          <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/aboutme">SobreMim</Link>
          {/* <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/projects">Projetos</Link> */}
        </div>
      </div>
    )
  }
  return (
    <div className='bg-slate-800 font-mono'>
    <h1 className='text-center text-zinc-200 sm:text-5xl lg:text-7xl text-2xl hover:italic'>Pedro Henrique Moura</h1>
    <p className='text-center text-md sm:text-lg md:text-3xl hover:text-sky-200 text-lime-200'>Hello {clientName}, welcome to my page! &#128526;</p>
    <div className='border-dotted border border-x-0 border-b-0 border-zinc-400 container flex flex-wrap justify-around items-center mx-auto'>
      <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/home">H&#8962;me</Link>
      <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/resume">Resume</Link>
      <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/aboutme">AboutMe</Link>
      {/* <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/projects">Projects</Link> */}
    </div>
  </div>
  )
}
