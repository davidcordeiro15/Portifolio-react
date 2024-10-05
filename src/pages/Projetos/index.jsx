import CardProjets from "../../components/CardProjets"
function Projetos() {
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
        {
            id: 4,
            img: "",
            nome: "Site para alertar desastres ambientais",
            endereco: "https://github.com/davidcordeiro15/GS---WebDev",
            descricao: "O projeto Oceano Protegido é uma plataforma para cadastro e login de usuários, permitindo que eles façam denúncias de poluição marinha. O objetivo é promover um ambiente seguro e colaborativo para a proteção dos oceanos."

        },
        {
            id: 5,
            img: "",
            nome: "Meu Portifolio",
            endereco: "https://github.com/davidcordeiro15/Portifolio-react",
            descricao: "Esse portifolio foi desenvolvido com principalmente React e Tailwind, idealizado para armazenar e expor meus projetos desenvolvidos ao longo de minha carreira."

        }
    ]
    return ( 
        <>
        <div className="min-h-screen">
        <div className="flex m-10 gap-10 ">
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

export default Projetos;