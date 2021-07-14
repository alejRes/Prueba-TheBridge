import React, { useState, useEffect } from 'react'
import axios from "axios";

function Lista() {
    
    const [dataRow, setdataRow] = useState([])
    // const [row, setrow] = useState([])

    useEffect(() => {

        axios.get('/search').then(datas => {
            setdataRow(datas.data)
        })

    }, [])

    const data = dataRow

    return(
        <div>
            
        </div>
    )
}

export default Lista
