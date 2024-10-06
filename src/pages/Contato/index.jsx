import { useEffect, useState } from "react";
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
            setTextBox(true); 
            setTimeout(() => {
                setTextBox(false); 
            }, 1500);
            
            console.log(msg)
            setEmail("")
            setNome("")
            setMensagem("")
            setTitulo("")
            
        }
    }
    return ( 
        <>
        <div className="min-h-screen text-center ">
            <div className="z-10 fixed text-center ">
                {textBox &&<h2 className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 text-center">Mensagem Enviada</h2>}
            </div>
            <h1 className="text-5xl">Me envie uma mensagem!</h1>
            <form className="justify-around z-0 text-xl m-10">
                <h2 >Seu nome: </h2>
                <input type="text" value={nome} onChange={handleNome}/>
                <h2>Titulo da mensagem: </h2>
                <input type="text" value={titulo} onChange={handleTitulo}/>
                <h2>Email: </h2>
                <input type="email" value={email} onChange={handleEmail}/>
                <h2>Mensagem: </h2>
                <textarea cols="30" rows="10"  type="text" value={mensagem} onChange={handleMensagem}/>
            </form>
            <button onClick={criaMsg} className="hover:w-60  bg-blue-500 text-white w-52 px-4 py-2 rounded hover:bg-blue-800">Enviar mensagem</button>

        </div>
        </>
     );
}

export default Contato;