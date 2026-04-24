import { useEffect, useState } from "react"

export const ContadorEfect = () => {

    const [numero, setNumero] = useState(0)

    useEffect(()=>{
        console.log(`El numero ahora es: ${numero}`);
    },[numero])


  return (
    <div>
        <p>Has dado clic {numero} veces</p>
        <button onClick={()=>setNumero(numero + 1)}>
            incrementar
        </button>

    </div>
  )
}
