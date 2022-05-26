import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PortContext from '../context/PortContext';

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
    setLoginBool(true)
  }

  return (
    loginBool
    ? <Redirect to="/home" />
    : (
      <div>
        <h2>Hey there!</h2>
        <h3>Please, introduce yourself:</h3>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="firstName"
          onChange={ handleChange }
          value={clientName}
        />
        <select
          value={ language }
          onChange={ handleLangChange }
          className="block py-2.5 px-0 w-1/3 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value='null'>Choose a language</option>
          <option value='port'>Português</option>
          <option value='eng'>English</option>
        </select>
        <button
          type="button"
          onClick={ handleClick }
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Go!
        </button>
      </div>
    )
  )
}
