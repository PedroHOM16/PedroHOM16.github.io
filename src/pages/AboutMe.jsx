import React from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Header from '../component/Header';
import images from '../images'
// import getMusics from '../support/musicsAPI';

export default function AboutMe() {
  // const dataApiMusics = async (param) => {await getMusics(param)};
  const { photos, hobbies, love, games, bands } = images;
  const language = localStorage.getItem('language');
  if (language === 'Port') {
    return (
      <div className='bg-gray-900'>
        <Header />
        <div className='flex flex-col ml-2'>
          <h1 className='text-zinc-200 lg:text-4xl sm:text-3xl text-2xl ml-4 mt-4 hover:text-lime-400'>Quem sou eu:</h1>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              Existem certas escolhas nossas que, em um primeiro momento,
              podemos achar uma grande tolice. Acontece que em 2010, sem saber pra onde ir,
              fui ingressar na faculdade de Administração na UFU (Universidade Federal de Uberlândia).
            </p>
            <Card imgArray={photos} string='Fotos pessoais:' />
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <Card imgArray={hobbies} string='Hobbies:' />
            <p className='text-zinc-200 w-80 mt-24 text-sm md:text-lg lg:ml-24'>
              O resultado? em 2013 abandonei o curso para ingressar em outra faculdade e seguir minha paixão: a Música!
              também na UFU. Essa não durou muito tempo, decidi que a música era somente um hobby e então voltei para a Aventura inicial,
              porém em outra instituição particular. 
              <br />
              <br/>
              Agora sim!    Formei em Administração de empresas em 2018 e trabalhei em diversos setores administrativos:
              Administração interna, Estoque, Vendas, Planejamento e Gestão, Financeiro e Bancos.
            </p>
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              Pensando bem, que ótima escolha a minha! Pude perceber como funciona uma organização
              de ponta a ponta, atuar com clientes diretamente e lidar com suas necessidades, desenvolver
              soluções com planilhas, cumprir metas e, a melhor parte, descobri o que realmente me motiva
              em um ambiente corporativo: Resolver problemas!
            </p>
            <Card imgArray={love} string='Paixões:' />
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <Card imgArray={games} string='Games:' />
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              Foi em agosto de 2020 que fiz mais uma escolha. Mas agora sei exatamente onde estou indo!
              Decidi largar o melhor emprego da minha carreira até então (financeiramente falando...) e começar a
              minha jornada para ser um Profissional da tecnologia. A cada nova ferramenta estudada, me sentia com
              mais poderes e hoje procuro usá-los sob supervisão de uma empresa que tenha comprometimento com inovação
              e tecnologia.
            </p>
          </div>
  
          <div className='flex flex-col lg:flex-row justify-between mr-10'>
            <div className='flex flex-col mr-10'>
              <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
                Quero encerrar esse texto com uma letra de uma música de LouisArmstrong que muito me inspira:
              </p>
              <p className='text-sky-200 w-96 mt-4 sm:ml-10'>
                I see trees of green, red roses, too,
                {<br/>}
                I see them bloom, for me and you
                {<br/>}
                And I think to myself
                {<br/>}
                What a wonderful world.
              </p>
              <p className='text-lime-200 w-96 mt-4 sm:ml-24'>
                I see skies of blue, and clouds of white,
                {<br/>}
                The bright blessed day, the dark sacred night
                {<br/>}
                And I think to myself
                {<br/>}
                What a wonderful world.
              </p>
              <p className='text-amber-200 w-96 mt-4 sm:ml-36'>
                The colors of the rainbow, so pretty in the sky,
                {<br/>}
                Are also on the faces of people going by.
                {<br/>}
                I see friends shaking hands, sayin', "How do you do?"
                {<br/>}
                They're really sayin', "I love you."
              </p>
              <p className='text-pink-200 w-96 mt-4 sm:ml-48 mb-8'>
                I hear babies cryin'. I watch them grow.
                {<br/>}
                They'll learn much more than I'll ever know
                {<br/>}
                And I think to myself
                {<br/>}
                What a wonderful world
              </p>
            </div>
            <div>
              <Card imgArray={bands} string='Músicas:' />
              {/* <audio className='' src={ dataApiMusics('what-a-wonderful-world').preview } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                <code>audio</code>
                .
              </audio> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>)
  }
  
  if (language === 'Eng') {
    return (
      <div className='bg-gray-900'>
        <Header />
        <div className='flex flex-col ml-2'>
          <h1 className='text-zinc-200 lg:text-4xl sm:text-3xl text-2xl ml-4 mt-4 hover:text-lime-400'>Who am I:</h1>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              There are certain self choices of ours that, at first,
              we may find it a great folly. It turns out that in 2010, not nkowing where to go,
              i joined tha Faculty of Business Administration at UFU (Federal University of Uberlândia-MG Brazil).
            </p>
            <Card imgArray={photos} string='Personal photos:' />
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <Card imgArray={hobbies} string='Hobbies:' />
            <p className='text-zinc-200 w-80 mt-24 text-sm md:text-lg lg:ml-24'>
              The result? in 2013 I abandoned the course to join another college and follow my passion: Music!
              also at UFU. This one didn't last long, I decided that music was just a hobby and so I went back to the initial Adventure,
              but in another private institution.
              <br/>
              <br/>
              Now yes!       I graduated in Business Administration in 2018 and worked in several administrative sectors:
              Internal administration, Inventory, Sales, Planning and Management, Finance and Banking.
            </p>
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              On second thought, what a great choice I made! I could understand how an organization works
              end-to-end, work with customers directly and deal with their needs, develop
              solutions with spreadsheets, meeting goals and, the best part, I discovered what really motivates me
              in a corporate environment: Solve problems!
            </p>
            <Card imgArray={love} string='Love:' />
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <Card imgArray={games} string='Games:' />
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              It was in August 2020 that I made another choice. But now I know exactly where I'm going!
              I decided to quit the best job of my career so far (financially speaking...) and start
              my journey to be a technology professional. With each new tool studied, I felt with
              more powers and today I try to use them under the supervision of a company that is committed to innovation
              and technology.
            </p>
          </div>
  
          <div className='flex flex-col lg:flex-row justify-between mr-10'>
            <div className='flex flex-col mr-10'>
              <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
                I want to end this text with a lyric from a song by LouisArmstrong that inspires me a lot:
                </p>
              <p className='text-sky-200 w-96 mt-4 sm:ml-10'>
                I see trees of green, red roses, too,
                {<br/>}
                I see them bloom, for me and you
                {<br/>}
                And I think to myself
                {<br/>}
                What a wonderful world.
              </p>
              <p className='text-lime-200 w-96 mt-4 sm:ml-24'>
                I see skies of blue, and clouds of white,
                {<br/>}
                The bright blessed day, the dark sacred night
                {<br/>}
                And I think to myself
                {<br/>}
                What a wonderful world.
              </p>
              <p className='text-amber-200 w-96 mt-4 sm:ml-36'>
                The colors of the rainbow, so pretty in the sky,
                {<br/>}
                Are also on the faces of people going by.
                {<br/>}
                I see friends shaking hands, sayin', "How do you do?"
                {<br/>}
                They're really sayin', "I love you."
              </p>
              <p className='text-pink-200 w-96 mt-4 sm:ml-48 mb-8'>
                I hear babies cryin'. I watch them grow.
                {<br/>}
                They'll learn much more than I'll ever know
                {<br/>}
                And I think to myself
                {<br/>}
                What a wonderful world
              </p>
            </div>
            <Card imgArray={bands} string='Songs:' />
          </div>
        </div>
        <Footer />
      </div>)
  }
}