import { useState } from "react"

export const MensajeCondicional = () => {

    const [mensaje, setMensaje] = useState('')

  return (
    <div>
        <input 
            type="text"
            placeholder="Escribe un mensaje"
            value={mensaje}
            onChange={(e)=> setMensaje(e.target.value)} 
        />
        {mensaje ? <p>Tu mensaje es: {mensaje}</p> : <p>No hay mensaje</p> }
        {mensaje && <button onClick={()=>{alert(`Mensaje enviado. Mensaje: ${mensaje}`)}}>Enviar</button>}
    </div>
  )
}
