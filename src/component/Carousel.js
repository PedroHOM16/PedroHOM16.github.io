import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import PortContext from '../context/PortContext';

//https://www.youtube.com/watch?v=ho93e0IhdTA&ab_channel=FullStackNiraj


export default function Carousel({ imgArray }) {
  const [ currentImg, setCurrentImg ] = useState(0);
  const { language } = useContext(PortContext);
  
  const handleOnNextClick = () => {
    if (currentImg !== imgArray.length - 1) {
      return setCurrentImg(currentImg + 1);
    }
    return setCurrentImg(0);
  }

  const handleOnPrevClick = () => {
    if (currentImg !== 0) {
      return setCurrentImg(currentImg - 1);
    }
    return setCurrentImg(imgArray.length - 1);
  }

  if (language === 'Port') {
    return (
      <div className='w-full select-none relative md:w-96 sm:w-80 w-72 ml-6'>
        <div className='aspect-w-16 aspect-h-9'>
          <img
            src={ imgArray[currentImg] }
            alt='imagens de ferramentas de trabalho'
            className='border-2 border-sky-900 rounded-md'
          />
        </div>
        <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
          <button onClick={handleOnPrevClick} className='border-2 border-sky-900 rounded-md hover:bg-black hover:text-sky-100 bg-sky-50 text-sm'>Anterior</button>
          <button onClick={handleOnNextClick} className='border-2 border-sky-900 rounded-md hover:bg-black hover:text-sky-100 bg-sky-50 text-sm'>Próximo</button>
        </div>
      </div>
    )
  }
  return (
    <div className='w-full select-none relative md:w-96 sm:w-80 w-72 ml-6'>
    <div className='aspect-w-16 aspect-h-9'>
      <img
        src={ imgArray[currentImg] }
        alt='stacks images'
        className='border-2 border-sky-900 rounded-md'
      />
    </div>
    <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
      <button className='border-2 border-sky-900 rounded-md hover:bg-black hover:text-sky-100 bg-sky-50 text-sm' onClick={handleOnPrevClick}>Previous</button>
      <button className='border-2 border-sky-900 rounded-md hover:bg-black hover:text-sky-100 bg-sky-50 text-sm' onClick={handleOnNextClick}>Next</button>
    </div>
  </div>
  )
}

Carousel.propTypes = {
  imgArray: PropTypes.array,
}.isRequired;