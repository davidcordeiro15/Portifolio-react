import { useState } from "react";
function Contato() {
    
    const [nome, setNome] = useState("");
    const [titulo, setTitulo] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [textBox, setTextBox] = useState(false)
    const handleNome = (event) => {setNome(event.target.value)}    
    const handleTitulo = (event) => {setTitulo(event.target.value)}  
    const handleEmail = (event) => {setEmail(event.target.value)}  
    const handleMensagem = (event) => {setMensagem(event.target.value)}  

    const criaMsg = (m) => {
        m.preventDefault();
        const msg = {
          nome: nome,
          titulo: titulo,
          email: email,
          mensagem: mensagem,
        };
        if (msg.nome === "" || msg.titulo === "" || msg.email === "" || msg.mensagem === "") {
            alert("Por favor preencha todos os campos")
        } else {
            setTextBox(!textBox) 
            console.log(msg)
        }
    }
    return ( 
        <>
        <div className="min-h-screen">
            <div className="z-10 absolute ">
                {textBox &&<h2 >Mensagem Enviada</h2>}
            </div>
            <form className="justify-around z-0">
                <h2 >Seu nome: </h2>
                <input type="text" value={nome} onChange={handleNome}/>
                <h2>Titulo da mensagem: </h2>
                <input type="text" value={titulo} onChange={handleTitulo}/>
                <h2>Email: </h2>
                <input type="email" value={email} onChange={handleEmail}/>
                <h2>Mensagem</h2>
                <input type="text" value={mensagem} onChange={handleMensagem}/>
            </form>
            <button onClick={criaMsg}>Enviar mensagem</button>

        </div>
        </>
     );
}

export default Contato;