import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PortContext from '../context/PortContext';
import '../index.css'

export default function Login() {
  const { language, setLanguage, clientName, setClientName } = useContext(PortContext);
  const [ loginBool, setLoginBool ] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setClientName(value);
  }
  
  const handleLangChange = ({target: { value } }) => {
    setLanguage(value);
  }

  const handleClick = () => {
    if (clientName.length === 0 && language === 'Eng') {
      return alert('Please, introduce yourself! Put your first name on the input.');
    } if (clientName.length === 0 && language === 'Port') {
        return alert('Por favor, se apresente! Insira seu primeiro nome no input.');
    }
    localStorage.setItem('language', language);
    localStorage.setItem('clientName', clientName);
    return setLoginBool(true);
  }

  return (
    loginBool
    ? <Redirect to="/home" />
    : (
      <div className='bg-slate-900 text-zinc-300 text-mono flex flex-col items-center'>
        <h2 className='md:text-4xl md:mb-6 sm:text-3xl sm:mb-4 text-2xl mb-2'>Hey there!</h2>
        <h3 className='md:text-4xl sm:text-3xl text-2xl'>Please, let me know you:</h3>
        <input
          className='md:w-96 md:h-12 md:text-3xl sm:w-80 sm:h-10 sm:text-2xl text-center mb-2 bg-slate-300 text-slate-500 rounded-md border-2 border-slate-600 hover:border-sky-300 hover:bg-sky-100'
          placeholder="Type your firstName"
          onChange={ handleChange }
          value={clientName}
        />
        <select
          value={ language }
          onChange={ handleLangChange }
          className='md:w-96 md:h-12 md:text-2xl sm:w-80 sm:h-10 sm:text-xl w-36 h-7 text-center bg-slate-300 text-slate-500 m-2 rounded-md border-2 border-slate-600 hover:border-sky-300 hover:bg-sky-100'
        >
          <option className='text-sky-800' value='Port'>Português</option>
          <option className='text-red-800' value='Eng'>English</option>
        </select>
        <button
          type="button"
          onClick={ handleClick }
          className='md:w-28 md:h-28 md:text-4xl sm:w-20 sm:h-20 sm:text-xl w-12 h-12 bg-sky-600 rounded-full border-2 p-1 border-slate-800 hover:border-slate-500 mb-96'
        >
          Go!
        </button>
      </div>
    )
  )
}
