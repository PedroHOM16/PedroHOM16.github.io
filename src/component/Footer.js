import React from 'react';
import personal from '../images/personal/perfil-1.jpeg'

// fazer parte em ingles ####################################################
export default function Footer() {
  return (
    <div className='flex text-sm flex-row bg-slate-800 border border-x-0 border-b-0 border-zinc-400 p-1'>
      <p className='m-auto text-zinc-200'>Obrigado pela visita, volte quando quiser!</p>
      <img
        src={ personal }
        alt='foto pessoal'
        className='w-14 mr-1 h-18 md:w-20 md:h-28 mt-auto mb-auto rounded-md'
      />
      <div className="text-zinc-200 md:mt-4 md:ml-2 md:h-24">
        <h3>Pedro Henrique Oliveira de Moura</h3>
        <p>(34) 99994-2908</p>
        <p>pedro.admoura@gmail.com</p>
        <div className='flex'>
          <a href="https://github.com/PedroHOM16" className="ml-1 mr-2 underline">GitHub</a>
          <br />
          <a href='https://www.linkedin.com/in/pedroadmoura' className="underline">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}