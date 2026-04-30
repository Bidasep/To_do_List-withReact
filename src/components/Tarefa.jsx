import { memo, useState } from "react"
import ListaTarefas from "./ListaTarefas";
import './Tarefa.css'


function Tarefa({ texto, id , removeTarefa, concluida, alternarConcluida }) {


    return (

        <li> <input type="Checkbox"
            onChange={ () => alternarConcluida(id)}
        />
            <span className={concluida ? 'concluida' : 'pendente'} >{texto}</span>

            <button className="btn_add" id={id} type="button" onClick={() => removeTarefa(id)} >Remover</button>
        </li>

    )





};

export default memo(Tarefa);

