import React, { useEffect, useState } from 'react';
import { fetchingByNameOrId } from '../support/fetchingDatas';
import '../index.css'
// import { setSelectionRange } from '@testing-library/user-event/dist/utils';

export default function DefaultPage() {
  const [pokemon, setPokemon] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [boolCheck, setBoolCheck] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [listChances, setListChances] = useState([]);
  const [idPokemons, setIdPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const randomId = parseInt(Math.random() * (151 - 1) + 1);

  console.log(idPokemons);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  useEffect(() => {
    setBoolCheck(false);
  }, [])

  const renderPoke = async () => {
    setLoading(true);
    const data = await fetchingByNameOrId(`${idPokemons.includes(randomId) || randomId}`);
    setIdPokemons((prev) => [...prev, data.id]);
    setPokemon(data);
    setLoading(false);
  }

  useEffect(() => {
    renderPoke();
  }, [ setPokemon ])

  useEffect(() => {
    inputValue === pokemon.name
    ? setBoolCheck(true)
    : setBoolCheck(false);
    if (pokemon.name === 'nidoran-f' || pokemon.name === 'nidoran-m') {
      inputValue === 'nidoran'
      && setBoolCheck(true)
    }
  }, [ handleChange ])

  const handleClick = () => {
    if (boolCheck === true){
      renderPoke();
      setInputValue('');
      setScore((prev) => prev + 6 * (count + 1));
      setCount((prev) => prev + 1);
      setListChances((prev) => [ ...prev, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`])
    } else {
      renderPoke();
      setInputValue('');
      setScore((prev) => prev - 5)
      setCount(0);
      setListChances((prev) => [ ...prev, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`])
    }
  }

  const handleClickRestart = () => {
    setListChances([]);
    setScore(0);
    setIdPokemons([]);
  }

  return (
    <div className='border-4 rounded-md border-zinc-600 border-double w-96 h-96 max-w-full'>
      { listChances.length < 10
      ?
        <div className='flex flex-wrap'>
          <div>
            <h1 className='font-mono text-red-600 ml-3 text-lg pt-2'>
              Who's that Pokemon ?
            </h1>
            <div className='flex mx-auto ml-1 mr-8'>
              <input
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Type here...'
              onChange={ handleChange }
              value={ inputValue }
              />
              <button
                type='button'
                className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-2.5 text-center'
                onClick={ handleClick }
              >
                Next
              </button>
            </div>
            <span className='ml-3 font-mono text-red-600'> Score: { score }</span>
            {loading
              ? <p className='text-red-800 mb-24'>Loading...</p>
              : pokemon
                  && <img
                    className={ boolCheck ? 'contrast-100 w-56 h-64 ml-16' : 'contrast-0 w-52 h-60 ml-16' }
                    id='pokemon-image'
                    src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }
                    alt='Who is that pokemon?' />
            }
          </div>
          <div className='flex-wrap'>
          {listChances
          && listChances.map((each, id) => {
            return(
              <div className=' border-red-600 border-2 rounded-full '>
                <img className='w-10' src={ each } alt={ id } />
              </div>
            )
          })}
          </div>
        </div>
      :
        <div>
          <div className='flex'>
            <span className='font-mono text-red-600 ml-16 text-lg'>Your score : { score }</span>
          </div>
          <div className='flex flex-wrap ml-10'>
              {listChances
            && listChances.map((each, id) => {
              return(
                <div className='mr-6 border-red-600 border-2 rounded-full'>
                  <img className='w-10' src={ each } alt={ id } />
                </div>
              )
            })}
          </div>
            <button
              className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-2.5 text-center ml-32 mt-2 mb-1'
              onClick={ handleClickRestart }              
              >
              Restart!
            </button>
        </div>
      }
    </div>
  )
}
