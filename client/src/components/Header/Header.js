import React, { useState, useContext } from 'react'
import { appContext } from '../../context/appContext'
import { Redirect, useHistory } from 'react-router-dom'


function Header() {

    const [seleccion, setSeleccion] = useState("vacio")
    const [buscador, setBuscador] = useState("")
    const [valSelect, setValSelect] = useState(false)

    const { save } = useContext(appContext)
    let history=useHistory()
    const onHandleChange = (e) => {
        setBuscador(e.target.value)
        
    }
    const selectHandle = (e) => {
        setSeleccion(e.target.value)
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

            {/* <form action="" onSubmit={} >   */}
            <label htmlFor="tipo">Selecciona:</label>
            <select name="tipo" id="tipo" onChange={selectHandle}>
                <option value="vacio"></option>
                <option value="empresa">Empresa</option>
                <option value="producto">Producto</option>
            </select>
            <label>Nombre:</label>
            <input type="text" name="buscador" id="buscador" placeholder='Introduce el nombre a buscar' onChange={onHandleChange} />


            <button onClick={crearBusqueda}>buscar</button>


        </div>

    )
}

export default Header
