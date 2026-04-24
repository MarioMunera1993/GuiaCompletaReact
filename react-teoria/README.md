# Aprendizaje de React

Este proyecto está pensado para aprender los conceptos básicos de React.

## ¿Qué es React?

React es una biblioteca de JavaScript creada por Facebook (ahora Meta) para construir interfaces de usuario rápidas y reutilizables. Su objetivo principal es crear aplicaciones web que actualicen solo las partes necesarias de la pantalla cuando cambia la información.

### Características principales

- Basado en componentes.
- Maneja el DOM de forma eficiente con un "DOM virtual".
- Permite reutilizar código entre partes de la aplicación.
- Usa JSX, una sintaxis que combina JavaScript y HTML.

## Creadores e historia

- React fue creado por Jordan Walke en Facebook en 2011.
- Se publicó como código abierto en 2013.
- Desde entonces se ha convertido en una de las bibliotecas más populares para construir aplicaciones web.

## Conceptos básicos que veremos en este proyecto

1. Componentes
2. Props
3. Import y export
4. JSX
5. Estructura básica de una app React
6. Hooks

## 1. Componentes

Los componentes son las piezas principales de cualquier aplicación React. Un componente es una función o clase que devuelve JSX y representa una parte de la interfaz.

### Formas de crear componentes

#### Función declarativa
```jsx
// src/Components/Saludo.jsx
import React from 'react';

function Saludo() {
  return <h1>Hola, bienvenido a React</h1>;
}

export default Saludo;
```

#### Función flecha
```jsx
// src/Components/Saludo.jsx
import React from 'react';

const Saludo = () => {
  return <h1>Hola, bienvenido a React</h1>;
};

export default Saludo;
```
#### Componente de clase (menos común en React moderno)
```jsx
// src/Components/Saludo.jsx
import React, { Component } from 'react';

class Saludo extends Component {
  render() {
    return <h1>Hola, bienvenido a React</h1>;
  }
}

export default Saludo;
```

En React moderno, lo más común es usar componentes funcionales (declarativos o flecha) con hooks para manejar estado y efectos.

## 2. Props

Las props son los datos que se envían de un componente padre a un componente hijo. Son como los parámetros de una función.

Ejemplo de uso de props:

```jsx
// src/Components/Saludo.jsx
import React from 'react';

function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}

export default Saludo;
```

```jsx
// src/App.jsx
import React from 'react';
import Saludo from './Components/Saludo';

function App() {
  return (
    <div>
      <Saludo nombre="Juan" />
      <Saludo nombre="María" />
    </div>
  );
}

export default App;
```

## 3. Import y export

React usa módulos de JavaScript (ES6) para organizar el código. Cada componente se exporta y se importa donde se necesita.

### Tipos de export

#### Export default
Se usa para exportar un valor principal por archivo. Solo puede haber uno por archivo.

**Sintaxis:**
```jsx
export default NombreDelComponente;
```

**Ejemplo:**
```jsx
// src/Components/Mensaje.jsx
import React from 'react';

function Mensaje() {
  return <p>Este es un mensaje de ejemplo.</p>;
}

export default Mensaje; // Export default
```

**Import:**
```jsx
import Mensaje from './Components/Mensaje'; // Sin llaves
```

#### Export nombrada
Se usa para exportar múltiples valores por archivo. Se importa con llaves.

**Sintaxis:**
```jsx
export const Nombre = valor;
```

**Ejemplo:**
```jsx
// src/Components/Utilidades.jsx
export const PI = 3.14159;

export const sumar = (a, b) => a + b;

export const restar = (a, b) => a - b;
```

**Import:**
```jsx
import { PI, sumar } from './Components/Utilidades'; // Con llaves
```

Puedes combinar export default y nombrados en el mismo archivo, pero es mejor usar uno por archivo para claridad.

**Ejemplo completo:**
```jsx
// src/App.jsx
import React from 'react';
import Mensaje from './Components/Mensaje'; // Import default
import { sumar } from './Components/Utilidades'; // Import nombrada

function App() {
  return (
    <div>
      <Mensaje />
      <p>2 + 3 = {sumar(2, 3)}</p>
    </div>
  );
}

export default App;
```

## 4. JSX

JSX es la sintaxis que te permite escribir código similar a HTML dentro de JavaScript. No es HTML puro, pero se parece mucho.

Ejemplo:

```jsx
const elemento = (
  <div>
    <h2>Título</h2>
    <p>Esto es JSX dentro de un componente React.</p>
  </div>
);
```

Puntos importantes sobre JSX:

- Debe devolver un solo elemento raíz.
- Usa `className` en lugar de `class`.
- Se puede mezclar con expresiones JavaScript usando llaves `{}`.

## 5. Estructura básica de una app React

Una aplicación React típica tiene archivos como:

- `src/main.jsx`: punto de entrada donde React se conecta al `index.html`.
- `src/App.jsx`: componente principal de la app.
- `src/index.css`: estilos globales.
- `src/Components/`: carpeta con componentes reutilizables.

Ejemplo mínimo de `src/App.jsx`:

```jsx
import React from 'react';
import './index.css';
import Saludo from './Components/Saludo';

function App() {
  return (
    <div className="App">
      <Saludo nombre="Estudiante" />
    </div>
  );
}

export default App;
```

## 6. Hooks (ganchos)

Los hooks son funciones especiales de React que permiten usar estado y otras características de React en componentes funcionales. Antes de los hooks (introducidos en React 16.8), solo las clases podían manejar estado. Los hooks hacen que los componentes funcionales sean más poderosos.

### ¿Por qué hooks?

- Permiten reutilizar lógica de estado entre componentes.
- Simplifican el código al evitar clases.
- Facilitan el manejo de efectos secundarios.

### Hooks más usados

#### useState

Sirve para agregar estado local a un componente funcional. Devuelve un array con el valor actual del estado y una función para actualizarlo.

**Sintaxis:**
```jsx
const [estado, setEstado] = useState(valorInicial);
```

**Ejemplos con diferentes tipos de estado:**

**Número:**
```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

**Texto (string):**
```jsx
import React, { useState } from 'react';

function FormularioTexto() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe algo"
      />
      <p>Texto escrito: {texto}</p>
    </div>
  );
}

export default FormularioTexto;
```

**Array:**
```jsx
import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
```

**Objeto:**
```jsx
import React, { useState } from 'react';

function PerfilUsuario() {
  const [usuario, setUsuario] = useState({ nombre: '', edad: 0 });

  const actualizarNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
  };

  const actualizarEdad = (e) => {
    setUsuario({ ...usuario, edad: parseInt(e.target.value) || 0 });
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={usuario.nombre} 
        onChange={actualizarNombre} 
      />
      <input 
        type="number" 
        placeholder="Edad" 
        value={usuario.edad} 
        onChange={actualizarEdad} 
      />
      <p>Nombre: {usuario.nombre}, Edad: {usuario.edad}</p>
    </div>
  );
}

export default PerfilUsuario;
```

**Casos de uso:** Contadores, formularios, listas dinámicas, datos de usuario, etc.

#### useEffect

Se usa para ejecutar efectos secundarios en componentes funcionales, como llamadas a APIs, suscripciones o manipulación del DOM.
este componente se ejecuta antes que todo desde el mismo renderizado de la pagina

**Sintaxis:**
```jsx
  useEffect(()=>{

  },[])
```

**Ejemplo:**
```jsx
import React, { useState, useEffect } from 'react';

function Usuario({ id }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Simular llamada a API
    fetch(`https://api.example.com/usuario/${id}`)
      .then(response => response.json())
      .then(data => setUsuario(data));
  }, [id]); // Se ejecuta cuando cambia 'id'

  return (
    <div>
      {usuario ? <p>Nombre: {usuario.nombre}</p> : <p>Cargando...</p>}
    </div>
  );
}

export default Usuario;
```

**Casos de uso:** Cargar datos de APIs, suscripciones a eventos, timers.