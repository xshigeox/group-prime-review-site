import React, { useState, useEffect } from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"

const CharacterEditForm = (props) => {
  const [editedCharacter, setEditedCharacter] = useState({})
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setEditedCharacter(props.character)
  }, [props])

  const attributeValues = [1, 2, 3, 4, 5, 6, 7]
  const attributeOptions = attributeValues.map((value) => {
    return (
      <option key={value} value={value}>
        {value}
      </option>
    )
  })

  const genderList = ["male", "female", "non-binary"]
  const genderValues = genderList.map((gender) => {
    return (
      <option key={gender} value={gender}>
        {_.startCase(gender)}
      </option>
    )
  })

  const isValidForSubmission = () => {
    let submitErrors = {}
    const requiredFields = [
      "name",
      "bio",
      "durability",
      "energy",
      "fightingSkills",
      "intelligence",
      "speed",
      "strength",
      "imgUrl",
    ]

    requiredFields.forEach((field) => {
      if (editedCharacter[field] === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (editedCharacter.alias === "") {
      editedCharacter["alias"] = "Unknown"
    }

    if (isValidForSubmission()) {
      fetch(`/api/v1/edit_character/${props.character.id}`, {
        credentials: "same-origin",
        method: "PUT",
        body: JSON.stringify(editedCharacter),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            setSubmitted(true)
            props.update()
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
            throw new Error(errorMessage)
          }
        })
        .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const handleInputChange = (event) => {
    setEditedCharacter({
      ...editedCharacter,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  if (props.formReveal) {
    return (
      <div className="form">
        <form
          autoComplete="off"
          id="newCharacterForm"
          className="callout form-format"
          onSubmit={handleSubmit}
        >
          <h1>
            Edit {props.character.name} ({props.character.alias})
          </h1>
          <ErrorList errors={errors} />

          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedCharacter.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="alias">Alias: </label>
            <input
              type="text"
              id="alias"
              name="alias"
              value={editedCharacter.alias}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio: </label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={editedCharacter.bio}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="durability">Durability: </label>
            <select
              id="durability"
              name="durability"
              onChange={handleInputChange}
              value={editedCharacter.durability}
            >
              <option value="" />
              {attributeOptions}
            </select>
          </div>

          <div>
            <label htmlFor="energy">Energy: </label>
            <select
              id="energy"
              name="energy"
              onChange={handleInputChange}
              value={editedCharacter.energy}
            >
              <option value="" />
              {attributeOptions}
            </select>
          </div>

          <div>
            <label htmlFor="fightingSkills">Fighting Skills: </label>
            <select
              id="fightingSkills"
              name="fightingSkills"
              onChange={handleInputChange}
              value={editedCharacter.fightingSkills}
            >
              <option value="" />
              {attributeOptions}
            </select>
          </div>

          <div>
            <label htmlFor="intelligence">Intelligence: </label>
            <select
              id="intelligence"
              name="intelligence"
              onChange={handleInputChange}
              value={editedCharacter.intelligence}
            >
              <option value="" />
              {attributeOptions}
            </select>
          </div>

          <div>
            <label htmlFor="speed">Speed: </label>
            <select
              id="speed"
              name="speed"
              onChange={handleInputChange}
              value={editedCharacter.speed}
            >
              <option value="" />
              {attributeOptions}
            </select>
          </div>

          <div>
            <label htmlFor="strength">Strength: </label>
            <select
              id="strength"
              name="strength"
              onChange={handleInputChange}
              value={editedCharacter.strength}
            >
              <option value="" />
              {attributeOptions}
            </select>
          </div>

          <div>
            <label htmlFor="height">Height (Feet & Inches): </label>
            <input
              type="number"
              step="0.01"
              id="height"
              name="height"
              onChange={handleInputChange}
              value={editedCharacter.height}
            />
          </div>

          <div>
            <label htmlFor="weight">Weight (lbs): </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={editedCharacter.weight}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="gender">Gender: </label>
            <select
              id="gender"
              name="gender"
              onChange={handleInputChange}
              value={editedCharacter.gender}
            >
              <option value="" />
              {genderValues}
            </select>
          </div>

          <div>
            <label htmlFor="eyeColor">Eye Color: </label>
            <input
              type="text"
              id="eyeColor"
              name="eyeColor"
              onChange={handleInputChange}
              value={editedCharacter.eyeColor}
            />
          </div>

          <div>
            <label htmlFor="hairColor">Hair Color: </label>
            <input
              type="text"
              id="hairColor"
              name="hairColor"
              onChange={handleInputChange}
              value={editedCharacter.hairColor}
            />
          </div>

          <div>
            <label htmlFor="imgUrl">Image Url: </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              onChange={handleInputChange}
              value={editedCharacter.imgUrl}
            />
          </div>

          <input
            type="submit"
            className="button hollow topbar-responsive-button"
            value="submit"
          />
        </form>
      </div>
    )
  } else {
    return ""
  }
}

export default CharacterEditForm
