import React, {useEffect, useState, useContext}from 'react'

function Search() {
    const [data, setData] = useState([])
    const { busqueda } = useContext(appContext)

    const bucarProductos = async (articulo)=>{
        let resp = await axios.get(`/producto/?s=${articulo}`)
    }
    const buscarEmpresas = async (articulo)=>{
        let resp = await axios.get(`/empresa/?s=${articulo}`)
    }

    useEffect(() => {
        switch (busqueda.tipo) {
            case 'empresa':
                buscarEmpresas(busqueda.articulo)
                break;
            case 'producto':
                buscarProductos(busqueda.articulo)
                break;
            default:
                break;
        }
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Search
