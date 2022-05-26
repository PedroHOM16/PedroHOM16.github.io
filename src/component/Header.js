import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/foto-pessoal.jpeg';

export default function Header() {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <img
            src={ logo }
            alt="Foto pessoal"
            className='mb-3 w-12 h-12 rounded-full shadow-lg'
          />
          <div className="text-xs">
            <h3>Pedro Henrique Oliveira de Moura</h3>
            <p>(34) 99994-2908</p>
            <p>pedro.admoura@gmail.com</p>
            <a href="https://github.com/PedroHOM16" className="text-blue-600 underline">Acesse meu GitHub: PedroHOM16</a>
            <br/>
            <a href='https://www.linkedin.com/in/pedroadmoura' className="text-blue-600 underline">Acesse meu LinkedIn: pedroadmoura</a>
          </div>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <Link to="/home">Home</Link>
          <Link to="/aboutme">AboutMe</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  )
}
