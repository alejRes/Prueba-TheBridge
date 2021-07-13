import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import List from '../../pages/Lista/Lista'
import Detail from '../../pages/Detail/Detail'
function Main() {
    return (
        <div>
            
                    
                
            <Switch>
                <Redirect exact from='/'to='/list'/>
                <Route path='/list' component={List}/>
                <Route path='/detail' component={Detail} />
            </Switch>
        </div>
    )
}

export default Main
