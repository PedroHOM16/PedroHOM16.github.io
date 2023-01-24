import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PortContext from '../context/PortContext';
import '../index.css'
import Card from '../component/Card';
import images from '../images'
import T from '../style/tailwind'
import curriculo from './../images/resume/pedroHenriqueOliveiraDeMoura-19jan23.pdf'
import gitIcon from './../images/icons/github-mark-white.svg'

export default function Login() {
  const { language, setLanguage, clientName, setClientName } = useContext(PortContext);
  const [loginBool, setLoginBool] = useState(false);
  const { perfil } = images;

  const handleChange = ({ target: { value } }) => {
    setClientName(value);
  }

  const handleLangChange = ({ target: { value } }) => {
    setLanguage(value);
  }

  const handleClick = () => {
    if (clientName.length === 0 && language === 'Eng') {
      return alert('Please, introduce yourself! Put your first name on the input.');
    } if (clientName.length === 0 && language === 'Port') {
      return alert('Por favor, se apresente! Insira seu primeiro nome no input.');
    }
    localStorage.setItem('language', language);
    localStorage.setItem('clientName', clientName);
    return setLoginBool(true);
  }

  return (
    loginBool
      ? <Redirect to="/havfun" />
      : (
        <div className={T.login.App}>
          <h2 className={T.login.Name}>Pedro Henrique Oliveira de Moura</h2>
          <br />
          <select
              value={language}
              onChange={handleLangChange}
              className={T.login.RealLoginSelect}
            >
              <option className={T.login.RealLoginOptionsPor} value='Port'>Português</option>
              <option className={T.login.RealLoginOptionsEng} value='Eng'>English</option>
            </select>
          <div className={T.login.BodyAll} >
            {language === "Port"
              ? <div className=''>
                  <h1 className={T.login.BodyH1}>&#9749; Olá! Prazer em receber você!</h1>
                  <br />
                  <h2 className={T.login.BodyH2}>Sou Desenvolvedor Web, formado em Administração de empresas e gosto de novos desafios!</h2>
                  <br />
                  <p className={T.login.BodyP1}>Modelagem de dados, Tabelas e diagramas, Criação de APIs e suas rotas, acessos pelo front com uma boa interface...
                    Essas são minhas atividades mais recorrentes.</p>
                  <br />
                  <p className={T.login.BodyP}>Uso JavaScript como linguagem padrão</p>
                  <p className={T.login.BodyP}>Vite com React para o frontend, com CSS básico ou Bootstrap e Tailwind</p>
                  <p className={T.login.BodyP}>Node.js para criar a API com express para as rotas e sequelize como ORM com MySql ou Postgres</p>
                  <p className={T.login.BodyP}><a href={curriculo} className='text-green-500'>Clique aqui</a> e veja meu currículo ou faça já o <a href={curriculo} download className='text-green-500'>Download</a>.</p>
                  <p className={T.login.BodyP}>Confira alguns projetos no meu <a
                    href="https://github.com/PedroHOM16"
                    className="text-green-500 ml-1 mr-2 underline"
                  >GitHub</a></p>
                  <p className={T.login.BodyP}>Também podemos nos conectar pelo <a
                    href='https://www.linkedin.com/in/pedroadmoura'
                    className="text-green-500 underline"
                  >LinkedIn</a>!</p>
              </div>
              : <div className=''>
                <h1 className={T.login.BodyH1}>&#9749; Hello! Nice to meet you!</h1>
                  <br />
                  <h2 className={T.login.BodyH2}>I'm a Web Developer, graduated in Business Administration and I like new challenges!</h2>
                  <br />
                  <p className={T.login.BodyP1}>Data modeling, Tables and diagrams, API creation and its routes, front-end access with a good interface...These are my most common activities.</p>
                  <br />
                  <p className={T.login.BodyP}>I use JavaScript as standard language.</p>
                  <p className={T.login.BodyP}>Vite with React from frontend, basicsCSS or Bootstrap and Tailwind.</p>
                  <p className={T.login.BodyP}>Node.js for API create with express for rotes and sequelize ORM with MySql or Postgres in Databases.</p>
                  <p className={T.login.BodyP}><a href={curriculo} className='text-green-500'>Clique aqui</a> e veja meu currículo ou faça já o <a href={curriculo} download className='text-green-500'>Download</a>.</p>
                  <p className={T.login.BodyP}>Take a look in some projects in my <a
                    href="https://github.com/PedroHOM16"
                    className="text-green-500 ml-1 mr-2 underline"
                  >GitHub</a></p>
                  <p className={T.login.BodyP}>We can be connected in <a
                    href='https://www.linkedin.com/in/pedroadmoura'
                    className="text-green-500 underline"
                  >LinkedIn</a>!</p>
              </div>
            }
          </div>
          <div className={T.login.RealLogin}>
            {language === "Port"
            ? <h3 className={T.login.RealLoginTittle}>Digite seu nome e visite minha pagina web</h3>
            : <h3 className={T.login.RealLoginTittle}>Type your name and come to my web page</h3>
            }
            <input
              className={T.login.RealLoginInput}
              placeholder={language === "Port" ? "Digite seu nome" : "Type your firstName"}
              onChange={handleChange}
              value={clientName}
            />            
            <button
              type="button"
              onClick={handleClick}
              className={T.login.RealLoginButton}
            >
              Go!
            </button>
          </div>
        </div>
      )
  )
}
