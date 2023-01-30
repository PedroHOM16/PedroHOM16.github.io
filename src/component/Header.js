import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import PortContext from '../context/PortContext';
// import logo from '../images/foto-pessoal.jpeg';
import T from '../style/tailwind'
import eua from "../images/icons/eua.png";
import brasil from "../images/icons/brasil.png";

export default function Header() {
  // const { clientName, language } = useContext(PortContext);
  // const langLocalStorage = localStorage.getItem('language');
  // const clientName = localStorage.getItem('clientName');
  const { language, setLanguage, clientName, setClientName } = useContext(PortContext);

  const handleLangChangePort = ({ target: { value } }) => {
    setLanguage("Port");
  }

  const handleLangChangeEng = ({ target: { value } }) => {
    setLanguage("Eng");
  }

  const handleChange = ({ target: { value } }) => {
    setClientName(value);
  }

  console.log("img brasil : ", language)

    return (
      <div className={T.header.App}>
        <h3 className={ T.header.Tittle }>Pedro Henrique Moura</h3>
        <div className={T.header.Label}>
          {/* <select
            value={language}
            onChange={handleLangChange}
            className={T.header.LanguageSelect}
          >
          </select> */}
        </div>
        <p className={T.header.Subtittle}>
          <button className={T.header.OptionsPor} value='Port' onClick={handleLangChangePort}>{<img src={brasil} />}</button>
          <button className={T.header.OptionsEng} value='Eng' onClick={handleLangChangeEng}>{<img src={eua} />}</button>
             Hey {clientName}, {language === "Port" ? "você é bem vindo(a)" : "you are welcome here" } ! &#128526;
        </p>
          <input
            className={T.header.NameInput}
            placeholder={language === "Port" ? "seu nome ?" : "your name ?"}
            onChange={handleChange}
            value={clientName}
          />
        <div className={T.header.NavBar}>
          <Link className={T.header.NavItem} to="/home">{language === "Port" ? <p>Iníci&#8962;</p> : <p>H&#8962;me</p> }</Link>
          <Link className={T.header.NavItem} to="/havfun">{language === "Port" ? <p>Divirta-se</p> : <p>HaveFun</p> }</Link>
          {/* <Link className={T.header.NavItem} to="/projects">{language === "Port" ? <p>Projetos</p> : <p>Projects</p> }</Link> */}
          <Link className={T.header.NavItem} to="/aboutme">{language === "Port" ? <p>SobreMim</p> : <p>AboutMe</p> }</Link>
        </div>
      </div>
    )
}
