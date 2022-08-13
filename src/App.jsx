import React, {useState} from 'react';
import Ejercicio2 from './Ejercicio2';
// import Ejercicio3 from './Ejercicio3';


const App = () => {
    const [mensaje, setMensaje] = useState('')
    return (
        <div>
            <h1>Hello Word!</h1>
            <Ejercicio2 nombre='my friend!'></Ejercicio2>
            <div>
            <h1>Hello my friend {mensaje}!</h1>
            <button onClick={()=> setMensaje('(from changed state)')}>Click me</button>
        </div>
        </div>
    );
};

export default App;