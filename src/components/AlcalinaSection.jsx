import alcalinaImage from "../assets/alcalina-image.png"
import { CiInstagram } from "react-icons/ci";


export function AlcalinaSection(){
    return(
        <section className="flex flex-col p-5 items-center">
            <div className="flex flex-col gap-6 items-center w-3/5">

                <img  className="h-48 w-48 border-4 border-orange-600 rounded-full p-2 bg-orange-300" src={alcalinaImage} alt="Imagem da mascote do projeto" />

                <h1 className="font-pixelify fo text-5xl text-gray-200 text-center">Oi, eu sou a <span className="text-blue-500">Alcalina</span></h1>
                <p className="font-inter text-gray-200 text-lg text-center">Mascote do Projeto Alcalina contra poluição
                idealizado pela professora Ramayana Pereira e os alunos Diogo Graciano, Gabriel Graciano, Ícaro Emanuel, João Pedro Tito e Kesley Rainery, do curso de<span className="text-orange-300"> Análise e Desenvolvimento de Sistemas</span> da UNINASSAU Campina Grande
                </p>
                <div className="flex items-center gap-1 text-gray-200 hover:text-orange-500 transition-all duration-300 ease-in-out">
                    <CiInstagram className="text-2xl"/>
                    <a className="text-xl" target="_blank" href="https://www.instagram.com/ads.uninassau.cg?igsh=bnoweXN0Z3U5bDc0">
                    Instagram
                    </a>

                </div>
            </div>
        </section>
    )
}