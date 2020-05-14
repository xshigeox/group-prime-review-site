import React, { useState } from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"
import Slider from "@material-ui/core/Slider"
import TextField from "@material-ui/core/TextField"

const EditReviewForm = (props) => {
  const [editedReview, setEditedReview] = useState(props.review)

  const [errors, setErrors] = useState({})

  const isValidForSubmission = () => {
    let submitErrors = {}
    if (editedReview["rating"] === "") {
      submitErrors = {
        ...submitErrors,
        ["rating"]: "is blank",
      }
    }

    if (editedReview["review"].trim() === "") {
      submitErrors = {
        ...submitErrors,
        ["review"]: "is blank",
      }
    }

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formPayLoad = {
      id: props.review.id,
      rating: editedReview.rating,
      review: editedReview.review,
      marvelCharacter: props.character,
      timestamp: props.review.timestamp,
    }

    if (isValidForSubmission()) {
      fetch(`/api/v1/edit_review/${props.review.id}`, {
        credentials: "same-origin",
        method: "PUT",
        body: JSON.stringify(formPayLoad),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            props.edited()
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
            throw new Error(errorMessage)
          }
        })
        .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const handleInputChange = (event) => {
    setEditedReview({
      ...editedReview,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  const handleChange = (event, value) => {
    setEditedReview({
      ...editedReview,
      [event.currentTarget.id]: value,
    })
  }

  if (props.formReveal) {
    return (
      <div className="form">
        <form
          autoComplete="off"
          id="newReviewForm"
          className="callout form-format"
          onSubmit={handleSubmit}
        >
          <h4>Edit Review</h4>
          <ErrorList errors={errors} />

          <div className="form">
            <label htmlFor="rating">Rating: </label>
            <Slider
              defaultValue={editedReview.rating}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
              id="rating"
              name="rating"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>

          <div className="form-inputs">
            <TextField
              id="review"
              name="review"
              label="Review"
              color="primary"
              onChange={handleInputChange}
              defaultValue={editedReview.review}
              fullWidth
              multiline
              row={4}
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

export default EditReviewForm
