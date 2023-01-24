import React from 'react';
import Header from '../component/Header';
import frontImg from '../images/tools/front.jpg';
import backImg from '../images/tools/back.jpg';
import dbImg from '../images/tools/db.jpg';
// import beatles from '../images/bands/beatles-1.jpg';
// import PortContext from '../context/PortContext';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Pokemon from '../component/Pokemon'
import PaintBox from '../component/PaintBox'
import '../index.css'
import T from '../style/tailwind'

const stacks = [frontImg, backImg, dbImg]
//Fazer a parte em ingles #################################################################
export default function Home() {
  const langLocalStorage = localStorage.getItem('language');
  // const nameLocalStorage = localStorage.getItem('clientName');
  // const { language } = useContext(PortContext);


  if (langLocalStorage === 'Port') {
    return (
      <div className= { T.havfun.App }>
        <Header />
        {/* <div className={ T.havfun.StackCard }>
          <Card imgArray={stacks} string='Stacks:' />
        </div> */}
        <div className={ T.havfun.HavFun }>
          <div 
            className={ T.havfun.Paintbox }
            // style={{backgroundImage: {beatles} }}
          >
            <PaintBox />
          </div>
          <div className={ T.havfun.PokeGame }>
            <Pokemon />
          </div>
        </div>
        <Footer />
      </div>
    )
  } if (langLocalStorage === 'Eng') {
    return (
      <div className= { T.havfun.App }>
        <Header />
        <div className={ T.havfun.StackCard }>
          <Card imgArray={stacks} string='Stacks:' />
        </div>
        <h1 className={ T.havfun.TitleHavFun }>Have fun:</h1>
        <div className={ T.havfun.HavFun }>
          <div className={ T.havfun.Paintbox }>
            <PaintBox />
          </div>
          <div className={ T.havfun.PokeGame }>
            <Pokemon />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
