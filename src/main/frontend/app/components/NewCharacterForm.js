import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import ErrorList from "./ErrorList"
import _ from "lodash"

const NewCharacterForm = (props) => {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    alias: "",
    bio: "",
    durability: "",
    energy: "",
    fightingSkills: "",
    intelligence: "",
    speed: "",
    strength: "",
    height: "",
    weight: "",
    gender: "",
    eyeColor: "",
    hairColor: "",
    imgUrl: "",
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [toHome, setToHome] = useState(false)

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
      if (newCharacter[field].trim() === "") {
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

    if (newCharacter.alias === "") {
      newCharacter["alias"] = "Unknown"
    }

    if (isValidForSubmission()) {
      fetch("/api/v1/new", {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(newCharacter),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            setSubmitted(true)
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
            throw new Error(errorMessage)
          }
        })
        .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const handleInputChange = (event) => {
    setNewCharacter({
      ...newCharacter,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  if (!submitted) {
    return (
      <div className="form">
        <form
          autoComplete="off"
          id="newCharacterForm"
          className="callout form-format"
          onSubmit={handleSubmit}
        >
          <h1>Add a new Character</h1>
          <ErrorList errors={errors} />

          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newCharacter.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="alias">Alias: </label>
            <input
              type="text"
              id="alias"
              name="alias"
              value={newCharacter.alias}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio: </label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={newCharacter.bio}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="durability">Durability: </label>
            <select
              id="durability"
              name="durability"
              onChange={handleInputChange}
              value={newCharacter.durability}
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
              value={newCharacter.energy}
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
              value={newCharacter.fightingSkills}
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
              value={newCharacter.intelligence}
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
              value={newCharacter.speed}
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
              value={newCharacter.strength}
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
              value={newCharacter.height}
            />
          </div>

          <div>
            <label htmlFor="weight">Weight (lbs): </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={newCharacter.weight}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="gender">Gender: </label>
            <select
              id="gender"
              name="gender"
              onChange={handleInputChange}
              value={newCharacter.gender}
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
              value={newCharacter.eyeColor}
            />
          </div>

          <div>
            <label htmlFor="hairColor">Hair Color: </label>
            <input
              type="text"
              id="hairColor"
              name="hairColor"
              onChange={handleInputChange}
              value={newCharacter.hairColor}
            />
          </div>

          <div>
            <label htmlFor="imgUrl">Image Url: </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              onChange={handleInputChange}
              value={newCharacter.imgUrl}
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
    return (
      <div>
        <h1>Character Added!</h1>
        <div id="hidden">
          {setTimeout(() => setToHome(true), 3000)}
          {toHome ? <Redirect to="/" /> : null}
        </div>
      </div>
    )
  }
}

export default NewCharacterForm
