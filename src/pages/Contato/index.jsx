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
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <div className="z-10 fixed top-0 w-full">
            {textBox && <h2 className="bg-green-500 text-white p-4">Mensagem Enviada</h2>}
        </div>
        
        <h1 className="text-4xl mb-5">Me envie uma mensagem!</h1>
        
        <form className="flex flex-col justify-center items-center text-lg m-10 space-y-5">
            <div>
            <h2>Seu nome: </h2>
            <input type="text" value={nome} onChange={handleNome} className="border p-2 rounded"/>
            </div>
            
            <div>
            <h2>Título da mensagem: </h2>
            <input type="text" value={titulo} onChange={handleTitulo} className="border p-2 rounded"/>
            </div>
            
            <div>
            <h2>Email: </h2>
            <input type="email" value={email} onChange={handleEmail} className="border p-2 rounded"/>
            </div>
            
            <div>
            <h2>Mensagem: </h2>
            <textarea cols="25" rows="5" value={mensagem} onChange={handleMensagem} className="border p-2 rounded"/>
            </div>
        </form>
        
        <button onClick={criaMsg} className="bg-blue-500 text-white w-52 px-4 py-2 rounded hover:bg-blue-800">
            Enviar mensagem
        </button>
        </div>

        </>
     );
}

export default Contato;