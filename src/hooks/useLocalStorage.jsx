import { useEffect, useState } from "react"


function useLocalStorage() {



    const [tarefas, setTarefas] = useState(() => {

        const tarefas = localStorage.getItem("tarefas");

        return tarefas ? JSON.parse(tarefas) : [];

    })

    useEffect(() => {


        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        console.log("Mudou Tarefas");

    }, [tarefas]);


    const limparLocalStorage = () => {

        localStorage.removeItem("tarefas");
        setTarefas([]);

    }

    return {
        setTarefas,
        tarefas,
        limparLocalStorage,

    }
}

export default useLocalStorage;