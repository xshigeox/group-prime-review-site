import React, { useState, Fragment } from "react"
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
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

const CharacterInfo = (props) => {
  const [formReveal, setFormReveal] = useState(false)
  const [update, setUpdate] = useState(false)
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [deleted, setDeleted] = useState(false)
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

  const submittedAlert = () => {
    props.update()
    handleSubmittedAlert()
  }

  const editedAlert = () => {
    props.update()
    handleEditedAlert()
  }

  const deletedAlert = () => {
    props.update()
    handleDeletedAlert()
  }

  const handleEditedAlert = () => {
    setOpen(true)
  }

  const handleSubmittedAlert = () => {
    setSubmitted(true)
  }

  const handleDeletedAlert = () => {
    setDeleted(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
    setSubmitted(false)
    setDeleted(false)
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
          updateReviews={updateReviews}
          submitted={submittedAlert}
        />
      </div>
      <div>
        <ReviewListContainer
          character={props.character}
          updateReviews={updateReviews}
          edited={editedAlert}
          deleted={deletedAlert}
        />
      </div>

      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Review Edited!"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>

      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={submitted}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Review Submitted!"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>

      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={deleted}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Review deleted!"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </div>
  )
}

export default CharacterInfo
