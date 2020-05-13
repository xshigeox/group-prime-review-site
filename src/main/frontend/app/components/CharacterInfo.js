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
import EditCharacterForm from "./CharacterEditForm"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"

const CharacterInfo = (props) => {
  const [formReveal, setFormReveal] = useState(false)
  const [update, setUpdate] = useState(false)
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [characterEdit, setCharacterEdit] = useState(false)
  const [editReveal, setEditReveal] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [characterUpdated, setCharacterUpdated] = useState(false)

  const {
    id,
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

  const updateCharacter = () => {
    setEditReveal(false)
    setCharacterUpdated(true)
    props.update()
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

  let answer = false

  const cancel = () => {
    handleClose()
  }

  const confirmDelete = () => {
    answer = true
    if (answer) {
      fetch(`/api/v1/characters/delete/${id}`, {
        method: "DELETE",
        body: JSON.stringify(props.character),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            props.update()
            handleClose()
            window.location.href = "/"
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
            throw new Error(errorMessage)
          }
        })
        .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const characterDelete = () => {
    setConfirm(true)
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

  const handleCharacterEdit = () => {
    setCharacterEdit(true)
  }

  const editCharacter = () => {
    setEditReveal(true)
    handleClose()
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
    setSubmitted(false)
    setDeleted(false)
    setCharacterEdit(false)
    setConfirm(false)
    setCharacterUpdated(false)
  }

  return (
    <div>
      <div className="delete-button" onClick={handleCharacterEdit}>
        <i className="fas fa-skull fa-lg"></i>
      </div>

      <div>
        <EditCharacterForm
          formReveal={editReveal}
          character={props.character}
          update={updateCharacter}
        />
      </div>

      <div className="portfolio-resume row">
        <div className="large-4 columns">
          <div className="portfolio-resume-wrapper">
            <img
              className="portfolio-resume-headshot"
              src={imgUrl}
              alt={name}
            />
            <h3 className="portfolio-resume-header">
              {name} ({alias})
            </h3>
          </div>
        </div>

        <div className="large-4 columns">
          <div className="portfolio-resume-wrapper-recharts">
            <h3 className="portfolio-resume-header">Stats</h3>
            <RadarChart
              outerRadius={90}
              width={400}
              height={250}
              data={props.data}
            >
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
        <Dialog
          open={confirm}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Character"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <span>
                <i className="fas fa-skull fa-2x"></i>Are you sure you want to
                delete this character?
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={cancel}>
              No
            </Button>
            <Button color="primary" onClick={confirmDelete}>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog
          open={characterEdit}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <i className="fas fa-skull fa-lg"></i>
            {" Character options"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              What would you like to do with this character?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={characterDelete}>
              Delete
            </Button>
            <Button color="primary" onClick={editCharacter}>
              Edit
            </Button>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="success">
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Review Edited!"
          action={
            <Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Fragment>
          }
        />
      </div>

      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={submitted}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Review Submitted!"
          action={
            <Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Fragment>
          }
        />
      </div>

      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={deleted}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Review deleted!"
          action={
            <Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Fragment>
          }
        />
      </div>

      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={characterUpdated}
          autoHideDuration={3000}
          onClose={handleClose}
          message={"Character Updated!"}
          action={
            <Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Fragment>
          }
        />
      </div>
    </div>
  )
}

export default CharacterInfo
