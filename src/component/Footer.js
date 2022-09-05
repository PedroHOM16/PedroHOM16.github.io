import React from 'react';
import personal from '../images/personal/perfil-3.jpeg'

// fazer parte em ingles ####################################################
export default function Footer() {
  return (
    <div className='border border-x-0 border-b-0 border-zinc-400 p-1 m-auto flex flex-row bg-slate-800 justify-end'>
      <p className='m-auto text-zinc-200'>Obrigado pela visita, volte quando quiser!</p>
      <img
        src={ personal }
        alt='foto pessoal'
        className='w-20 h-28 mt-auto mb-auto rounded-md'
      />
      <div className="text-zinc-200 ml-2 h-24">
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