import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ListaTarefas from './components/ListaTarefas' 
import './App.css'
import Tarefa from './components/Tarefa'

function App() {

  return (

    <main>

      <h1> To-Do-List <img src={viteLogo} alt="" /> + <img src={reactLogo} alt="Logo react"  /></h1>
      <ListaTarefas/>
      


    </main>








  )
}

export default App
