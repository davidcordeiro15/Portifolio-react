
import { useEffect, useState } from "react";
import CardProjets from "../../components/CardProjets"
function Home() {

    const List = [
        {
            id: 1,
            img: "/img/transacao.png",
            nome: "Projeto de Transações entre contas com Spring Boot",
            endereco: "https://github.com/davidcordeiro15/Transaction_System",
            descricao: "Este é um projeto que utiliza Spring Boot para gerenciar informações de empresas e clientes. A aplicação permite a criação, consulta e gerenciamento de dados através de uma API RESTful."

        },
        {
            id: 2,
            img: "/img/produtos.png",
            nome: "Cadastro e listagem de produtos utilizando Java",
            endereco: "https://github.com/davidcordeiro15/Menu_de_cadastro",
            descricao: "Esse programa permite o usuario cadastrar e listar os elementos armazenados em uma lista, por meio de métodos do Java, simulando um pequeno sistema de mercado."

        },
        {
            id: 3,
            img: "/img/lixo.png",
            nome: "Sistema de Captura de Lixo do Mar",
            endereco: "https://github.com/davidcordeiro15/GS---Edge-Computing",
            descricao: "Este sistema tem como objetivo utilizar um IOT para capturar lixo do mar com base na distância do objeto ao sistema. Utilizando servo motores, o sistema abre sua porta para armazenar o lixo quando detectado, fechando novamente após 5 segundos."

        },
        
    ]

    return ( 
        <>
        <div className=" min-h-screen ">
            <div className="">
                <div className="lg:flex">
                <h1 className="mt-2 text-2xl md:text-5xl md:gap-4 lg:gap-5 md:mt-5 justify-center flex gap-2 lg:ml-10 lg:items-center">Olá, meu nome é <p className="font-bold">David</p>!</h1>
                <img src="/img/programador.png" alt="" className="m-10 md:ml-10 w-4/6 h-4/6 md:w-6/12 md:h-6/12 xl:ml-36 lg:w-3/12 lg:h-3/12"/>
                </div>
                <h2 className="text-xl  md:text-3xl md:w-4/6 ml-10">Sou um curioso que desde criança decidiu explorar o mundo da tecnologia</h2>
                
            </div>
            <h2 className="text-3xl text-center mt-10 md:text-5xl md:m-20">Alguns Projetos: </h2>
            <div className="m-5  text-center gap-20">
            {List.map(p => (
            <CardProjets 
                key={p.id}
                nome={p.nome}
                img={p.img}
                descricao={p.descricao}
                endereco={p.endereco}
                id={p.id}
                
            />
            ))}

            </div>
        </div>
        </>
     );
}

export default Home;