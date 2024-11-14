import kael from '../assets/kael.jpg'
export function MembersSection(){
    const membersData = [
        {id: '1',image: kael, name: "Kesley", description:"Gosta de jogos e de programar"},
        {id: '2',image: kael, name: "Ícaro", description:"Gosta de jogos e de programar"},
        {id: '3',image: kael, name: "Diogo", description:"Gosta de jogos e de programar"},
        {id: '4',image: kael, name: "Gabriel", description:"Gosta de jogos e de programar"},
        {id: '5',image: kael, name: "Tito", description:"Gosta de jogos e de programar"},

    ]
    return(
        <section id='members' className="w-full flex flex-col gap-3 p-5 items-center mt-10 z-0 bg-blue-800">
            <h2 className="font-pixelify text-gray-200 text-3xl mb-4">Integrantes</h2>
            <div className='flex flex-wrap gap-5 w-full justify-around'>
                {membersData.map((member, index) => (
                <div key={member.id} className={`flex flex-col  w-60 h-80 items-center p-5 gap-4 shadow-xl shadow-slate-800 bg-blue-900 border-2 rounded-lg border-orange-500 sm:mt-0 ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-5'}`}>
                    <img className='w-32 h-32 rounded-full object-cover border-4 border-orange-400' src={member.image} alt="imagem dos membros da equipe" />
                    <p className='font-pixelify text-gray-200 text-2xl'>{member.name}</p>
                    <article className='text-center text-gray-200 font-inter text-base'>{member.description}</article>
                </div>
            ))}
            </div>

        </section>
    )
}