import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import resume from '../images/resume.jpg'

export default function Resume() {
    return (
      <div className='bg-gray-900'>
        <Header />
        <img alt='resume' src={ resume }/>
        <Footer />
      </div>
    )
}