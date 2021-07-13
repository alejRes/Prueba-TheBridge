import React from 'react'

function Header() {
    return (
        <div>
            <input type="radio" name="tipo" id="producto" value='producto'/>
            <label htmlFor="tipo">producto</label>
            <input type="radio" name="tipo" id="empresa" value='empresa'/>
            <label htmlFor="tipo">empresa</label>

        </div>
    )
}

export default Header
