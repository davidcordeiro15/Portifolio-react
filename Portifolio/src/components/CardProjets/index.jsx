
import { NavLink } from "react-router-dom";
function CardProjets({ nome, img, descricao, endereco }) {
 
    return ( 
    <>
    <div>
            <img src={img} alt="" />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <NavLink to={"/"&&endereco}></NavLink>
    </div>
    
    </> );
}

export default CardProjets;