import React from 'react';
import Carousel from '../component/Carousel';


export default function Card({ imgArray, string }) {
  return (
    <div className='m-1'>
      <h3 className='ml-2 text-zinc-200 mt-10 md:text-xl sm:text-lg text-md '>{ string }</h3>
      <Carousel imgArray={ imgArray }  />
    </div>
  )
}