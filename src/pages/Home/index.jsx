
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
        <div className=" min-h-screen text ">
            <div className="flex ">
                <div>
                <h1 className="text-5xl lg:ml-8 xl:mt-40 xl:mb-10 xl:mr-40 xl:m-10 flex gap-5">Olá, meu nome é <p className="font-bold">David</p>!</h1>
                <h2 className="text-2xl  mb-40 mr-40 m-10 w-2/6">Sou um curioso que desde criança decidiu explorar o mundo da tecnologia</h2>
                </div>
                <img src="/img/programador.png" alt="" className="w-3/12 h-2/6 lg:mt-10 lg:mr-24 xl:mr-20 xl:mt-16"/>
                
            </div>
            <h2 className="text-6xl ml-10 ">Alguns Projetos: </h2>
            <div className="m-20  text-center gap-20">
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
