import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Link, Redirect, Route } from "react-router-dom"
import CharacterListContainer from "./components/CharacterListContainer"
import CharacterShowContainer from "./components/CharacterShowContainer"
import NewCharacterForm from "./components/NewCharacterForm"

const App = (props) => {
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchFound, setSearchFound] = useState(false)

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

  const handleInputChange = (event) => {
    setSearchTerm(event.currentTarget.value)
  }

  let redirect

  const onSearch = (event) => {
    event.preventDefault()

    for (let i = 0; i < characters.length; i++) {
      if (
        characters[i]["name"].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        console.log(characters[i]["id"])
        redirect = <Redirect push to={`/characters/${characters[i]["id"]}`} />
        setSearchFound(true)
      }
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
                <li>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                  ></input>
                </li>

                <button
                  type="button"
                  className="button hollow top-bar-responsive-button"
                  onClick={onSearch}
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
          {redirect}
          <Redirect exact path="/" to="/characters" />
          <Route exact path="/characters" component={CharacterListContainer} />
          <Route
            exact
            path="/characters/:id"
            component={CharacterShowContainer}
          />
          <Route exact path="/new" component={NewCharacterForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
