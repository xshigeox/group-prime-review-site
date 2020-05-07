import React, { useState, useEffect } from "react"
import CharacterListPage from "./CharacterListPage"


const CharacterListContainer = (props) => {
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState(false)
  const [foundCharacter, setFoundCharacter] = useState({})

  let characterList

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

  if (!searchResults) {
    characterList = characters.map((character) => {
      return <CharacterListPage character={character} key={character.id} />
    })
  } else {
    return <CharacterListPage character={foundCharacter} />
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.currentTarget.value)
  }

  const sound = new Howl({
    src: ["https://i.annihil.us/u/prod/marvel/i/am/groot/iamgroot.ogg"],
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    for (let i = 0; i < characters.length; i++) {
      if (
        characters[i]["name"].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        setFoundCharacter(characters[i])
        if (characters[i]["name"].toLowerCase().includes("groot")) {
          sound.play()
        }
        setSearchResults(true)
      }
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          ></input>
        </form>
      </div>
      <div>{characterList}</div>
    </>
  )
}

export default CharacterListContainer
