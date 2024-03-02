import Card from "./components/cads";
import lpdnc from "./img/Lpdnc.jpg"


export default function Project(){
  return(
    <div className="flex flex-wrap ml-40 mt-28">
      <div>
        <h1 className="text-[64px] font-semibold">Projetos</h1>
      </div>
      <div className="flex flex-wrap ml-40">
        <Card
        img={lpdnc}
        title={'LP - DNC'}
        description={'Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'}
        repo={"https://github.com/MatheusEngSoft/projeto-landing-page"}
        site={'https://minha-primeira-landing-page.netlify.app/'}
        />
        <Card
        img={lpdnc}
        title={'LP - DNC'}
        description={'Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'}
        repo={"https://github.com/MatheusEngSoft/projeto-landing-page"}
        site={'https://minha-primeira-landing-page.netlify.app/'}
        />
        <Card
        img={lpdnc}
        title={'LP - DNC'}
        description={'Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'}
        repo={"https://github.com/MatheusEngSoft/projeto-landing-page"}
        site={'https://minha-primeira-landing-page.netlify.app/'}
        />
        <Card
        img={lpdnc}
        title={'LP - DNC'}
        description={'Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'}
        repo={"https://github.com/MatheusEngSoft/projeto-landing-page"}
        site={'https://minha-primeira-landing-page.netlify.app/'}
        />
      </div>
    </div>
  )
}