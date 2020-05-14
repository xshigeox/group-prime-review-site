import React, { useEffect, useState } from "react"
import RankShow from "./RankShow"

const RankingContainer = (props) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("/api/v1/rankings")
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

  let rankingList = characters.map((character) => {
    return <RankShow key={character.id} character={character} />
  })

  return <div>{rankingList}</div>
}

export default RankingContainer
