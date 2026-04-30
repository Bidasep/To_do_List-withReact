import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import Tarefa from "./Tarefa";
import './ListaTarefas.css'



function ListaTarefas() {

  // Para criar uma novo Objeto tarefa
  const [tarefas, setTarefas] = useState(() => {

    const tarefasSalvas = localStorage.getItem("tarefas");

    return tarefasSalvas? JSON.parse(tarefasSalvas) : [];

  });
  const tarefa = useInput();

  /* localStorage.clear(); */


/*   useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");

    if (tarefasSalvas) {
      const tarefasConvertidas = JSON.parse(tarefasSalvas);
      console.log(tarefasConvertidas);
      setTarefas(tarefasConvertidas);
    }
  }, []) */

    useEffect(() => {

      localStorage.setItem("tarefas", JSON.stringify(tarefas))

  }, [tarefas])



  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarefa.valor === '') return;

    const tarefaNova = {
      id: Date.now(),
      texto: tarefa.valor,
      concluida: false,

    }

    setTarefas([...tarefas, tarefaNova]);

    tarefa.limpar();

  }

  function removeTarefa(id) {
    const itemRemovido = tarefas.filter(tarefa => tarefa.id !== id);

    setTarefas(itemRemovido);
  }

  function alternarConcluida(id) {

    const itemAtualizado = tarefas.map(tarefa => tarefa.id == id ? { ...tarefa, concluida: !tarefa.concluida }
      : tarefa);

    setTarefas(itemAtualizado);


  }






  return (
    <>
      <form onSubmit={handleSubmit}>


        <input type="text"

          placeholder="Digite a Nova Tarefa"
          value={tarefa.valor}
          onChange={tarefa.onChange}
        />

        <button className="btn_nova-tarefa" type="submit">Adicionar nova Tarefa</button>
      </form>

      <ul>
        {tarefas.map(tarefa => <Tarefa key={tarefa.id} texto={tarefa.texto} id={tarefa.id} removeTarefa={removeTarefa} concluida={tarefa.concluida} alternarConcluida={alternarConcluida} />)}

      </ul>
    </>

  )
}




export default ListaTarefas;