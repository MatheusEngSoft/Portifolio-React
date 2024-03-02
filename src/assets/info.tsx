import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"


export default function Info(){
  return(
    <div className="flex justify-between items-center mt-48 mb-32">
      <div className="flex justify-start ml-40 text-[36px] font-semibold">
        <p className="mr-32">Meu Contato: <br/>77 981503251</p>
        <p>Email: <br/>matheus.engsof@gmail.com</p>
      </div>
      <div className="flex justify-end space-x-4 mr-48">
        <a href=""><FaGithub size={65}/></a>
        <a href=""><FaLinkedin size={65}/></a>
        <a href=""><FaInstagram size={65}/></a>
      </div>
    </div>
  )
}