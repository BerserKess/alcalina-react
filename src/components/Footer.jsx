import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export function Footer(){
    return(
        <div className="px-5  w-screen py-5 flex md:flex-wrap items-center md:justify-between bg-blue-950">
            <p className="text-xl text-gray-200">
                Feito por: <span className="font-bold">Kesley Rainery</span>
            </p>
            <div className="flex items-center gap-5 px-4">
                    <a className="text-xl flex items-center text-gray-200 gap-2" target="_blank" href="https://github.com/BerserKess">
                    <FaGithub className="text-2xl text-gray-200 align-middle" />
                        Github
                    </a>

                    <a className="text-xl text-gray-200 flex items-center gap-2" target="_blank" href="https://www.linkedin.com/in/kesley-rainery/">
                    <FaLinkedin className="text-2xl text-gray-200 align-middle"/>
                        Linkedin
                    </a>
            </div>
        </div>
    )
}