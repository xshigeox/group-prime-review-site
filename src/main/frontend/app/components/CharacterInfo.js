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
  const [update, setUpdate] = useState(false)
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
    setFormReveal(!formReveal)
  }

  const updateReviews = () => {
    setUpdate(!update)
    setFormReveal(false)
    props.update()
  }

  return (
    <div>

      <div className="portfolio-resume row">

        <div className="large-4 columns">
          <div className="portfolio-resume-wrapper">
            <img className="portfolio-resume-headshot" src={imgUrl} alt={name}/>
            <h3 className="portfolio-resume-header">{name} ({alias})</h3>
          </div>
        </div>

        <div className="large-4 columns">
          <div className="portfolio-resume-wrapper-recharts">
            <h3 class="portfolio-resume-header">Stats</h3>
            <RadarChart outerRadius={90} width={400} height={250} data={props.data}>
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
        

        <div className="portfolio-resume-wrapper">
          <div className="portfolio-resume-spacing">  
            <p>
              Height: {feet}' {inches}"
            </p>
            <p>Weight: {weight}lbs</p>
            <p>Gender: {gender}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Hair Color: {hairColor}</p>
          </div>
        </div>
      </div>
 
        <div className="large-4 columns">
          <div className="portfolio-resume-wrapper">
          <h3 className="portfolio-resume-header">Bio</h3>
            <div className="portfolio-resume-spacing-bio">
              <p>{bio}</p>
            </div>
          </div>
        </div>

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
          updateReviews={updateReviews}
        />
      </div>

      <div>
        <ReviewListContainer
          character={props.character}
          updateReviews={updateReviews}
          />
      </div>

    </div>
  )
}

export default CharacterInfo
