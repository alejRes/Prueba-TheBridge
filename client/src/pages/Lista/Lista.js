import React, { useState, useEffect, useContext } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { appContext } from '../../context/appContext';
import { useHistory } from 'react-router-dom'
import axios from "axios";

function Lista() {

    const [datoFila, setDatoFila] = useState([])
    const { setId } = useContext(appContext)

    let history=useHistory()

    useEffect(() => {
        axios.get('/list').then(datas => {
            setDatoFila(datas.data)
        })
    }, [])

    const verDetalle = (e) => {
        setId(e.target.id)
        history.push('/detail')

    }
    return (
        <div>
            <h3>Lista de productos</h3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Producto<button>Asc</button></TableCell>
                        <TableCell>Precio<button>Asc</button></TableCell>
                        <TableCell>Valoracion<button>Asc</button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datoFila.map((fila, i) => (
                        <TableRow key={i}  >
                            <TableCell id={fila.productoID} onClick={verDetalle}>{fila.nombre}</TableCell>
                            <TableCell>{fila.precio}</TableCell>
                            <TableCell>{fila.valoracion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}

export default Lista
