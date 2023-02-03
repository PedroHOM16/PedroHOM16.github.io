import React, { useContext } from 'react';
import { useState } from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Header from '../component/Header';
import images from '../images'
import T from '../style/tailwind'
import PortContext from '../context/PortContext';


export default function AboutMe() {
  const { photos } = images;
  const { language } = useContext(PortContext);
  const [admBool, setAdmBool] = useState(false)
  const [admCount, setAdmCount] = useState(0)
  const [musicBool, setMusicBool] = useState(false)
  const [musicCount, setMusicCount] = useState(0)
  const [devBool, setDevBool] = useState(false)
  const [phtBool, setPhtBool] = useState(false)
  const [devCount, setDevCount] = useState(0)

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

  const administrationEng =
    [
      "- I started college in 2010 in Administration at UFU (Federal University of Uberlandia) after high school.",
      "- My first internship in 2012 at the University Radio of UFU.",
      "- At the beginning of 2013 I opened a musical studio: O Laboratório! (The Laboratory)",
      "- In the middle of the year I made my first career transition: I abandoned the Business Administration course to enter Music at the same university.",
      "- Meanwhile, I completed a Database course: Access.",
      "- I returned to finish the course, this time at a private university: UNA.",
      "- During this journey I worked as a storekeeper of a clothing store here in Uberlandia: OPPEN, in the administrative office, for intense 3 months.",
      "- Immediately after I went to work in the office of an insurance broker: Real Insurance Broker.",
      "- Until I got an internship at INSS.",
      "- In all these experiences, I always had systematic looks at internal processes, thinking of improving life for my colleagues.",
      "- At INSS, I was able to work, study music and finish my Administration degree in 2018.",
      "- In 2019 I participated in a selection process at Banco Bradesco s/a, entered in April.",
      "- I attended the first 3 months in the front line, until I was transferred to the city of Campina Verde - MG.",
      "- Here there was not a certain position, due to the small number of employees for so much demand.",
      "- 'Can I help?', Opening of Box, Maintenance of ATMs, Attention of personal accounts, Sale of products (goals), Judicial processes, Bank files and use of the bradesco system for all services.",
      "- It was a great challenge, where every day, something new.",
      "- In 2020, with the start of the pandemic, I started working remotely, in a non-elaborate strategy.",
      "- I was not satisfied with my new assignments and felt I should invest in knowledge.",
      "- I asked for a settlement in the Bank, and I started studying for college again (that's right kkk).",
      "- During this period (2021) I worked remotely at ASSINO real estate credit.",
      "- I met Trybe.",
      "- I got all the alignment between my previous knowledge, programming, and job market, hard skills and soft skills.",
      "- Great challenges throughout 2022, with group projects, with agile methodologies used in the market.",
      "- I can say that my degree is more powerful."
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

  const musicEng = [
    "- It started at my 6 years old, by family influence, a child playing recorder.",
    "- At 8 I started playing guitar.",
    "- At 12 I was already playing and singing.",
    "- At 15 I quit the guitar and moved on to the guitar.",
    "- At 17 I had my first band: The Nine, a Beatles cover band.",
    "- I did shows on a Thursday night at the Uberlândia Municipal Market, some clubs and parties too.",
    "- At 22 I joined the Bachelor's Degree in Guitar at UFU (Federal University of Uberlândia).",
    "- I almost finished all the theoretical subjects, but the Guitar left something to be desired. Studying Classical Guitar is a complicated task for me.",
    "- I like to play my songs, at the review or in the room.",
    "- But I still intend to be able to complete this degree, who knows.",
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

  const developerEng = [
    "- Ever since I was new, I had an interest in video games, and back then (2004) it wasn't so easy to access them.",
    "- That's when I started my first contact with PCs, in which I had to figure out how to set up game setups.",
    "- When I entered college for Business Administration, I refocused my studies on Office tools: Excel, PowerPoint, and Access.",
    "- I had contact with various Administrative systems, which aroused my interest in building and responding to them.",
    "- I made a system in Access for a video rental store, for educational purposes.",
    "- Excel spreadsheets in all the professional experiences I had, tested and proven (except for Banco Bradesco).",
    "- After my time at Banco Bradesco, I went in search of knowledge and that search was narrowing down... ",
    "- Until I met Trybe, a remote course, but with more than 1500 synchronous hours.",
    "- More than 30 projects, among them great end-to-end challenges, individual and in groups.",
    "- I was able to learn agile methodologies applied in the technology market.",
    "- Architectures, route control, data typing, plus that front in style.",
    "- Today what continue most enjoying doing is solving problems for friends who have some business, even if it's individual.",
    "- I'm looking for experience! And I want to work on big projects! I want to exercise my ability to develop, code reviews, refactoring and killing bugs.",
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
        <Header language={language}/>
        <div className={T.aboutMe.Body}>
          <h1 className={T.aboutMe.Tittle}>{language === 'Port' ? "Clique para interagir com os textos" : "Click to interact with the texts"}</h1>
          <div className={T.aboutMe.Experiences}>

            <div className={T.aboutMe.Adm}>
              <button
                type='button'
                onClick={onClickAdm}
              >Administração</button>
              {
                admBool
                && <div className={T.aboutMe.PhraseAdm}>
                  <button
                    onClick={nextPhraseAdm}
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
                && <div className={T.aboutMe.PhraseMusic}>
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
                && <div className={T.aboutMe.PhraseDev}>
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
        <Footer language={language} />
      </div>
    )
  }

  if (language === 'Eng') {
    return (
      <div className={T.aboutMe.App}>
        <Header />
        <div className={T.aboutMe.Body}>
          <h1 className={T.aboutMe.Tittle}>Click to interact with the texts</h1>
          <div className={T.aboutMe.Experiences}>

            <div className={T.aboutMe.Adm}>
              <button
                type='button'
                onClick={onClickAdm}
              >Administration</button>
              {
                admBool
                && <div className={T.aboutMe.PhraseAdm}>
                  <button
                    onClick={nextPhraseAdm}
                  >{administrationEng[admCount]}</button>
                </div>
              }
            </div>
            <div className={T.aboutMe.Music}>
              <button
                type='button'
                onClick={onClickMusic}
              >Music</button>
              {
                musicBool
                && <div className={T.aboutMe.PhraseMusic}>
                  <button
                    onClick={nextPhraseMusic}
                  >{musicEng[musicCount]}</button>
                </div>
              }
            </div>
            <div className={T.aboutMe.Developer}>
              <button
                type='button'
                onClick={onClickDev}
              >Development</button>
              {
                devBool
                && <div className={T.aboutMe.PhraseDev}>
                  <button
                    onClick={nextPhraseDev}
                  >{developerEng[devCount]}</button>
                </div>
              }
            </div>
            <div className={T.aboutMe.Photos}>
              <button
                type='button'
                onClick={onClickPht}
              >Pictures</button>
              {
                phtBool
                && <Card imgArray={photos} string='Personal and hobbies:' />
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}