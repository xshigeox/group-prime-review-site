import React, { useEffect, useState } from "react"
import CharacterInfo from "./CharacterInfo"

const CharacterShowContainer = (props) => {
  const id = props.match.params.id
  const [character, setCharacter] = useState([])
  const [updateCharacter, setUpdateCharacter] = useState(false)

  useEffect(() => {
    fetch(`/api/v1/characters/${id}`)
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
        setCharacter(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [updateCharacter])

  const update = () => {
    setUpdateCharacter(!updateCharacter)
  }

  const data = [
    {
      subject: "Durability",
      A: character.durability,
      fullMark: 7,
    },
    {
      subject: "Energy",
      A: character.energy,
      fullMark: 7,
    },
    {
      subject: "Fighting Skills",
      A: character.fightingSkills,
      fullMark: 7,
    },
    {
      subject: "Intelligence",
      A: character.intelligence,
      fullMark: 7,
    },
    {
      subject: "Speed",
      A: character.speed,
      fullMark: 7,
    },
    {
      subject: "Strength",
      A: character.strength,
      fullMark: 7,
    },
  ]

  return <CharacterInfo character={character} data={data} update={update} />
}

export default CharacterShowContainer
