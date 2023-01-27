import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import PortContext from '../context/PortContext';
// import logo from '../images/foto-pessoal.jpeg';
import T from '../style/tailwind'
import eua from "../images/icons/eua.jpeg";
const brasil = require("../images/icons/brasil.png");

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

  console.log("img brasil : ", brasil.slice(10))

    return (
      <div className={T.header.App}>
        <h3 className={ T.header.Tittle }>Pedro Henrique Moura</h3>
        <div className={T.header.Label}>
          <select
            value={language}
            onChange={handleLangChange}
            className={T.header.LanguageSelect}
          >
            <option className={T.header.OptionsPor} value='Port' >Português</option>
            <option className={T.header.OptionsEng} value='Eng'>English</option>
          </select>
          <input
            className={T.header.NameInput}
            placeholder={language === "Port" ? "Digite seu nome" : "Type your name"}
            onChange={handleChange}
            value={clientName}
          />
        </div>
        <p className={T.header.Subtittle}>
          Hey {clientName}, {language === "Port" ? "você é bem vindo(a)" : "you are welcome here" } ! &#128526;
        </p>
        <div className={T.header.NavBar}>
          <Link className={T.header.NavItem} to="/home">{language === "Port" ? <p>Iníci&#8962;</p> : <p>H&#8962;me</p> }</Link>
          <Link className={T.header.NavItem} to="/havfun">{language === "Port" ? <p>Divirta-se</p> : <p>HaveFun</p> }</Link>
          {/* <Link className={T.header.NavItem} to="/projects">{language === "Port" ? <p>Projetos</p> : <p>Projects</p> }</Link> */}
          <Link className={T.header.NavItem} to="/aboutme">{language === "Port" ? <p>SobreMim</p> : <p>AboutMe</p> }</Link>
        </div>
      </div>
    )
}
