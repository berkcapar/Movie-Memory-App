import React from "react"
import {useSelector } from "react-redux"
import SearchArea from "./components/SearchArea"
import WelcomePage from "./components/WelcomePage"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { getLoggedInfoFromState } from "./redux/selectors"

const Routes = () => {
  const isLoggedIn = useSelector(getLoggedInfoFromState)

  if (isLoggedIn)
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/search">Search Movie!</Link>
          <Link to="/mycollection">My Collection</Link>
        </div>
        <Switch>
          <Route>
            <Route path="/search">
              <SearchArea />
            </Route>
            <Route path="/mycollection">
              <div>My Collection Component </div>
            </Route>
            <Route path="/" exact>
              <WelcomePage />
            </Route>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  else {
    return <WelcomePage />
  }
}

export default Routes
