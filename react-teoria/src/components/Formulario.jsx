import { useState } from "react"

export const Formulario = () => {

    const [formData, setFormData] = useState({ nombre: "", apellido: "", email: "" })

    /*
        * Función manejadora de eventos para actualizar el estado del formulario.
        * Se activa cada vez que el usuario escribe o cambia algo en los inputs.
    */
    const manejandoCambio = (e) => {
        // 1. Desestructuración de e.target:
        // Extraemos 'name' (el atributo name del input) y 'value' (el texto actual).
        // Esto nos permite saber qué campo se está editando y qué escribió el usuario.
        const { name, value } = e.target;

        // 2. Actualización del estado usando una función de retorno (callback):
        // Usamos 'prevState' para asegurarnos de tener la versión más reciente del estado
        // antes de aplicar el nuevo cambio.
        setFormData(prevState => ({
            // 3. Operador Spread (...):
            // Copiamos todas las propiedades existentes en el estado anterior.
            // Sin esto, al escribir el nombre se borrarían el apellido y el email.
            ...prevState,

            // 4. Propiedad computada [name]:
            // Usamos corchetes para que la clave sea dinámica. 
            // Si name es "email", actualizará la propiedad email: value.
            [name]: value
        }));
    };

    const manejarSubmit = (e)=>{
        {/* preventDefault se usa para que al momento de pulsar enviar la pagina no se recargue toda*/}
        e.preventDefault()
        console.log(`Nombre: ${formData.nombre} Apellido: ${formData.apellido} Correo: ${formData.email}`);
        
    }

    return (
        <form onSubmit={manejarSubmit}>
            <input
                type="text"
                name="nombre"
                value={formData.nombre}
                placeholder="Ingresa Nombre"
                onChange={manejandoCambio}
            />
            <br /><br />
            <input
                type="text"
                name="apellido"
                value={formData.apellido}
                placeholder="Ingresa Apellido"
                onChange={manejandoCambio}
            />
            <br /><br />
            <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Ingresa correo"
                onChange={manejandoCambio}
            />
            <br /><br />
            <button type="submit">
                Enviar
            </button>
        </form>
    )
}
