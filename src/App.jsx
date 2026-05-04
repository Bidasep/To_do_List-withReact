import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import ListaTarefas from "./components/ListaTarefas";
import { TarefaContext } from "./contexts/TarefaContext";
import useLocalStorage from "./hooks/useLocalStorage";
import useInput from "./hooks/useInput";

function App() {


  const { tarefas, setTarefas } = useLocalStorage();
  const [filter, setFilter] = useState("todas");


  const removeTarefa = useCallback((id) => {
    const itemRemovido = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(itemRemovido);
  }, [tarefas, setTarefas]);

  const alternarConcluida = useCallback((id) => {
    const itemAtualizado = tarefas.map(tarefa =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    );

    setTarefas(itemAtualizado);
  }, [tarefas, setTarefas]);

  return (
    <TarefaContext.Provider
      value={{
        tarefas,
        setTarefas,
        removeTarefa,
        alternarConcluida,
        filter,
        setFilter,
      }}
    >
      <main>
        <h1>
          To-Do-List <img src={viteLogo} alt="" /> +{" "}
          <img src={reactLogo} alt="Logo react" />
        </h1>

        <ListaTarefas />
      </main>
    </TarefaContext.Provider>
  );
}

export default App;








