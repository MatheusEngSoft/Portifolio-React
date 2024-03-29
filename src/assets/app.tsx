import Apresentation from './apresentation'
import AboutMe from './aboutme'
import Info from './info'
import Project from './project'
import Header from './header'

export default function App() {
  return (
    <div className=' flex flex-col h-screen'>
      <header>
        <Header/>
      </header>

      <main className=' flex flex-1 flex-col'>
        <section className=' my-5'>
          <Apresentation />
        </section>

        <section id='project' className=' my-5'>
          <Project />
        </section>

        <section id='aboutme' className=' my-5 mt-20'>
          <AboutMe />
        </section>
      </main>

      <footer id='info' className=''>
        <Info />
      </footer>
    </div>
  );
}