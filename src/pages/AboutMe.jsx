import React from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Header from '../component/Header';
// import perfil1 from '../images/personal/perfil-1.jpeg'
import perfil2 from '../images/personal/perfil-2.jpeg';
// import perfil3 from '../images/personal/perfil-3.jpeg'
import perfil4 from '../images/personal/perfil-4.jpeg';
import perfil5 from '../images/personal/perfil-5.jpeg';
import beatles from '../images/bands/beatles-1.jpg';
import floyd1 from '../images/bands/pink-floyd-1.jpg';
import floyd2 from '../images/bands/pink-floyd-2.jpg';
import amigur from '../images/hobbies/amigurumi-1.jpg';
import jardAnim from '../images/hobbies/jardim-animais.jpg';
import bikeGuitar from '../images/hobbies/bike-guitarra.jpg';
import lisa from '../images/love/lisa.jpg';
import amora from '../images/love/amora.jpg';
import zelda1 from '../images/games/zelda-1.jpeg'
import zelda2 from '../images/games/zelda-2.jpeg'
import zelda3 from '../images/games/zelda-3.jpeg'
import stardew1 from '../images/games/stardew-1.jpeg'
import stardew2 from '../images/games/stardew-2.jpeg'
import stardew3 from '../images/games/stardew-3.jpeg'
import unite1 from '../images/games/unite-1.jpeg'
import arceus1 from '../images/games/arceus-1.jpeg'
import arceus2 from '../images/games/arceus-2.jpeg'


const photos = [perfil2, perfil4, perfil5,];
const bands = [beatles, floyd1, floyd2];
const hobbies = [amigur, jardAnim, bikeGuitar];
const love = [lisa, amora];
const games = [zelda1, zelda2, zelda3, stardew1, stardew2, stardew3, unite1, arceus1, arceus2];

export default function AboutMe() {
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
              porém em outra instituição particular. Agora sim! Formei em Administração de empresas em 2018 e trabalhei em diversos setores administrativos:
              Administração interna, Estoque, Vendas, Planejamento e Gestão, Financeiro e Bancos.
            </p>
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              Agora, pensando bem, que ótima escolha a minha! Pude perceber como funciona uma organização
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
            <Card imgArray={bands} string='Músicas:' />
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
              but in another private institution. Now yes! I graduated in Business Administration in 2018 and worked in several administrative sectors:
              Internal administration, Inventory, Sales, Planning and Management, Finance and Banking.
            </p>
          </div>
  
          <div className='flex flex-col sm:flex-row justify-between mr-10'>
            <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
              Now, on second thought, what a great choice I made! I could understand how an organization works
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