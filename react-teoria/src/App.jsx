{/*Importaciones nombradas cuando se usa export const*/}
import { MultiProps } from "./components/MultiProps"
import { Props } from "./components/Props"

{/*Importaciones por defecto cuando se usa export default*/}
import Contador from "./components/Contador"
import { InputTexto } from "./components/InputTexto"
import { Formulario } from "./components/Formulario"
import { MensajeCondicional } from "./components/MensajeCondicional"
import { MensajeConsola } from "./components/MensajeConsola"
import { ContadorEfect } from "./components/ContadorEfect"

function App() {

  {"los parametros se pueden pasar poniendolos directamente como es el caso de Luz Fary o pasandolos por variables como en este ejemplo"}

  const nombre2 = "Mario"
  const apellido = "Munera"

  return (
    <div>
      <h1>React Teoria</h1>
      <hr />
      <h2>Uso de Props</h2>
      <Props nombre="Luz Fary"/>
      {/*Se puede enviar multiples prosps si se requiere*/}
      <h2>Multiples Props</h2>
      <MultiProps nombre={nombre2} apellido={apellido} />
      <hr />
      <h2>Uso de useState</h2>
      <Contador/>
      <h3>Capturando texto input</h3>
      <InputTexto/>
      <h3>Manjando Formularios, Multiples inputs</h3>
      <Formulario/>
      <h3>Mensaje condicional</h3>
      <MensajeCondicional/>
      <hr />
      <h2>Uso de useEffect</h2>
      <h3>Mensaje Consola</h3>
      <MensajeConsola/>
      <h3>Contador con useEffect</h3>
      <ContadorEfect/>
    </div>
  )
}

export default App
