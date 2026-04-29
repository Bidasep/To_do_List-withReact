import { useState } from "react";
import useInput from "../hooks/useInput";
import Tarefa from "./Tarefa";
import './ListaTarefas.css'



function ListaTarefas() {

  // Para criar uma novo Objeto tarefa
  const [tarefas, setTarefas] = useState([]);
  const tarefa = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Clicou enviar");

    const tarefaNova = {
      id : Date.now(),
      texto: tarefa.valor,
      pendente: true,
      concluida: false,

    } 


    setTarefas([...tarefas, tarefaNova]);
    tarefa.limpar();

  }

  console.log(tarefas);

  return (
    <>
      <form onSubmit={handleSubmit}>


        <input type="text"
          
          placeholder="Digite a Nova Tarefa"
          value={tarefa.valor}
          onChange={tarefa.onChange}
        />

        <button  className="btn_nova-tarefa" type="submit">Adicionar nova Tarefa</button>
      </form>

      <ul>
          {tarefas.map (tarefa =>  <Tarefa key = {tarefa.id} texto={tarefa.texto} />)}

      </ul>
    </>

  )
}




export default ListaTarefas;