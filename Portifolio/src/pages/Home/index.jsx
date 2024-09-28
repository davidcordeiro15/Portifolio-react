import { useState } from "react";
import CardProjets from "../../components/CardProjets"
function Home() {

    const List = [
        {
            id: 1,
            img: "",
            nome: "Sistema de transações",
            endereco: "",
            descricao: "Um sistema de transações desenvolvido "

        },
        {
            id: 2,
            img: "",
            nome: "Sistema de transações",
            endereco: "",
            descricao: "Um sistema de transações aasdasd "

        }
    ]
    
    return ( 
        <>
        <h1>Bem vindo ao meu portifolio!</h1>
        <div>
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
        </>
     );
}

export default Home;