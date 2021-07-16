import React, { useEffect, useState, useContext } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { appContext } from '../../context/appContext'
import axios from 'axios'
function Search() {
    const [data, setData] = useState([])
    const [registro, setregistro] = useState(false)
    const { busqueda } = useContext(appContext)


    useEffect(() => {

        axios.get(`/${busqueda.tipo}/${busqueda.articulo}`).then(resp=>setData(resp.data))
        data.length >0? setregistro(true):setregistro(false)
    }, [])
    useEffect(() => {

        axios.get(`/${busqueda.tipo}/${busqueda.articulo}`).then(resp=>setData(resp.data))
        
        data.length >0? setregistro(true):setregistro(false)
       

    }, [busqueda])

    const paintTableSearch = () => {
        if (busqueda.tipo === 'producto') {
            return (<Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <button> Producto</button>
                        </TableCell>
                        <TableCell>
                            <button>precio</button>
                        </TableCell>
                        <TableCell>
                            <button> Valoracion</button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((fila, i) => (
                        <TableRow key={i}  >
                            <TableCell id={fila.productoID}>{fila.nombre}</TableCell>
                            <TableCell>{fila.precio}</TableCell>
                            {/* <TableCell>{fila.valoracion}</TableCell> */}
                            <TableCell>
                                <Box component="fieldset" mb={0} borderColor="transparent">
                                    
                                    <Rating
                                        name="customized-empty"
                                        defaultValue={fila.valoracion}
                                        precision={0.1}
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />
                                </Box>
                            </TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>)
        } else {
            return (<Table>
                <TableHead>
                    <TableRow>
                        <TableCell>CIF</TableCell>
                        <TableCell>Empresa</TableCell>
                        <TableCell>Direccion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((fila, i) => (
                        <TableRow key={i}>
                            <TableCell >{fila.cif}</TableCell>
                            <TableCell>{fila.empresa}</TableCell>
                            <TableCell>{fila.direccion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>)
        }
    }

    return (
        <div>
            {registro ? paintTableSearch() : <p>no se encontraron resultados</p>}
        </div>
    )
}

export default Search
