import Button from "./button"

type CardProps = {
  title: string,
  description: string,
  site: string,
  repo: string,
  img:string
}

export default function Card(props: CardProps){

  return(
    <div className="flex justify-center mr-44 w-[550px] h-[700px] mt-44">
        <section className="flex flex-col items-center shadow-lg shadow-white" style={{ borderRadius: '40px 0px 40px 0px'}}>
          <a href={props.site}><img src={props.img} alt="Error" className="w-[500px] h-[266px] rounded-lg mt-4"/></a>
          <h1 className=" text-[36px] font-semibold mt-2">{props.title}</h1>
          <p className=" text-[28px] font-semibold ml-8 mt-12">{props.description}</p>
          <Button link={props.repo} text="Clique Aqui" className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] w-[200px] h-[70px] text-[20px] font-semibold rounded-full mt-10 mr-72"/>
        </section>
    </div>
  )
}