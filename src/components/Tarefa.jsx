import { memo, useState } from "react"
import ListaTarefas from "./ListaTarefas";
import './Tarefa.css'



function Tarefa({ texto }) {

    const [concluida, setConcluida] = useState();

    const alternarConcluida = () =>
        setConcluida(!concluida);

    return (

        <li> <input type="Checkbox"
            onChange={alternarConcluida}
        /> 
        <span  className={ concluida ? 'concluida' : 'pendente'} >{texto}</span> 

        <button className="btn_add" type="button">Remover</button></li>

    )





};

export default memo(Tarefa);