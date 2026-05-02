import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ListaTarefas from './components/ListaTarefas'
import './App.css'
import Tarefa from './components/Tarefa'
import { TarefaContext } from './contexts/TarefaContext'


function App() {

  return (
      <TarefaContext.Provider value={{Tarefa}}>

    
      <main>

        <h1> To-Do-List <img src={viteLogo} alt="" /> + <img src={reactLogo} alt="Logo react" /></h1>
        <ListaTarefas />

      </main>
      </TarefaContext.Provider> 


    

  )
}


export default App








