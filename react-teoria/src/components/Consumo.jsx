import { useEffect, useState } from "react"

export const Consumo = () => {

    const [data, setData] = useState("");

    const getData = async () => {
        try{
            const respuesta = await fetch('https://dog.ceo/api/breeds/image/random')
            const json = await respuesta.json()
            setData(json)
        }catch (error){
            setData(error.message)
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <pre>
        {JSON.stringify(data,null,2)}
    </pre>
  )
}
