import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import ErrorList from "./ErrorList"
import _ from "lodash"


const NewReviewForm = (props) => {
    const [newReview, setNewReview] = useState({
        rating:"",
        review:"",
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [reRenderShow, setToShow] = useState(false)

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
      const requiredFields = [
        "rating",
        "review"
      ]

      requiredFields.forEach((field) => {
        if(newReview[field].trim() === "") {
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
      event.prevent.default()

      if(isValidForSubmission()) {
        fetch("/api/v1/new_review", {
          credentials: "same-origin",
          method: "POST",
          body: JSON.stringify(newReview),
          headers: { "Content-Type": "application/json"},
        })
        .then((response) => {
          if(response.ok) {
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
      setNewReview({
        ...newReview,
        [event.currentTarget.id]: event.currentTarget.value
      })
    }

    if(!submitted) {
      return(
        <form
        autoComplete="off"
        id="newReviewForm"
        className="callout form-format"
        onSubmit={handleSubmit}
        >
          <h4>Review Marvel Character</h4>
          <ErrorList errors={errors}/>

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
            >
            </textarea>
          </div>

          <input
          type="submit"
          className="button hollow topbar-responsive-button"
          value="submit"
          />
        </form>
      )
    } else {
      return (
        <div>
        <h1>Review Added!</h1>
        <div id="hidden">
          {setTimeout(() => setToShow(true), 3000)}
          {reRenderShow ? <Redirect to="/characters/:id" /> : null}
        </div>
      </div>
      )
    }
}
export default NewReviewForm