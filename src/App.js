
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
        setInput(evaluate(input));
      } else {
        alert("Por favor ingrese primero un numero, para realizar el calculo.");
      }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor' >
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de FreeCodeCamp' /> 

      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila' >
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila' >
        <BotonClear manejarClear={() => setInput('')} >BORRAR</BotonClear>
        </div>

      </div>

      <div className='dev_Persona' >Desarrollado por Alejandro Medina | 2023 </div>

    </div>
  );
}

export default App;
