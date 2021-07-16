import React, { useContext, useState, useEffect } from 'react'
import { appContext } from '../../context/appContext'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import axios from 'axios'

function Detail() {
    const [detail, setDetail] = useState([])
    const { id } = useContext(appContext)

    useEffect(async () => {
        console.log(`id`, id)
        let resp = await axios.get(`/detail/${id}`)
        setDetail(resp.data)
    }, [])

    return (
        <div>
            <h3>Detalle del producto</h3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Valoracion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {detail.map((fila, i) => (
                        <TableRow key={i}  >
                            <TableCell id={fila.productoID}>{fila.nombre}</TableCell>
                            <TableCell>{fila.precio}</TableCell>
                            <TableCell>
                                <Box component="fieldset" mb={0} borderColor="transparent">
                                    <Rating name="read-only" value={fila.valoracion} precision={0.5} readOnly />
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <h3>Datos de la empresa</h3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>CIF</TableCell>
                        <TableCell>Empresa</TableCell>
                        <TableCell>Direccion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {detail.map((fila, i) => (
                        <TableRow key={i}  >
                            <TableCell>{fila.cif}</TableCell>
                            <TableCell>{fila.empresa}</TableCell>
                            <TableCell>{fila.direccion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    )
}

export default Detail
