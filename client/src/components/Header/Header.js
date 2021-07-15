import React, { useState, useContext } from 'react'
import { appContext } from '../../context/appContext'
import { Redirect, useHistory } from 'react-router-dom'


function Header() {

    const [seleccion, setSeleccion] = useState("")
    const [buscador, setBuscador] = useState("")
    const [validateSelect, setValidateSelect] = useState(false)
    const [validateInput, setValidateInput] = useState(false)

    const { save } = useContext(appContext)

    let history=useHistory()

    const onHandleChange = (e) => {
        if(e.target.value.length>0){
            setBuscador(e.target.value)
            setValidateInput(true)
        }else
            setValidateInput(false)
    }
    const selectHandle = (e) => {
        if(e.target.value!=='vacio'){
             setSeleccion(e.target.value)
            setValidateSelect(true)
        }else{
            setValidateSelect(false)
        }
           
    }
    const crearBusqueda = (e) => {
        
        e.preventDefault()
        let objBuscar = {
            tipo: seleccion,
            articulo: buscador
        }
        console.log(`objBuscar`, objBuscar)
        save(objBuscar)
        history.push('/search')
    }

    return (

        <div>
            <label htmlFor="tipo">Selecciona:</label>
            <select name="tipo" id="tipo" onChange={selectHandle}>
                <option value="vacio"></option>
                <option value="empresa">Empresa</option>
                <option value="producto">Producto</option>
            </select>
            {!validateSelect? <p>selecciona una opción</p>: <></> }
            <label>Nombre:</label>
            <input type="text" name="buscador" id="buscador" placeholder='Introduce el nombre a buscar' onChange={onHandleChange} />
            {!validateInput? <p>rellena el campo de texto</p>: <></> }

            {validateSelect&&validateInput?<button onClick={crearBusqueda}>buscar</button>: <button disabled>buscar</button> }
        </div>

    )
}

export default Header
