import React, { useEffect, useState } from "react";
import reactLogo from '../assets/react.svg';
import useInput from "../hooks/useInput";
import Tarefa from "./Tarefa";
import './ListaTarefas.css';
import useLocalStorage from "../hooks/localStorage";



function ListaTarefas() {

  // Para criar uma novo Objeto tarefa
  /*   const local = useLocalStorage(); */
  const { tarefas, setTarefas } = useLocalStorage();
  const tarefa = useInput();
  const [loading, setLoading] = useState(true);
  const [vazio, setVazio] = useState(true);
  const [filter, setFilter] = useState(false);

  console.log("RENDERIZOU");


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // simula carregamento
  }, []);

  /*   useEffect(() => {
  
      useLocalStorage();
  
      tarefas ? setVazio(true) : setVazio(false); // simula carregamento
    }, [tarefas]); */

  console.log(loading);
  console.log(tarefas);







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

    const itemAtualizado = tarefas.map(tarefa => tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa);

    setTarefas(itemAtualizado);


  }

  const alternarFiltroConcluida = () => { setFilter(false) };





  if (loading) {

    return (
      <>
        <img src={reactLogo} alt="Logo react" />
        <h3>Carregando tarefas...</h3>
      </>
    )
  }



  return (
    <>
      <form onSubmit={handleSubmit}>


        <input className="input-tar" type="text"

          placeholder="Digite a Nova Tarefa"
          value={tarefa.valor}
          onChange={tarefa.onChange}
        />

        <button className="btn_nova-tarefa" type="submit">Adicionar nova Tarefa</button>
      </form>


        <h3>Minhas Tarefas</h3>
        <div className="selector">

         <button className = "Check_Concluidas" type="Checkbox"><input className = "Check_Concluidas" type="CheckBox" /><span className = "Check_Concluidas">Concluidas</span></button>
         <button className = "Check_Pendentes" ><input className = "Check_Pendentes" type="CheckBox" /><span className = "Check_Pendentes">Pendentes</span></button>  

        </div>

      <ul>



        {tarefas
          /* .filter(tarefa => tarefa.concluida === true) */
          .map(tarefa => <Tarefa  key={Tarefa.id} texto={tarefa.texto} id={tarefa.id} removeTarefa={removeTarefa} concluida={tarefa.concluida} alternarConcluida={alternarConcluida} />)}

      </ul>

    </>

  )

  if (tarefas.length == 0) {

    return (
      <>
        <form onSubmit={handleSubmit}>


          <input className="input-tar" type="text"

            placeholder="Digite a Nova Tarefa"
            value={tarefa.valor}
            onChange={tarefa.onChange}
          />

          <button className="btn_nova-tarefa" type="submit">Adicionar nova Tarefa</button>
        </form>


        <img src={reactLogo} alt="Logo react" />
        <h3>Voce não tem Tarefas no momento. Clique em adicionar tarefas.</h3>

      </>

    )

  }
}







export default ListaTarefas;