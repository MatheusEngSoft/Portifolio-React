import { useEffect, useState } from "react"
import Button from "./components/button"


export default function Apresentation(){

  const [text, setText] = useState('')
  const toRotate = ['Eu me Chamo Matheus Santos!....', 'Sou Desenvolvedor Full-Stack....', 'Minhas linguagens de dominio são....', 'React, HTML, CSS, JavaScript, Python....']
  const [loop, setLoop] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [delta, setDelta] = useState(100)
  const period = 100

  useEffect(() => {
    let ticker = setInterval(()=>{
      toType()
    }, delta)
    return()=>{clearInterval(ticker)}
  }, [text])
      
  const toType = () => {
    let i = loop % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

    setText(updatedText)

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true)
      setDelta(period)
    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false)
      setDelta(period)
      setLoop(loop+1)
    }
  }
  return(
    <div className=" ml-40 mt-32">
      <h1 className="text-5xl font-semibold">Olá, {text}</h1>
      <p className="text-3xl font-semibold ml-20 mt-16">
        Estou cursando Engenharia de Software<br/> no Centro Universitário Leonardo da Vinci (Uniasselvi).<br/>
        Ao longo da minha jornada pude me envolver<br/> em projetos e desenvolvimento de paginas web.<br/>
        Quero construir minha carreira com o proposito<br/> de criar programas e paginas para facilitar manuseio<br/>
        e a administração das suas empresas.<br/>
        Atualmente estou estudando alem da faculdade,<br/> cursos online como a DNC com foco em desenvolvimento da WEB<br/>
        como fullstack. Tendo como foco as tecnologias, HTML, CSS, JavaScript.<br/> E realizando um projeto particular em Python, usando o framework Django.
      </p>
      <Button link={'https://www.instagram.com/zmatheus.cf/'} text={'Saber mais'} className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] ml-32 mt-16 w-72 h-20 rounded-full text-2xl font-semibold"/> 
    </div>
  )
}
