import React, { useState } from "react"
import ReviewInfo from "./ReviewInfo"

const ReviewListContainer = (props) => {
  let reviews
  if (props.character.reviews) {
    reviews = props.character.reviews.map((item) => {
      let ratingIcon
      let ratingName

      if (item.rating === 1) {
        ratingIcon = (
          <span>
            <i className="far fa-star"></i>
          </span>
        )
        ratingName = "1 Star"
      } else if (item.rating === 2) {
        ratingIcon = (
          <span>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
        ratingName = "2 Stars"
      } else if (item.rating === 3) {
        ratingIcon = (
          <span>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
        ratingName = "3 Stars"
      } else if (item.rating === 4) {
        ratingIcon = (
          <span>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
        ratingName = "4 Stars"
      } else if (item.rating === 5) {
        ratingIcon = (
          <span>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
        ratingName = "5 Stars"
      }

      const deleteReview = (event) => {
        event.preventDefault()

        let answer = prompt(
          "Are you sure you want to delete this review?\nEnter 'Yes' to delete or 'No' to cancel"
        )
        if (answer.toLocaleLowerCase() === "yes") {
          let id = item.id
          fetch(`/api/v1/delete/${id}`, {
            method: "DELETE",
            body: JSON.stringify(item),
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => {
              if (response.ok) {
                props.deleted()
              } else {
                let errorMessage = `${response.status} (${response.statusText})`
                throw new Error(errorMessage)
              }
            })
            .catch((error) => console.error(`Error in fetch: ${error.message}`))
        }
      }

      return (
        <ReviewInfo
          key={item.id}
          review={item}
          character={props.character}
          ratingIcon={ratingIcon}
          ratingName={ratingName}
          delete={deleteReview}
          edited={props.edited}
        />
      )
    })
  }

  return <div>{reviews}</div>
}

export default ReviewListContainer
