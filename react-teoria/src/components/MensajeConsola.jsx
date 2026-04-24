import { useEffect } from "react";

export const MensajeConsola = () => {

  useEffect(() => {
    console.log('El componente se a renderizado');
  }, []);

 return(
    <div>
        mira el mensaje por consola
    </div>
 )
};
