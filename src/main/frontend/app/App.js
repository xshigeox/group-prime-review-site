import React from "react"
import { BrowserRouter, Switch, Link, Redirect, Route } from "react-router-dom"
import CharacterListContainer from "./components/CharacterListContainer"
import CharacterShowContainer from "./components/CharacterShowContainer"
import NewCharacterForm from "./components/NewCharacterForm"
import NewReviewForm from "./components/NewReviewForm"

const App = (props) => {
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
                  <Link to="/">
                    <button
                      type="button"
                      className="button hollow topbar-responsive-button"
                    >
                      Characters
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="botton">
        <Switch>
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
