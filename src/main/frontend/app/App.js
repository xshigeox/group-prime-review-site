import React from "react"
import { BrowserRouter, Switch, Link, Redirect, Route } from "react-router-dom"
import CharacterListContainer from "./components/CharacterListContainer"
import CharacterShowContainer from "./components/CharacterShowContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Link to={"/characters"}>
          <p>Characters</p>
        </Link>
      </div>

      <div>
        <Switch>
          <Redirect exact path="/" to="/characters" />
          <Route exact path="/characters" component={CharacterListContainer} />
          <Route
            exact
            path="/characters/:id"
            component={CharacterShowContainer}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
