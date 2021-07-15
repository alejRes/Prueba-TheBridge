import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import List from '../../pages/Lista/Lista'
import Detail from '../../pages/Detail/Detail'
import Search from '../../pages/Search/Search'
function Main() {

    const [id, setid] = useState()

    const guardarId =(id)=>{
        setid(id)
    }
    return (
        <div>                
            <Switch>
                <Redirect exact from='/'to='/list'/>
                <Route path='/list' component={()=><List guardarID={guardarId}/>}/>
                <Route path='/detail' component={()=><Detail id={id}/>} />
                <Route path='/search' component={Search} />
            </Switch>
        </div>
    )
}

export default Main
