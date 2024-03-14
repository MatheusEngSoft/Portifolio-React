import { useState,} from 'react';
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
        <section className="flex flex-col items-center justify-center">
          <Header /> 
          <button onClick={toggleBackground} className="absolute w-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold">{style === "background" ? "IMG": "N/IMG"}</button> 
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
