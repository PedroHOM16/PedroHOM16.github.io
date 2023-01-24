import React from 'react';
import Carousel from '../component/Carousel';
import T from '../style/tailwind';


export default function Card({ imgArray, string }) {
  return (
    <div className={ T.card.App }>
      <h3 className={ T.card.Tittle }>{ string }</h3>
      <Carousel imgArray={ imgArray }  />
    </div>
  )
}