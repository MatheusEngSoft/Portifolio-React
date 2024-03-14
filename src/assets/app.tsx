import React, { useState,} from 'react';
import Apresentation from './apresentation';
import AboutMe from './aboutme';
import Info from './info';
import Project from './project';
import Header from './header';
import backgroundImage from './img/bacground.jpg'; // Importando a imagem diretamente

export default function App() {
  const [style, setStyle] = useState('background');

  const toggleBackground = () => {
    setStyle(prevStyle =>
      prevStyle === 'background' ? 'class' : 'background'
    );
  };

  return (
    <div className={`flex flex-col  ${style === 'background' ? '' : 'bg-slate-900 text-zinc-50'}`}>
      <main className='flex flex-1 flex-col' style={style === 'background' ? { backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'fixed', backgroundSize: 'cover' } : {}}>
        <section>
          <Header /> 
          <button onClick={toggleBackground} className='bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] ml-32 mt-16 w-15 h-10 rounded-full text-2xl font-semibold"'>L/D</button> 
        </section>
        <section className='my-5'>
          <Apresentation />
        </section>
        <section id='project' className='my-5'>
          <Project />
        </section>
        <section id='aboutme' className='my-5 mt-20'>
          <AboutMe />
        </section>
        <footer>
          <Info />
        </footer>
      </main>
    </div>
  );
}
