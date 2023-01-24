import React, { useEffect, useState, useContext } from 'react';
import { fetchingByNameOrId } from '../support/fetchingDatas';
import '../index.css'
import PortContext from '../context/PortContext';
import T from '../style/tailwind'
// import { setSelectionRange } from '@testing-library/user-event/dist/utils';

export default function DefaultPage() {
  const { language, clientName } = useContext(PortContext);
  const [pokemon, setPokemon] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [boolCheck, setBoolCheck] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [listChances, setListChances] = useState([]);
  const [idPokemons, setIdPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const randomId = parseInt(Math.random() * (151 - 1) + 1);

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
  }, [setPokemon])

  useEffect(() => {
    inputValue === pokemon.name
      ? setBoolCheck(true)
      : setBoolCheck(false);
    if (pokemon.name === 'nidoran-f' || pokemon.name === 'nidoran-m') {
      inputValue === 'nidoran'
        && setBoolCheck(true)
    }
  }, [handleChange])

  const handleClick = () => {
    if (boolCheck === true) {
      renderPoke();
      setInputValue('');
      setScore((prev) => prev + 6 * (count + 1));
      setCount((prev) => prev + 1);
      setListChances((prev) => [...prev, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`])
    } else {
      renderPoke();
      setInputValue('');
      setScore((prev) => prev - 5)
      setCount(0);
      setListChances((prev) => [...prev, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`])
    }
  }

  const handleClickRestart = () => {
    setListChances([]);
    setScore(0);
    setIdPokemons([]);
  }


  return (
    <div className={T.pokemon.App}>
      {listChances.length < 10
        ?
        <div className={T.pokemon.Game}>
          <div>
            <h1 className={T.pokemon.GameTittle}>
              {language === 'Eng' ? `${clientName ? `Hey!!  ${clientName}!!` : "Hey!! You!!" }` : `${clientName ? `Ei!! você mesmo ${clientName}!!` : "Ei!! você!!" }`}
            </h1>
            <h2 className={T.pokemon.GameTittle}>
              {language === 'Eng' ? `Who's that Pokemon ?` : `Qem é esse Pokemon?`}
            </h2>
            <p className={T.pokemon.JumpWrn}>
              {language === 'Eng' ? `Don't know? sKiP to the Next !` : `Se não sabe, vá para o próximo!`}
            </p>
            <div className={T.pokemon.Label}>
              <input
                className={T.pokemon.InputPk}
                placeholder={language === 'Eng' ? 'Type here...' : 'Digite aqui...'}
                onChange={handleChange}
                value={inputValue}
              />
              <button
                type='button'
                className={T.pokemon.BtnPk}
                onClick={handleClick}
              >
                {language === 'Eng' ? 'Next' : 'Próximo'}
              </button>
            </div>
            <span className={T.pokemon.Score}>{language === 'Eng' ? `${clientName || "your"}'s Score: ` : `Pontuação: `}
              {score}
            </span>
            {loading
              ? <p className={T.pokemon.Loading}>{language === 'Eng' ? `Loading: ` : `Carregando: `}...</p>
              : pokemon
              && <img
                className={boolCheck ? 'contrast-100 w-56 h-64 ml-' : 'contrast-0 w-52 h-60 '}
                id='pokemon-image'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt='Who is that pokemon?' />
            }
            <div className={T.pokemon.CapturedPok}>
              {listChances
                && listChances.map((each, id) => {
                  return (
                    <img className={T.pokemon.Pokebolas} src={each} alt={id} />
                    // <div className=' border-red-600 border rounded-full m-2 p-2 '>
                    // </div>
                  )
                })}
            </div>
          </div>
        </div>
        :
        <div>
          <div className='flex'>
            <span className='font-mono text-red-600 ml-16 text-lg'>{language === 'Eng' ? `Congratulations ${clientName}!! You-ve done ${score} points ` : `Parabéns ${clientName}!! Você fez ${score} pontos! `}</span>
          </div>
          <div className='flex flex-wrap'>
            {listChances
              && listChances.map((each, id) => {
                return (
                  <div className='border-red-600 border-2 rounded-full'>
                    <img className='' src={each} alt={id} />
                  </div>
                )
              })}
          </div>
          <button
            className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm p-2.5 text-center ml-32 mt-2 mb-1'
            onClick={handleClickRestart}
          >
            Restart!
          </button>
        </div>
      }
    </div>
  )
}
