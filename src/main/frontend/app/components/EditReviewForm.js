import React, { useState } from "react"
import ErrorList from "./ErrorList"

const EditReviewForm = (props) => {
  const [editedReview, setEditedReview] = useState(props.review)

  const [errors, setErrors] = useState({})

  const attributeValues = [1, 2, 3, 4, 5]
  const attributeOptions = attributeValues.map((value) => {
    return (
      <option key={value} value={value}>
        {value}
      </option>
    )
  })

  const isValidForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["rating", "review"]

    requiredFields.forEach((field) => {
      if (editedReview[field].trim() === "") {
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

  if (props.formReveal) {
    return (
      <div>
        <form
          autoComplete="off"
          id="newReviewForm"
          className="callout form-format"
          onSubmit={handleSubmit}
        >
          <h4>Review Marvel Character</h4>
          <ErrorList errors={errors} />

          <div>
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              name="rating"
              onChange={handleInputChange}
              value={editedReview.rating}
            >
              <option value="" />
              {attributeOptions}
            </select>
          </div>

          <div>
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              name="review"
              onChange={handleInputChange}
              value={editedReview.review}
            ></textarea>
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
