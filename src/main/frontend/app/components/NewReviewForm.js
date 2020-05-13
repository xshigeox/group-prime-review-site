import React, { useState } from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"

const NewReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    rating: "",
    review: "",
  })

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
      marvelCharacter: props.character,
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

  if (props.formReveal) {
    return (
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
            value={newReview.rating}
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
            value={newReview.review}
          ></textarea>
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
