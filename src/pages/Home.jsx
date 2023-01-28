import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PortContext from '../context/PortContext';
import '../index.css'
import Card from '../component/Card';
import images from '../images'
import T from '../style/tailwind'
import curriculo from './../images/resume/pedroHenriqueOliveiraDeMoura-jan23.pdf'
import gitIcon from './../images/icons/github-mark-white.svg'
import Header from '../component/Header';
import Footer from '../component/Footer';
import personal from '../images/personal/perfil-6.jpeg'


export default function Login() {
  const { language, setLanguage, clientName, setClientName } = useContext(PortContext);
  const [loginBool, setLoginBool] = useState(false);


  return (
    <div className={T.home.App}>
      <Header />
      <br />
      <div className={T.home.BodyAll} >
        {language === "Port"
          ? <div className=''>
            <br />
            <div className={T.home.IntroduceContainer}>
              <img
                src={personal}
                alt='foto pessoal'
                className='sm:w-60 sm:h-72 sm:m-0 mt-6 w-24 h-32 rounded-lg'
              />
              <div className={T.home.IntroduceText}>
                <p className={T.home.BodyP}><a href={curriculo} className='text-green-500'>Clique aqui</a> e veja meu currículo ou faça já o <a href={curriculo} download className='text-green-500'>Download</a>.</p>
                <p className={T.home.BodyP}>Confira alguns projetos no meu <a
                  href="https://github.com/PedroHOM16"
                  className="text-green-500 ml-1 mr-2 underline"
                >GitHub</a></p>
                <p className={T.home.BodyP}>Também podemos nos conectar pelo <a
                  href='https://www.linkedin.com/in/pedroadmoura'
                  className="text-green-500 underline"
                >LinkedIn</a>!</p>
              </div>
            </div>
            <br />
            <h2 className={T.home.BodyH2}>Sou Desenvolvedor Web, formado em Administração de empresas e gosto de novos desafios!</h2>
            <p className={T.home.BodyP1}>Modelagem de dados, Tabelas e diagramas, Criação de APIs e suas rotas, acessos pelo front com uma boa interface...
              Essas são minhas atividades mais recorrentes.</p>
            <br />
            <p className={T.home.BodyP}>Uso JavaScript como linguagem padrão</p>
            <p className={T.home.BodyP}>E TypeScript para tipagem</p>
            <p className={T.home.BodyP}>Vite com React para o frontend, com CSS básico ou Bootstrap e Tailwind</p>
            <p className={T.home.BodyP}>Node.js para criar a API com express para as rotas e sequelize como ORM com MySql ou Postgres</p>
          </div>
          : <div className=''>
            <br />
            <div className={T.home.IntroduceContainer}>
              <img
                src={personal}
                alt='foto pessoal'
                className='sm:w-60 sm:h-72 sm:m-0 mt-6 w-24 h-32 rounded-lg'
              />
              <div className={T.home.IntroduceText}>
                <p className={T.home.BodyP}><a href={curriculo} className='text-green-500'>Click here</a> to see my resume or make a <a href={curriculo} download className='text-green-500'>Download</a>.</p>
                <div className={T.home.BodyP}>Take a look in some projects in my <a
                  href="https://github.com/PedroHOM16"
                  className="text-green-500 ml-1 mr-2 underline"
                >GitHub</a></div>
                <p className={T.home.BodyP}>We can be connected in <a
                  href='https://www.linkedin.com/in/pedroadmoura'
                  className="text-green-500 underline"
                >LinkedIn</a>!</p>
              </div>
            </div>
            <h2 className={T.home.BodyH2}>I'm a Web Developer, graduated in Business Administration and I like new challenges!</h2>
            <br />
            <p className={T.home.BodyP1}>Data modeling, Tables and diagrams, API creation and its routes, front-end access with a good interface...These are my most common activities.</p>
            <br />
            <p className={T.home.BodyP}>I use JavaScript as standard language. TypeScript too !</p>
            <p className={T.home.BodyP}>Vite with React from frontend, basicsCSS or Bootstrap and Tailwind.</p>
            <p className={T.home.BodyP}>Node.js for API create with express for rotes and sequelize ORM with MySql or Postgres in Databases.</p>
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}
