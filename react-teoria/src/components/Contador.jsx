import { useState } from "react";

const Contador = () =>{

    const [contador, setContador] = useState(0)


    return(
        <div>
            <p>Haz Echo clic {contador} veces</p>
            <button onClick={()=>setContador(contador + 1)}>
                Incrementar
            </button>
            <button onClick={()=>setContador(contador - 1)}>
                Decrementar
            </button>
            <button onClick={()=>setContador(0)}>
                Reiniciar
            </button>
        </div>
    )
}

export default Contador;