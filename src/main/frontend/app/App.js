import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Link, Redirect, Route } from "react-router-dom"
import { navigate } from "@reach/router"
import CharacterListContainer from "./components/CharacterListContainer"
import CharacterShowContainer from "./components/CharacterShowContainer"
import NewCharacterForm from "./components/NewCharacterForm"
import NewReviewForm from "./components/NewReviewForm"
import Search from "./components/Search"

const App = (props) => {
  const [found, setFound] = useState(false)
  const [url, setUrl] = useState()

  const search = (result) => {
    if (result !== "notFound") {
      setUrl(result)
      setFound(true)
    } else {
      setFound(false)
    }
  }

  return (
    <BrowserRouter>
      <div className="top-links">
        <nav className="top-bar topbar-responsive">
          <div className="top-bar-title">
            <Link to="/" className="topbar-responsive-logo">
              <strong>Marvel Reviews</strong>
            </Link>
          </div>
          <div id="topbar-responsive" className="topbar-responsive-links">
            <div className="top-bar-right">
              <ul className="menu simple vertical medium-horizontal">
                <li>
                  <Link to="/new">
                    <button
                      type="button"
                      className="button hollow topbar-responsive-button"
                    >
                      New
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/characters">
                    <button
                      type="button"
                      className="button hollow topbar-responsive-button"
                    >
                      Characters
                    </button>
                  </Link>
                </li>
                <Search search={search} />
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="botton">
        <Switch>
          {found ? <Redirect from="/" to={url} /> : null}
          <Redirect exact path="/" to="/characters" />
          <Route exact path="/characters" component={CharacterListContainer} />

          <Route
            exact
            path="/characters/:id"
            component={CharacterShowContainer}
          />
          <Route exact path="/new" component={NewCharacterForm} />
          <Route exact path="/new_review" component={NewReviewForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
