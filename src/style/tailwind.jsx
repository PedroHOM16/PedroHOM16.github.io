const tailwind = {
  home: {
    App: "bg-gray-900 w-full text-center",
    Tittle: "text-zinc-200 lg:text-4xl sm:text-3xl mt-4 mb-4 ml-4 text-xl",
    StackCard: "mb-4",
    // HavFun: "flex flex-row flex-wrap justify-around",
    Paintbox: "h-screen h-1/2 bg-fixed bg-cover bg-no-repeat bg-[url('images/bg/madeira-3.jpg')]",
    // PokeGame: "W-5/4  bg-cover bg-[url('images/bg/pokemon-3.jpg')]",
  },
  login: {
    App: "bg-slate-900 text-zinc-300 text-mono",
    Name: "text-xl sm:text-2xl md:text-5xl  m-2 text-center",
    BodyAll: "flex flex-col bg-slate-800 m-4 text-md sm:text-lg",
    BodyH1: "text-purple-800 m-2 sm:text-xl text-center",
    BodyH2: "sm:mx-32 text-center",
    BodyP1: "sm:mx-44 text-center",
    BodyP: "p-2 ml-4",
    RealLogin: "flex flex-raw ml-20",
    RealLoginTittle: "text-md mr-6",
    RealLoginInput: "w-40  mb-10 bg-slate-300 text-slate-500 rounded-md border-2 border-slate-600 hover:border-sky-300 hover:bg-sky-100",
    RealLoginSelect: "w-36 text-center bg-slate-300 text-slate-500 m-2 rounded-md border-2 border-slate-600 hover:border-sky-300 hover:bg-sky-100",
    RealLoginOptionsPor: "text-sky-800",
    RealLoginOptionsEng: "text-red-800",
    RealLoginButton: "mb-10 ml-4 text-green-500 underline hover:text-lime-600 text-lg",
  },
  header: {
    App: "bg-slate-800 flex flex-col font-mono",
    // Tittle: "text-center text-zinc-200 sm:text-5xl lg:text-7xl text-2xl hover:italic",
    Subtittle: "text-center mt-4 text-md sm:text-lg md:text-3xl hover:text-sky-200 text-lime-200",
    NavBar: "border-dotted border border-x-0 border-b-0 border-zinc-400 container flex flex-wrap justify-around items-center mx-auto",
    NavItem: "text-zinc-50 hover:italic sm:text-xl md:text-2xl  text-sm hover:text-lime-300",
  },
  carousel: {
    App: "flex mx-auto",
    LeftBtn: "text-4xl text-sky-800 hover:text-lime-500",
    Img: "border-2 w-60 border-sky-900 rounded-md",
    RigthBtn: "text-4xl text-sky-800 hover:text-lime-500",
  },
  card: {
    App: "flex flex-col",
    Tittle: "text-sm text-gray-600",
  },
  pokemon: {
    App: "W-5/4  bg-cover bg-[url('images/bg/pokemon-3.jpg')]",
    Game: "w-full",
    GameTittle: "font-mono text-red-600 hover:text-red-400 text-lg pt-2",
    JumpWrn: "text-gray-700 hover:text-red-400",
    Label: "flex mx-1/2",
    InputPk: "border-2 text-center border-orange-500 text-gray-900 text-sm rounded-lg",
    BtnPk: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl rounded-lg text-sm p-2 text-center",
    Score: "font-mono text-red-600",
    Loading: "text-red-800 mb-24",
    CapturedPok: "flex flex-wrap w-screen  ",
    Pokebolas: "border-red-600 border rounded-full m-4 p-4"
  },
  aboutMe: {
    App: "bg-sky-800 w-full h-full h-screen",
    Body: "",
    Tittle: "text-xl  text-center text-zinc-300",
    Experience: "",
    Adm: "w-full h-full p-2 font-mono bg-center bg-cover text-orange-500 text-center sm:text-7xl text-4xl md:text-8xl bg-fixed bg-[url('images/bg/mesa-1.jpg')]",
    PhraseAdm: "text-center text-orange-600 mx-24 my-24 text-sm  sm:text-2xl md:text-3xl",
    Music: "w-full h-full p-2 font-mono bg-center bg-cover text-sky-700 sm:text-7xl text-4xl md:text-8xl bg-fixed bg-[url('images/bg/musica-1.jpg')]",
    PhraseMusic: "text-center text-amber-100 mx-24 my-24 text-sm  sm:text-2xl md:text-3xl",
    Developer: "w-full h-full p-2 font-mono text-center sm:text-7xl text-4xl md:text-8xl text-lime-900 bg-fixed bg-[url('images/bg/wallpaper-1.jpg')]",
    PhraseDev: "text-center text-lime-600 mx-24 my-24 text-sm  sm:text-lg md:text-xl",
    Photos: "w-full h-full p-2 font-mono bg-center bg-cover text-sky-600 sm:text-7xl text-4xl md:text-8xl bg-fixed bg-[url('images/bg/marmore-1.jpg')]",
  }
}

export default tailwind;