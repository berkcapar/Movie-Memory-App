import React from "react"
import {useSelector } from "react-redux"
import SearchArea from "./components/SearchArea"
import WelcomePage from "./components/WelcomePage"
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom"
import { getLoggedInfoFromState } from "./redux/selectors"
import Collection from "./components/Collection"

// https://reactrouter.com/web/example/auth-workflow
function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector(getLoggedInfoFromState)
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

const Routes = () => {
  const isLoggedIn = useSelector(getLoggedInfoFromState)

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/search">Search Movie!</Link>
          <Link to="/mycollection">My Collection</Link>
        </div>
      ) : null}

      <Switch>
        <Redirect exact path="/" to="/search" />

        <Route path="/login" exact>
          <WelcomePage />
        </Route>

        <PrivateRoute path="/search">
          <SearchArea />
        </PrivateRoute>

        <PrivateRoute path="/mycollection">
         <Collection/>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
