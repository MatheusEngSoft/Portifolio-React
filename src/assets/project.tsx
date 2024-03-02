import Card from "./components/cads";
import lpdnc from "./img/Lpdnc.jpg"
import projetobase from "./img/projetobase600.png"
import weatherdnc from "./img/weatherdnc600.png"
import portifolio from "./img/portifolio600.png"


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
        img={projetobase}
        title={'Arquitetura'}
        description={'Desenvolvimento de um site de Arquitetura'}
        repo={"https://github.com/MatheusEngSoft/ProjetoBase"}
        site={'https://projeot-base.netlify.app/'}
        />
        <Card
        img={weatherdnc}
        title={'Weather'}
        description={'Desenvolvimento de um site para saber a sua cidade e temperatura em tempo real'}
        repo={"https://github.com/MatheusEngSoft/DNCWeather"}
        site={'https://dncweather2024.netlify.app/'}
        />
        <Card
        img={portifolio}
        title={'Portifolio'}
        description={'Desenvolvimento de um Portifolio em React'}
        repo={"https://github.com/MatheusEngSoft/Portifolio-React"}
        site={'https://dncweather2024.netlify.app/'}
        />
      </div>
    </div>
  )
}