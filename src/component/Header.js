import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import PortContext from '../context/PortContext';
// import logo from '../images/foto-pessoal.jpeg';
import T from '../style/tailwind'
import eua from "../images/icons/eua.png";
import brasil from "../images/icons/brasil.png";
import linkedin from "../images/icons/linkedin.png";
import github from "../images/icons/github.png";
import resume from "../images/icons/resume.png";
import curriculo from './../images/resume/pedroHenriqueOliveiraDeMoura.pdf'


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
      <div className={T.header.Label}>
        <a
          href='https://www.linkedin.com/in/pedroadmoura'
          
        >{<img className=" w-10 h-9 sm:w-24 sm:h-24" src={linkedin} alt="linkedin" />}
        </a>
        <a
          href="https://github.com/PedroHOM16"
        >{<img className="w-11 h-8 sm:w-28 sm:h-20" src={github} alt="github" />}
        </a>
        <a href={curriculo} 
        >{<img src={resume} className=' w-9 h-8 sm:w-20 sm:h-20' alt="curriculo" />}
        </a>
        <input
          className={T.header.NameInput}
          placeholder={language === "Port" ? "seu nome ?" : "your name ?"}
          onChange={handleChange}
          value={clientName}
        />
      </div>
      <h3 className={T.header.Tittle}>Pedro Henrique Moura</h3>
      <p className={T.header.Subtittle}>
        <button className={T.header.OptionsPor} value='Port' onClick={handleLangChangePort}>{<img src={brasil} alt="Portugues" />}</button>
        <button className={T.header.OptionsEng} value='Eng' onClick={handleLangChangeEng}>{<img src={eua} alt="Ingles" />}</button>
        Hey {clientName}, {language === "Port" ? "você é bem vindo(a)" : "you are welcome here"} ! &#128526;
      </p>
      <div className={T.header.NavBar}>
        <Link className={T.header.NavItem} to="/home">{language === "Port" ? <p>Iníci&#8962;</p> : <p>H&#8962;me</p>}</Link>
        <Link className={T.header.NavItem} to="/havfun">{language === "Port" ? <p>Divirta-se</p> : <p>HaveFun</p>}</Link>
        {/* <Link className={T.header.NavItem} to="/projects">{language === "Port" ? <p>Projetos</p> : <p>Projects</p> }</Link> */}
        <Link className={T.header.NavItem} to="/aboutme">{language === "Port" ? <p>SobreMim</p> : <p>AboutMe</p>}</Link>
      </div>
    </div>
  )
}
