import { memo } from "react"
import './Tarefa.css'


function Tarefa({ texto, id, removeTarefa, concluida, alternarConcluida }) {

    console.log("componente montado");


    return (


        <li className="lista" > <input type="Checkbox"
            checked={concluida}
            onChange={() => alternarConcluida(id)}

        />
            <span className={concluida ? 'concluida' : 'pendente'} >{texto}</span>

            <div className="btn_div">
                <button className={concluida ? 'btn_concluida' : 'btn_pendente'} id={id} type="Checkbox" onClick={() => alternarConcluida(id)} >&#10003;</button>
                <button className="btn_add" id={id} type="button" onClick={() => removeTarefa(id)} >Remover</button>
            </div>
        </li>


    )





};

export default memo(Tarefa);

