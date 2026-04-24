import { useState } from "react"

export const InputTexto = () => {
    const [texto, setTexto] = useState('')

    const manejarCambio = (evento)=>{
        setTexto(evento.target.value)
    }

  return (
    <div>
        <input 
            type="text"
            value={texto}
            onChange={manejarCambio}
            placeholder="Escribe algo"

        />
        <p>Estas Escribiendo: {texto}</p>
    </div>
  )
}
