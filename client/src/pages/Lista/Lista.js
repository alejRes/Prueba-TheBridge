import React, { useState, useEffect } from 'react'
import axios from "axios";

function Lista() {
    
    const [dataRow, setdataRow] = useState([])
    // const [row, setrow] = useState([])

    useEffect(() => {
        axios.get('/list').then(datas => {
            setdataRow(datas.data)
        })
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default Lista
