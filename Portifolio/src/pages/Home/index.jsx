
import CardProjets from "../../components/CardProjets"
function Home() {

    const List = [
        {
            id: 1,
            img: "",
            nome: "Projeto de Transações entre contas com Spring Boot",
            endereco: "https://github.com/davidcordeiro15/Transaction_System",
            descricao: "Este é um projeto que utiliza Spring Boot para gerenciar informações de empresas e clientes. A aplicação permite a criação, consulta e gerenciamento de dados através de uma API RESTful"

        },
        {
            id: 2,
            img: "",
            nome: "Cadastro e listagem de produtos utilizando Java",
            endereco: "https://github.com/davidcordeiro15/Menu_de_cadastro",
            descricao: "Esse programa permite o usuario cadastrar e listar os elementos armazenados em uma lista, por meio de métodos do Java, simulando um pequeno sistema de mercado"

        },
        {
            id: 3,
            img: "",
            nome: "Sistema de Captura de Lixo do Mar",
            endereco: "https://github.com/davidcordeiro15/GS---Edge-Computing",
            descricao: "Este sistema tem como objetivo utilizar um IOT para capturar lixo do mar com base na distância do objeto ao sistema. Utilizando servo motores, o sistema abre sua porta para armazenar o lixo quando detectado, fechando novamente após 5 segundos."

        },
        
    ]
    
    return ( 
        <>
        <div className="bg-white min-h-screen">

            <h1 className="text-7xl text-center m-40">Bem vindo ao meu portifolio!</h1>
            <h2 className="text-6xl ml-10 ">Alguns Projetos: </h2>
            <div className="m-20 flex text-center gap-20">
            {List.map(p => (
            <CardProjets 
                key={p.id}
                nome={p.nome}
                img={p.img}
                descricao={p.descricao}
                endereco={p.endereco}
            />
            ))}

            </div>
        </div>
        </>
     );
}

export default Home;