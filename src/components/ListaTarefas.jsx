import { useEffect, useMemo, memo, useState, useContext } from "react";
import reactLogo from '../assets/react.svg';
import useInput from "../hooks/useInput";
import Tarefa from "./Tarefa";
import './ListaTarefas.css';
import useLocalStorage from "../hooks/useLocalStorage"
import { TarefaContext } from "../contexts/TarefaContext";


function ListaTarefas() {

  const {
  tarefas,
  setTarefas,
  removeTarefa,
  alternarConcluida,
  filter,
  setFilter
} = useContext(TarefaContext);

const [loading, setLoading] = useState(true);
const tarefa = useInput();



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // simula carregamento
  }, []);

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



  const tarefasFiltradas = useMemo(() => {
    if (filter === "concluidas") {
      return tarefas.filter(tarefa => tarefa.concluida === true);
    }
    if (filter === "pendentes") {
      return tarefas.filter(tarefa => tarefa.concluida === false);
    }

    return tarefas;
  }, [tarefas, filter]);





  if (loading) {

    return (
      <>
        <img src={reactLogo} alt="Logo react" />
        <h3>Carregando tarefas...</h3>
      </>
    )
  }


  // TODAS

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

        <button className="Check_Concluidas" type="Checkbox" onClick={() => setFilter("concluidas")}>
          <span className="Check_Concluidas">Concluidas</span>
        </button>

        <button className="Check_todas" onClick={() => setFilter("todas")}>
          <span className="Check_Pendentes">Todas</span>
        </button>

        <button className="Check_Pendentes" onClick={() => setFilter("pendentes")} >
          <span className="Check_Pendentes">Pendentes</span>
        </button>

      </div>

      <ul>



        {tarefasFiltradas
          .map(tarefa => <Tarefa key={tarefa.id} texto={tarefa.texto} id={tarefa.id} removeTarefa={removeTarefa} concluida={tarefa.concluida} alternarConcluida={alternarConcluida} />)}

      </ul>

    </>

  )
}







  export default ListaTarefas;