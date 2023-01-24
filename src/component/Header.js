import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import PortContext from '../context/PortContext';
// import logo from '../images/foto-pessoal.jpeg';
import T from '../style/tailwind'

export default function Header() {
  // const { clientName, language } = useContext(PortContext);
  // const langLocalStorage = localStorage.getItem('language');
  // const clientName = localStorage.getItem('clientName');
  const { language, setLanguage, clientName, setClientName } = useContext(PortContext);

  const handleLangChange = ({ target: { value } }) => {
    setLanguage(value);
  }

  const handleChange = ({ target: { value } }) => {
    setClientName(value);
  }

  if (language === 'Port') {
    return (
      <div className={T.header.App}>
        {/* <h3 className={ T.header.Tittle }>Pedro Henrique Moura</h3> */}
        <div className={T.header.Label}>
          <select
            value={language}
            onChange={handleLangChange}
            className={T.home.RealLoginSelect}
          >
            <option className={T.home.RealLoginOptionsPor} value='Port'>Português</option>
            <option className={T.home.RealLoginOptionsEng} value='Eng'>English</option>
          </select>
          <p className={T.header.Subtittle}>Ei {clientName}, você é bem vindo(a)! &#128526;</p>
          <div className={T.home.RealLogin}>
            <h3 className={T.home.RealLoginTittle}>Qual o seu nome? </h3>
            <input
              className={T.home.RealLoginInput}
              placeholder={language === "Port" ? "Digite seu nome" : "Type your firstName"}
              onChange={handleChange}
              value={clientName}
            />
          </div>
        </div>
        <div className={T.header.NavBar}>
          <Link className={T.header.NavItem} to="/home">Iníci&#8962;</Link>
          <Link className={T.header.NavItem} to="/havfun">Divirta-se</Link>
          <Link className={T.header.NavItem} to="/projects">Projetos</Link>
          <Link className={T.header.NavItem} to="/aboutme">SobreMim</Link>
          {/* <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/projects">Projetos</Link> */}
        </div>
      </div>
    )
  }
  return (
    <div className={T.header.App}>
      {/* <h3 className={ T.header.Tittle }>Pedro Henrique Moura</h3> */}
      <div className={T.header.Label}>
          <select
            value={language}
            onChange={handleLangChange}
            className={T.home.RealLoginSelect}
          >
            <option className={T.home.RealLoginOptionsPor} value='Port'>Português</option>
            <option className={T.home.RealLoginOptionsEng} value='Eng'>English</option>
          </select>
          <p className={T.header.Subtittle}>Hey {clientName}, you are welcome here! &#128526;</p>
          <div className={T.home.RealLogin}>
            <h3 className={T.home.RealLoginTittle}>Can I have your name?</h3>
            <input
              className={T.home.RealLoginInput}
              placeholder={language === "Port" ? "Digite seu nome" : "Type your firstName"}
              onChange={handleChange}
              value={clientName}
            />
          </div>
        </div>
      <div className={T.header.NavBar}>
        <Link className={T.header.NavItem} to="/home">H&#8962;me</Link>
        <Link className={T.header.NavItem} to="/havfun">HaveFun</Link>
        <Link className={T.header.NavItem} to="/projects">Projects</Link>
        <Link className={T.header.NavItem} to="/aboutme">AboutMe</Link>
        {/* <Link className='text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300' to="/projects">Projetos</Link> */}
      </div>
    </div>
  )
}
