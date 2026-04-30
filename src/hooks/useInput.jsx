/* Tratamento para o input
todas as ações , valor inicial , quando mudar e quando limpar
*/
import { useState } from "react";


 function useInput(valorInicial = "") {   // Inicial o valor inicial em branco


    // usa o use state para setar o valor ,
    const [valor, setValor] = useState(valorInicial)    

    // quando mudar o valor no evento (e), seta o novo valor  evento.alvo.valor = e.target.value
    const onChange = (e) => {

        setValor(e.target.value);
        
    }


    // função usada para limpar o valor do campo
    const limpar = () => setValor("");
     


    // retorna VALOR: valor inicial "", onChange, quando mudar o valor no form
    return {

        valor,
        onChange,
        limpar,
    };
}

export default useInput;







