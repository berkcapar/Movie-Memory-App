import React from 'react'
import SearchArea from './components/SearchArea'
import WelcomePage from './components/WelcomePage'
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom'

const Routes = () => ( 
    <BrowserRouter>
    <div className="navigation">  
    <Link to = "/">Home</Link>
    <Link to = "/search">Search Movie!</Link>
    <Link to = "/mycollection">My Collection</Link>
    </div>
    <Switch>
        <Route>
            <Route path="/search">
                <SearchArea/>
            </Route>
            <Route path = "/mycollection">
              <div>My Collection Component </div> 
        </Route>
        <Route path = "/" exact>
            <WelcomePage/>
        </Route>
        </Route>
    </Switch>   
    </BrowserRouter>
)

export default Routes