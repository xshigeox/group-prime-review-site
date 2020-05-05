import React, { useEffect, useState } from "react"
import CharacterInfo from "./CharacterInfo"

const MarvelCharacterShowContainer = (props) => {
  const [marvelCharacters, setMarvelCharacters] = useState([])
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
        setMarvelCharacters(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const listOfCharacters = marvelCharacters.map((character) => {
    return <CharacterInfo key={character.id} character={character} />
  })

  return <div>{listOfCharacters}</div>
}

export default MarvelCharacterShowContainer
