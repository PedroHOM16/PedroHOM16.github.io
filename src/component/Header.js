import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
// import PortContext from '../context/PortContext';
// import logo from '../images/foto-pessoal.jpeg';
import T from '../style/tailwind'

export default function Header() {
  // const { clientName, language } = useContext(PortContext);
  const langLocalStorage = localStorage.getItem('language');
  const nameLocalStorage = localStorage.getItem('clientName');

  if (langLocalStorage === 'Port') {
    return (
      <div className={ T.header.App }>
        {/* <h3 className={ T.header.Tittle }>Pedro Henrique Moura</h3> */}
        <p className={ T.header.Subtittle }>Olá {nameLocalStorage}, seja muito bem vindo(a)! &#128526;</p>
        <div className={ T.header.NavBar }>
          <Link className={ T.header.NavItem } to="/home">Iníci&#8962;</Link>
          <Link className={ T.header.NavItem } to="/havfun">Divirta-se</Link>
          <Link className={ T.header.NavItem } to="/projects">Projetos</Link>
          <Link className={ T.header.NavItem } to="/aboutme">SobreMim</Link>
          {/* <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/projects">Projetos</Link> */}
        </div>
      </div>
    )
  }
  return (
    <div className={ T.header.App }>
        {/* <h3 className={ T.header.Tittle }>Pedro Henrique Moura</h3> */}
        <p className={ T.header.Subtittle }>Olá {nameLocalStorage}, seja muito bem vindo(a)! &#128526;</p>
        <div className={ T.header.NavBar }>
          <Link className={ T.header.NavItem } to="/home">H&#8962;me</Link>
          <Link className={ T.header.NavItem } to="/havfun">HaveFun</Link>
          <Link className={ T.header.NavItem } to="/projects">Projects</Link>
          <Link className={ T.header.NavItem } to="/aboutme">AboutMe</Link>
          {/* <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/projects">Projetos</Link> */}
        </div>
      </div>
  )
}
