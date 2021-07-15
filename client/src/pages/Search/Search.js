import React, {useEffect, useState, useContext}from 'react'
import{appContext}from '../../context/appContext'
import axios from 'axios'
function Search() {
    const [data, setData] = useState([])
    const { busqueda } = useContext(appContext)

    // const buscarProductos = async (articulo)=>{
    //     let resp = await axios.get(`/producto/?s=${articulo}`)
    //     setData(resp.data)
    // }
    // const buscarEmpresas = async (articulo)=>{
    //     let resp = await axios.get(`/empresa/?s=${articulo}`)
    //     setData(resp.data)
    // }

    useEffect(async() => {
        
        let resp = await axios.get(`/${busqueda.tipo}/s=${busqueda.articulo}`)
        setData(resp.data)
        // switch (busqueda.tipo) {
        //     case 'empresa':
        //         buscarEmpresas(busqueda.articulo)
        //         break;
        //     case 'producto':
        //         buscarProductos(busqueda.articulo)
        //         break;
        //     default:
        //         break;
        // }
    
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Search
