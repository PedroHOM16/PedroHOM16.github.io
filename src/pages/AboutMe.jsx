import React from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Header from '../component/Header';
// import perfil1 from '../images/personal/perfil-1.jpeg'
import perfil2 from '../images/personal/perfil-2.jpeg'
// import perfil3 from '../images/personal/perfil-3.jpeg'
import perfil4 from '../images/personal/perfil-4.jpeg'
import perfil5 from '../images/personal/perfil-5.jpeg'

const photos = [perfil2, perfil4, perfil5,]


export default function AboutMe() {
  return (
    <div className='bg-gray-900'>
      <Header />
      <div className='flex flex-col ml-2'>
        <h1 className='text-zinc-200 lg:text-4xl sm:text-3xl text-xl ml-4 mt-4'>Quem sou eu:</h1>

        <div className='flex flex-col sm:flex-row justify-between mr-10'>
          <p className='text-zinc-200 w-80 mt-24 ml-10 text-sm md:text-lg lg:ml-24'>
            Existem certas escolhas nossas que, em um primeiro momento,
            podemos achar uma grande tolice. Acontece que em 2010, sem saber pra onde ir,
            fui ingressar na faculdade de Administração na UFU (Universidade Federal de Uberlândia).
          </p>
          <Card imgArray={photos} string='Fotos pessoais:' />
        </div>

        <div className='flex flex-col sm:flex-row justify-between mr-10'>
          <Card imgArray={photos} string='Fotos pessoais:' />
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
          <Card imgArray={photos} string='Fotos pessoais:' />
        </div>

        <div className='flex flex-col sm:flex-row justify-between mr-10'>
          <Card imgArray={photos} string='Fotos pessoais:' />
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
          <Card imgArray={photos} string='Fotos pessoais:' />
        </div>
      </div>
      <Footer />
    </div>)
}