import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import ErrorList from "./ErrorList"
import _ from "lodash"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"

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

  const useStyles = makeStyles({
    root: {
      width: 300,
    },
  })

  const classes = useStyles()

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
    const requiredFields = ["name", "bio", "imgUrl"]
    const requiredAttributes = [
      "durability",
      "energy",
      "fightingSkills",
      "intelligence",
      "speed",
      "strength",
    ]

    requiredFields.forEach((field) => {
      if (newCharacter[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        }
      }
    })

    requiredAttributes.forEach((attribute) => {
      if (newCharacter[attribute] === "") {
        submitErrors = {
          ...submitErrors,
          [attribute]: "is blank",
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

  const handleChange = (event, value) => {
    setNewCharacter({
      ...newCharacter,
      [event.currentTarget.id]: value,
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

          <div className="form-inputs">
            <TextField
              id="name"
              name="name"
              label="Name"
              color="primary"
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <div className="form-inputs">
            <TextField
              id="alias"
              name="alias"
              label="Alias"
              color="primary"
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <div className="form">
            <TextField
              id="bio"
              name="bio"
              label="Bio"
              color="primary"
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <div className="form">
            <label htmlFor="durability">Durability: </label>
            <Slider
              defaultValue={2}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
              id="durability"
              name="durability"
              step={1}
              marks
              min={1}
              max={7}
            />
          </div>

          <div className="form">
            <label htmlFor="energy">Energy: </label>
            <Slider
              defaultValue={2}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
              id="energy"
              name="energy"
              step={1}
              marks
              min={1}
              max={7}
            />
          </div>

          <div className="form">
            <label htmlFor="fightingSkills">Fighting Skills: </label>
            <Slider
              defaultValue={2}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
              id="fightingSkills"
              name="fightingSkills"
              step={1}
              marks
              min={1}
              max={7}
            />
          </div>

          <div className="form">
            <label htmlFor="intelligence">Intelligence: </label>
            <Slider
              defaultValue={2}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
              id="intelligence"
              name="intelligence"
              step={1}
              marks
              min={1}
              max={7}
            />
          </div>

          <div className="form">
            <label htmlFor="speed">Speed: </label>
            <Slider
              defaultValue={2}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
              id="speed"
              name="speed"
              step={1}
              marks
              min={1}
              max={7}
            />
          </div>

          <div className="form">
            <label htmlFor="strength">Strength: </label>
            <Slider
              defaultValue={2}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
              id="strength"
              name="strength"
              step={1}
              marks
              min={1}
              max={7}
            />
          </div>

          <div className="form">
            <TextField
              id="height"
              name="height"
              label="Height (Feet & Inches)"
              color="primary"
              type="number"
              inputProps={{ step: 0.01 }}
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <div className="form">
            <TextField
              id="weight"
              name="weight"
              label="Weight (lbs)"
              color="primary"
              type="number"
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <div className="form">
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <Select
                native
                value={newCharacter.gender}
                onChange={handleInputChange}
                inputProps={{
                  name: "age",
                  id: "gender",
                }}
                fullWidth
              >
                <option aria-label="None" value="" />
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"non-binary"}>Non-Binary</option>
              </Select>
            </FormControl>
          </div>

          <div className="form">
            <TextField
              id="eyeColor"
              name="eyeColor"
              label="Eye Color"
              color="primary"
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <div className="form">
            <TextField
              id="hairColor"
              name="hairColor"
              label="Hair Color"
              color="primary"
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <div className="form">
            <TextField
              id="imgUrl"
              name="imgUrl"
              label="Image Url"
              color="primary"
              onChange={handleInputChange}
              fullWidth
            />
          </div>

          <input
            type="submit"
            className="button hollow topbar-responsive-button"
            value="submit"
            id="form-submit-button"
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
