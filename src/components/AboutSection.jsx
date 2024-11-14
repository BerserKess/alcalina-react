export function AboutSection(){
    return(
        <section id='about' className="w-full flex flex-col gap-3 p-5 items-center border-2 border-orange-500 rounded-lg mt-10 z-0 bg-blue-900">
                <h2 className="font-pixelify text-gray-200 text-3xl mb-4">O Projeto</h2>
                <p className="font-inter text-gray-200 text-lg text-center max-w-4xl">
                    O projeto visa fomentar a consciência ambiental e implementar um sistema eficiente de reciclagem de baterias e pilhas usadas no campus universitário. Inicialmente, consideramos o uso de um Arduino programado em C++, mas, após análise, decidimos redirecionar o projeto para o desenvolvimento de um jogo para dispositivos móveis Android.
                    A implementação de uma lixeira específica para pilhas e baterias é essencial para proteger o meio ambiente e a saúde pública, prevenindo a contaminação do solo e da água por substâncias tóxicas, como mercúrio e chumbo. Essa iniciativa não apenas reduz o risco de incêndios e a exposição a materiais perigosos, como também facilita a reciclagem de recursos valiosos, contribuindo para a economia circular. Além disso, assegura a conformidade com regulamentações ambientais e evita penalidades, ao mesmo tempo em que promove a educação e conscientização sobre práticas corretas de descarte. Em suma, essas lixeiras contribuem para um ambiente mais seguro e sustentável.
                </p>
        </section>
    )
}