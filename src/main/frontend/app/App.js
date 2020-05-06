import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Link, Redirect, Route } from "react-router-dom"
import { navigate } from "@reach/router"
import CharacterListContainer from "./components/CharacterListContainer"
import CharacterShowContainer from "./components/CharacterShowContainer"
import NewCharacterForm from "./components/NewCharacterForm"
import NewReviewForm from "./components/NewReviewForm"
import Search from "./components/Search"

const App = (props) => {
  const [characters, setCharacters] = useState([])
  const [found, setFound] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => {
    fetch("/api/v1/characters")
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
          throw new Error(errorMessage)
        }
      })
      .then((result) => {
        return result.json()
      })
      .then((json) => {
        setCharacters(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const search = (result) => {
    setUrl(result)
    setFound(true)
    console.log(url)
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
                <Search search={search} characters={characters} />
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
          {found ? <Redirect to={url} /> : null}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
