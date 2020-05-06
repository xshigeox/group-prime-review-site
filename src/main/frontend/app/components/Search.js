import React, { Fragment, useState, useEffect } from "react"

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [url, setUrl] = useState("")

  const handleInputChange = (event) => {
    setSearchTerm(event.currentTarget.value)
  }

  const onSearch = (event) => {
    event.preventDefault()

    for (let i = 0; i < props.characters.length; i++) {
      if (
        props.characters[i]["name"]
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        setUrl(`/characters/${props.characters[i]["id"]}`)
        props.search(url)
        console.log(url)
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
