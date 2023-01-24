import React from 'react';
import { useState } from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Header from '../component/Header';
import images from '../images'
import T from '../style/tailwind'
import setaDir from '../images/icons/seta-direita1.png'
// import getMusics from '../support/musicsAPI';

// <Card imgArray={photos} string='Fotos pessoais:' />

export default function AboutMe() {
  // const dataApiMusics = async (param) => {await getMusics(param)};
  const { photos } = images;
  const language = localStorage.getItem('language');
  const [admBool, setAdmBool]= useState(false)
  const [admCount, setAdmCount]= useState(0)
  const [musicBool, setMusicBool]= useState(false)
  const [musicCount, setMusicCount]= useState(0)
  const [devBool, setDevBool]= useState(false)
  const [phtBool, setPhtBool]= useState(false)
  const [devCount, setDevCount]= useState(0)

  const administration = [
      "- Entrei na faculdade de Administração em 2010, logo após o ensino médio, na UFU (Universidade Federal de Uberlândia).",
      "- Meu primeiro estágio em 2012 na radio universitária da UFU.",
      "- No início de 2013 Abri um estudio musical: O Laboratório!.",
      "- No meio do ano fiz minha primeira transição de carreira: Abandonei o curso de Administração de empresas para entrar na Música, na mesma universidade.",
      "- Enquanto isso, conclui um curso de Banco de dados: Access.",
      "- Voltei para concluir o curso, desta vez em uma particular: UNA.",
      "- Durante este percurso trabalhei como estoquista de uma loja de roupas aqui em Uberlândia: OPPEN, no escritório administrativos, por intensos 3 meses.",
      "- Logo após fui trabalhar no escritório de uma empresa corretora de seguros: Real Corretora de Seguros.",
      "- Até conseguir um estágio no INSS.",
      "- Em todas estas experiências, sempre obtive olhares sistemáticos para processos internos, pensando em melhoria de vida para as pessoas colegas de trabalho.",
      "- No INSS, pude trabalhar, estudar música e concluir minha faculdade de Administração em 2018.",
      "- Em 2019 participei de um processo seletivo no Banco Bradesco s/a, entrei em abril.",
      "- Atendi os 3 primeiros meses na linha de frente, no 'Posso ajudar?', até me transferirem para cidade de Campina Verde - MG.",
      "- Aqui não se tinha uma posição ao certo, devido a pequena quantidade de funcionários para tanta demanda.",
      "- 'Posso Ajudar', Abertura de Caixa, Manutenção de Caixas Eletrônicos, Atendimento de contas pessoa física, Venda de produtos (metas), Processos judiciais, Arquivos do Banco e uso do sistema bradesco para todos os serviços.",
      "- Foi um ótimo desafio, onde a cada dia, uma novidade.",
      "- Em 2020, com o início da pandemia, fui trabalhar remotamente, em uma extratégia não muito bem elaborada.",
      "- Não fiquei satisfeito com minhas novas atribuições e senti que devia investir em conhecimento.",
      "- Pedi acerto no Banco, e comecei a estudar para o ENEM (isso mesmo kkk).",
      "- Nesse período (2021) trabalhei na ASSINO crédito imobiliário, remotamente.",
      "- Conheci a Trybe.",
      "- Obtive todo o alinhamento entre meus conhecimentos anteriores, programação, e mercado de trabalho, hard skills e soft skills.",
      "- Grandes desafios ao longo de 2022, com projetos em grupo, com metodologias ágeis utilizadas no mercado.",
      "- Posso dizer que minha graduação está mais poderosa.",
    ];

  const music = [
    "- Começou nos meus 6 anos, por influência da família, uma criança soprando flauta-doce.",
    "- Já aos 8 comecei o violão.",
    "- Aos 12 já tocava e cantava.",
    "- Aos 15 abandonei o violão e fui para guitarra.",
    "- Aos 17 tive minha primeira banda: The Nine, cover dos Beatles.",
    "- Fazia shows em uma quinta-feira por mês no Mercado Municipal de Uberlândia, algumas boates e festas também.",
    "- Aos 22 entrei para o Bacharelado de Violão na UFU (Universidade Federal de Uberlândia).",
    "- Conclui quase todas as matérias teóricas, porém o Violão deixou a desejar. Estudar Violão erudito é uma tarefa complicada para mim.",
    "- Gosto de tocar minhas músicas, na resenha ou no quarto.",
    "- Mas pretendo ainda poder concluir esta graduação, quem sabe.",
  ];

  const developer = [
    "- Desde novo tive interesse em games, e na época (2004) não tinha tão fácil acesso.",
    "- Começa meu primeiro contato com PC, em que tive que me virar para configurar setups de games.",
    "- Quando entrei na faculdade de Administração, voltei meus estudos para ferramentas Office: Excel, PowerPoint e Access.",
    "- Tive contato com vários sistemas Administrativos, me despertava interesse na construção e na resposta destes sistemas.",
    "- Fiz um sistema no Access para uma locadora de vídeos, a fins didáticos.",
    "- Planilhas de Excel em todas as experiências profissionais que tive, testadas e comprovadas (exceto Banco Bradesco).",
    "- Após minha passagem no Banco Bradesco, fui em busca de conhecimento e essa busca foi afunilando...",
    "- Até conhecer a Trybe, um curso remoto, porém com mais de 1500 horas síncronas.",
    "- Mais de 30 projetos, dentre eles grandes desafios de ponta a ponta, individual e em grupo.",
    "- Pude conhecer metodologias ágeis aplicadas no mercado da tecnologia.",
    "- Arquiteturas, controle de rotas, tipagem de dados, além daquele frontzinho no estilo.",
    "- Hoje o que mais gosto de fazer é solucionar problemas para amigos que possuem algum negócio, mesmo que individual.",
    "- Busco experiência! E quero trabalhar em grandes projetos! Quero exercitar minha capacidade de desenvolver, code reviews, refatoração e matar erros.",
  ];
  

  

  const onClickAdm = () => admBool ? setAdmBool(false) : setAdmBool(true);
  const onClickMusic = () => musicBool ? setMusicBool(false) : setMusicBool(true);
  const onClickDev = () => devBool ? setDevBool(false) : setDevBool(true);
  const onClickPht = () => phtBool ? setPhtBool(false) : setPhtBool(true);

  const nextPhraseAdm = () => administration.length - 1 === admCount ? setAdmCount(0) : setAdmCount(admCount + 1);
  const nextPhraseMusic = () => music.length - 1 === musicCount ? setMusicCount(0) : setMusicCount(musicCount + 1);
  const nextPhraseDev = () => developer.length - 1 === devCount ? setDevCount(0) : setDevCount(devCount + 1);
  
  if (language === 'Port') {
    return (
      <div className={T.aboutMe.App}>
        <Header />
        <div className={T.aboutMe.Body}>
          <h1 className={T.aboutMe.Tittle}>Pedro Henrique Oliveira de Moura</h1>
          <div className={T.aboutMe.Experiences}>

            <div className={T.aboutMe.Adm}>
              <button
                type='button'
                onClick={onClickAdm}
              >Administração</button>
              {
                admBool
                && <div className={ T.aboutMe.PhraseAdm}>
                  <button
                    onClick={nextPhraseAdm}
                    value={setaDir}
                  >{administration[admCount]}</button>
                </div>
              }
            </div>
            <div className={T.aboutMe.Music}>
              <button
                type='button'
                onClick={onClickMusic}
              >Musica</button>
              {
                musicBool
                && <div className={ T.aboutMe.PhraseMusic}>
                  <button
                    onClick={nextPhraseMusic}
                  >{music[musicCount]}</button>
                </div>
              }
            </div>
            <div className={T.aboutMe.Developer}>
              <button
                type='button'
                onClick={onClickDev}
              >Desenvolvedor</button>
              {
                devBool
                && <div className={ T.aboutMe.PhraseDev}>
                  <button
                    onClick={nextPhraseDev}
                  >{developer[devCount]}</button>
                </div>
              }
            </div>
            <div className={T.aboutMe.Photos}>
              <button
                type='button'
                onClick={onClickPht}
              >Fotos</button>
              {
                phtBool
                && <Card imgArray={photos} string='Fotos pessoais:' /> 
              }
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  if (language === 'Eng') {
    return (
      <div className={T.aboutMe.App}>
        <Header />
      </div>
    )
  }
}