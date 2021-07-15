import React, { useContext, useState, useEffect } from 'react'
import { appContext } from '../../context/appContext'
import axios from 'axios'

function Detail(props) {
    const [detail, setDetail] = useState([])
    
    useEffect(() => {
         axios.get(`/detail/:${this.props.id}`).then((detail)=>setDetail(detail.data))
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Detail
