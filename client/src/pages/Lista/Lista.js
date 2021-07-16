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
    const [pagination, setPagination] = useState([])
    const [aux, setAux] = useState(false)
    const [Rango, setRango] = useState(10)
    const [hasta, sethasta] = useState(0)
    const [pages, setPages] = useState(1)
    const [prevPage, setPrevPage] = useState(0)
    const [nextPage, setNextPage] = useState(10)
    const { setId } = useContext(appContext)
    const [orden1, setOrden1] = useState('asc')
    const [orden2, setOrden2] = useState('asc')
    const [orden3, setOrden3] = useState('asc')

    let history = useHistory()

    const paginasTotales = () => {

        let pages = datoFila.length / Rango
        if (datoFila.length % Rango !== 0)
            sethasta(Math.trunc(pages) + 1)
        else
            sethasta(Math.trunc(pages))

    }
    useEffect(() => {
        paginasTotales()
    }, [datoFila])

    useEffect(() => {
        axios.get('/list').then(datas => {
            setDatoFila(datas.data)
            setPagination(datas.data.slice(prevPage, nextPage))
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
                    setPagination(resp.data.slice(prevPage, nextPage))
                    setOrden1('desc')
                }
                if (orden1 === 'desc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn} ${orden1}`)
                    setDatoFila(resp.data)
                    setPagination(resp.data.slice(prevPage, nextPage))
                    setOrden1('asc')
                }
                break;
            case 'precio':
                if (orden2 === 'asc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn}`)
                    setDatoFila(resp.data)
                    setPagination(resp.data.slice(prevPage, nextPage))
                    setOrden2('desc')
                }
                if (orden2 === 'desc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn} ${orden2}`)
                    setDatoFila(resp.data)
                    setPagination(resp.data.slice(prevPage, nextPage))
                    setOrden2('asc')
                }
                break;
            case 'valoracion':
                if (orden3 === 'asc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn}`)
                    setDatoFila(resp.data)
                    setPagination(resp.data.slice(prevPage, nextPage))
                    setOrden3('desc')
                }
                if (orden3 === 'desc') {
                    let resp = await axios.get(`/ordenar/?orden=${btn} ${orden3}`)
                    setDatoFila(resp.data)
                    setPagination(resp.data.slice(prevPage, nextPage))
                    setOrden3('asc')
                }

                break;

        }
    }
    const changePage = (e) => {
        if (e.target.value === 'siguiente') {
            if (pages !== hasta) {
                setPagination(datoFila.slice(prevPage + Rango, nextPage + Rango))
                setPrevPage(prevPage + Rango)
                setNextPage(nextPage + Rango)
                setPages(pages + 1)
            }

        } else {
            if (pages !== 1) {
                setPagination(datoFila.slice(prevPage - Rango, nextPage - Rango))
                setPrevPage(prevPage - Rango)
                setNextPage(nextPage - Rango)
                setPages(pages - 1)
            }
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
                {pagination.map((fila, i) => (
                    <TableRow key={i}  >
                        <TableCell id={fila.productoID} onClick={verDetalle}>{fila.nombre}</TableCell>
                        <TableCell>{fila.precio}</TableCell>
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
            <section>
                <div>
                    <button onClick={changePage} value='anterior'>Anterior</button>
                    <p>{pages} de {hasta}</p>
                    <button onClick={changePage} value='siguiente'>Siguiente</button>
                </div>
            </section>

        </div >
    )
}

export default Lista
