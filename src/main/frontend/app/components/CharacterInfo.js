import React from "react"

const CharacterInfo = (props) => {
  const {
    name,
    bio,
    durability,
    energy,
    fightingSkills,
    intelligence,
    speed,
    strength,
    height,
    weight,
    gender,
    eyeColor,
    hairColor,
    imgUrl,
  } = props.character

  const heightSplit = height.toString().split(".")

  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <img src={imgUrl} alt={name} />
      <p>
        Height: {heightSplit[0]}' {heightSplit[1]}"
      </p>
    </div>
  )
}

export default CharacterInfo
