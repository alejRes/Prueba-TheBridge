import React, { useContext, useState, useEffect } from 'react'
import { appContext } from '../../context/appContext'

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
            {detail.map(detail=> <p>{detail.nombre}</p> )}
        </div>
    )
}

export default Detail
