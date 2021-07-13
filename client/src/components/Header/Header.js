import React, {useState, useEffect } from 'react'


function Header() {
    
    return (
        <div>
            <input type="radio" name="tipo" id="producto" value='producto'/>
            <label htmlFor="tipo">producto</label>
            <input type="radio" name="tipo" id="empresa" value='empresa'/>
            <label htmlFor="tipo">empresa</label>
            <input type="text" name="buscador" id="buscador"  placeholder='Introduce el nombre a buscar'/>
        </div>

    )
}

export default Header
