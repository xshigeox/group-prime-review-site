import React, { useState } from "react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts"
import NewReviewForm from "./NewReviewForm"
import ReviewListContainer from "./ReviewListContainer"

const CharacterInfo = (props) => {
  const [formReveal, setFormReveal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const {
    name,
    alias,
    bio,
    height,
    weight,
    gender,
    eyeColor,
    hairColor,
    imgUrl,
  } = props.character

  let feet
  let inches
  if (height) {
    const heightSplit = height.toString().split(".")
    feet = heightSplit[0]
    inches = heightSplit[1]
  }

  const handleClick = (event) => {
    event.preventDefault()
    setFormReveal(true)
  }

  const submit = () => {
    setFormReveal(false)
    props.addReview()
  }

  return (
    <div>
      <div>
        <h1>
          {name} - {alias}
        </h1>
        <p>{bio}</p>
        <img src={imgUrl} alt={name} height="210" width="191" />
      </div>

      <div>
        <p>
          Height: {feet}' {inches}"
        </p>
        <p>Weight: {weight}lbs</p>
        <p>Gender: {gender}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Hair Color: {hairColor}</p>
      </div>

      <div>
        <RadarChart outerRadius={90} width={730} height={250} data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 7]} />
          <Radar
            name={name}
            dataKey="A"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
      <div>
        <button
          type="button"
          className="button hollow topbar-responsive-button"
          onClick={handleClick}
        >
          Add Review
        </button>
      </div>
      <div>
        <NewReviewForm
          character={props.character}
          formReveal={formReveal}
          submit={submit}
        />
      </div>
      <div>
        <ReviewListContainer character={props.character} />
      </div>
    </div>
  )
}

export default CharacterInfo
