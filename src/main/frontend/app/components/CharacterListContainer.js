import React, { useState, useEffect } from "react"
import CharacterListPage from "./CharacterListPage"

const CharacterListContainer = (props) => {
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

  const characterList = characters.map((character) => {
    return <CharacterListPage character={character} key={character.id} />
  })

  return <div>{characterList}</div>
}

export default CharacterListContainer
