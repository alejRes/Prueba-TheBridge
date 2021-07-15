import React, { useState, useEffect, useContext } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { appContext } from '../../context/appContext';
import { useHistory } from 'react-router-dom'
import axios from "axios";

function Lista() {

    const [datoFila, setDatoFila] = useState([])
    const { setId } = useContext(appContext)
    const [orden1, setOrden1] = useState('asc')
    const [orden2, setOrden2] = useState('asc')
    const [orden3, setOrden3] = useState('asc')

    let history = useHistory()

    useEffect(() => {
        axios.get('/list').then(datas => {
            setDatoFila(datas.data)
        })
    }, [])

    const verDetalle = (e) => {
        setId(e.target.id)
        history.push('/detail')

    }

    const ordenacionProducto = async (e) => {
        let btn = e.target.value
        switch (btn) {
            case 'nombre':
                if (orden1 === 'asc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn}`)
                    setDatoFila(resp.data)
                    setOrden1('desc')
                }
                if (orden1 === 'desc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn} ${orden1}`)
                    setDatoFila(resp.data)
                    setOrden1('asc')
                }
                break;
            case 'precio':
                if (orden2 === 'asc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn}`)
                    setDatoFila(resp.data)
                    setOrden2('desc')
                }
                if (orden2 === 'desc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn} ${orden2}`)
                    setDatoFila(resp.data)
                    setOrden2('asc')
                }

                break;
            case 'valoracion':
                if (orden3 === 'asc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn}`)
                    setDatoFila(resp.data)
                    setOrden3('desc')
                }
                if (orden3 === 'desc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn} ${orden3}`)
                    setDatoFila(resp.data)
                    setOrden3('asc')
                }

                break;

        }
    }

    const paintTable = () => {
        return (<Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <button value='nombre' onClick={ordenacionProducto}> Producto {orden1}</button>
                    </TableCell>
                    <TableCell>
                        <button value='precio' onClick={ordenacionProducto}>precio {orden2}</button>
                    </TableCell>
                    <TableCell>
                        <button value='valoracion' onClick={ordenacionProducto}> Valoracion {orden3}</button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {datoFila.map((fila, i) => (
                    <TableRow key={i}  >
                        <TableCell id={fila.productoID} onClick={verDetalle}>{fila.nombre}</TableCell>
                        <TableCell>{fila.precio}</TableCell>
                        {/* <TableCell>{fila.valoracion}</TableCell> */}
                        <TableCell>
                            <Box component="fieldset" mb={0} borderColor="transparent">
                                <Rating name="read-only" value={fila.valoracion} precision={0.5} readOnly />
                            </Box>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>)

    }
    return (
        <div>
            <h3>Lista de productos</h3>
            {paintTable()}

        </div>
    )
}

export default Lista
