import { useParams } from "react-router-dom"

function PageProject() {
    const {nome} = useParams(); 
    const {img} = useParams(); 
    const {descricao} = useParams(); 
    const {endereco} = useParams(); 
    return ( 
        <>
            <h1>{nome}</h1>
            <img src={img} alt="" />
            <p>{descricao}</p>
            <a href={endereco}>Github</a>
        </>
     );
}

export default PageProject;