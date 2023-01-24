import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import PortContext from '../context/PortContext';
import T from '../style/tailwind';

//https://www.youtube.com/watch?v=ho93e0IhdTA&ab_channel=FullStackNiraj


export default function Carousel({ imgArray }) {
  const [currentImg, setCurrentImg] = useState(0);

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

  return (
    <div className={ T.carousel.App }>
      <button onClick={handleOnPrevClick} className={ T.carousel.LeftBtn }>&#9194;</button>
        <img
          src={imgArray[currentImg]}
          alt='stacks images'
          className={ T.carousel.Img }
        />
        <button onClick={handleOnNextClick} className={ T.carousel.RigthBtn }>&#9193;</button>
    </div>
  )
}

Carousel.propTypes = {
  imgArray: PropTypes.array,
}.isRequired;