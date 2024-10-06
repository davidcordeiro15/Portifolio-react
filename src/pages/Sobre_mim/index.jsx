
function Sobre_mim() {

    
    return (    
        <>
        <div className="min-h-screen">
        <h1 className="text-4xl md:text-6xl text-center">Sobre mim</h1>
        <div className="flex flex-col lg:flex-row justify-between items-center m-2 mt-10   gap-10">
        <img className="w-3/6 lg:w-1/6 md:w-2/6 h-auto border-1 border-blue-600 rounded-full" src="/img/Foto_nova.jpg" alt="Foto de perfil" />
        
        <div className="text-lg md:text-2xl ">
            <p className="m-5">Desde criança sempre fui uma pessoa curiosa, porém quando tive meu primeiro computador aos 6 anos as coisas mudaram.</p>
            <p className="m-5 mt-6">A partir dali me apaixonei por tecnologia completamente, culminando em seguir esse caminho em minha carreira profissional, decidindo cursar Engenharia de Software.</p>
            <p className="m-5 mt-8">
            Atualmente crio desafios para mim mesmo a fim de desenvolver programas, utilizando 
            <span className="font-bold"> Java com Spring Boot, Python, React com JavaScript, SQL com PostgreSQL, Tailwind, HTML e CSS.</span>
            </p>
        </div>
        </div>
        <div className="text-lg lg:flex-col md:text-2xl">
            <p className="m-5 mt-6">Já nos tempos da escola, eu era um garoto autônomo, determinado em aprender coisas novas. Hoje, esse pensamento não mudou. A cada dia, tenho a meta de expandir meu conhecimento na área de desenvolvimento, conhecendo novas tecnologias, linguagens, frameworks e metodologias.</p>
            <p className="m-5">Tenho em mente que, para ser um exímio desenvolvedor, é necessário colaborar com a equipe. Para isso, desenvolvo projetos com meus amigos, sempre com dedicação, respeito e ajuda mútua.</p>
        </div>
        </div>

            
        </>
     );
}

export default Sobre_mim;