import React, { useContext, useState, useEffect } from 'react'
import { appContext } from '../../context/appContext'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

import axios from 'axios'

function Detail() {
    const [detail, setDetail] = useState([])
    const{id} = useContext(appContext)

    useEffect(async () => {
        console.log(`id`, id)
        let resp = await axios.get(`/detail/${id}`)
        setDetail(resp.data)
    }, [])
    
    return (
        <div>
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
                            <TableCell>{fila.valoracion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

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
