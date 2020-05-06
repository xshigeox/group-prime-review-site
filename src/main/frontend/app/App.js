import React from "react"
import { BrowserRouter, Switch, Link, Redirect, Route } from "react-router-dom"
import CharacterListContainer from "./components/CharacterListContainer"
import CharacterShowContainer from "./components/CharacterShowContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      {/* <div className="top-links">
        <nav className="top-bar topbar-responsive">
          <div className="top-bar-title">
            <Link to={"/"} id="topbar-site-title">
              <strong>Marvel Characters</strong>
            </Link>
          </div>

          <div it="topbar-responsive" className="topbar-responsive-links">
            <div className="top-bar-right">
              <ul className="menu simple vertical medium-horizontal">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/characters">Characters</Link>
                </li>

                <li>
                  <Link to="/">Add Character</Link>
                </li>

                <li>
                  <input type="search" placeholder="Search"></input>
                </li>
                <li>
                  <button type="button" class="button">
                    Search
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}

      <div className="top-links">
        <nav class="top-bar topbar-responsive">
          <div class="top-bar-title">
            <Link to="/" class="topbar-responsive-logo">
              <strong>Marvel Reviews</strong>
            </Link>
          </div>
          <div id="topbar-responsive" class="topbar-responsive-links">
            <div class="top-bar-right">
              <ul class="menu simple vertical medium-horizontal">
                <li>
                  <Link to="/">
                    <button
                      type="button"
                      class="button hollow topbar-responsive-button"
                    >
                      New
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/characters">
                    <button
                      type="button"
                      class="button hollow topbar-responsive-button"
                    >
                      Characters
                    </button>
                  </Link>
                </li>
                <li>
                  <input type="search" placeholder="Search"></input>
                </li>

                <button
                  type="button"
                  class="button hollow top-bar-responsive-button"
                >
                  Search
                </button>
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
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
