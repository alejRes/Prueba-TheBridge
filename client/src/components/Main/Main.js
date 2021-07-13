import React from 'react'
import {Route, Switch} from 'react-router-dom'

function Main() {
    return (
        <div>
            <Switch>
                <Route path='/'></Route>
                <Route path='/detail' componet/>
            </Switch>
        </div>
    )
}

export default Main
