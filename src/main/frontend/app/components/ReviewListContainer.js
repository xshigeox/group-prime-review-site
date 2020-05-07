import React from "react"
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

      return (
        <ReviewInfo
          key={item.id}
          review={item}
          character={props.character}
          ratingIcon={ratingIcon}
          ratingName={ratingName}
        />
      )
    })
  }

  return <div>{reviews}</div>
}

export default ReviewListContainer
