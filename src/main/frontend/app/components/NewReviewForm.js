import React, { useState } from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"
import Slider from "@material-ui/core/Slider"
import TextField from "@material-ui/core/TextField"

const NewReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    rating: "",
    review: "",
  })

  const [errors, setErrors] = useState({})



  const isValidForSubmission = () => {
    let submitErrors = {}
    if (newReview["rating"] === "") {
      submitErrors = {
        ...submitErrors,
        ["rating"]: "is blank",
      }
    }

    if (newReview["review"].trim() === "") {
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
      rating: newReview.rating,
      review: newReview.review,
      hero: props.character,
    }

    if (isValidForSubmission()) {
      fetch("/api/v1/new_review", {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(formPayLoad),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            props.updateReviews()
            props.submitted()
            setNewReview({
              rating: "",
              review: "",
            })
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
            throw new Error(errorMessage)
          }
        })
        .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const handleInputChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  const handleChange = (event, value) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.id]: value,
    })
  }

  if (props.formReveal) {
    return (
      <form
        autoComplete="off"
        id="newReviewForm"
        className="callout form-format"
        onSubmit={handleSubmit}
      >
        <h4>Review {props.character.name}</h4>
        <ErrorList errors={errors} />

        <div className="form">
          <label htmlFor="rating">Rating: </label>
          <Slider
            defaultValue={2}
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
    )
  } else {
    return ""
  }
}
export default NewReviewForm
