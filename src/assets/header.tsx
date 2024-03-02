import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Header() {
  return(
    <div className="flex justify-between items-center p-10">
      <div className="flex items-center ml-auto text-2xl font-medium">
        <a href="#project"><p className="mx-10">Projetos</p></a>
        <a href="#aboutme"><p className="mx-10">Sobre mim</p></a>
        <a href="#info"><p className="mx-10">Informações</p></a>
      </div>
      <div className="flex items-center ml-72 mr-48">
        <a href="https://github.com/MatheusEngSoft"><FaGithub size={32}/></a>
        <a href="https://www.linkedin.com/in/matheus-santos-736909290/"><FaLinkedin size={32} className="mx-5"/></a>
        <a href="https://www.instagram.com/zmatheus.cf/"><FaInstagram size={32} className="mr-20"/></a>
      </div>
    </div>
  )
}