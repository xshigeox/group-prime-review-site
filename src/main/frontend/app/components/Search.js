import React, { Fragment, useState, useEffect } from "react"

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [characters, setCharacters] = useState([])

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

  const onSearch = (event) => {
    event.preventDefault()
    for (let i = 0; i < characters.length; i++) {
      if (
        characters[i]["name"].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        props.search(`/characters/${characters[i]["id"]}`)
      }
    }
  }

  return (
    <form onSubmit={onSearch}>
      <li>
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        ></input>
      </li>

      <button type="submit" className="button hollow top-bar-responsive-button">
        Search
      </button>
    </form>
  )
}

export default Search
