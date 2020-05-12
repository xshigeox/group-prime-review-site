import React, { useState } from "react"
import EditReviewForm from "./EditReviewForm"

const ReviewInfo = (props) => {
  const { review } = props.review
  const { name, imgUrl } = props.character
  const [editReveal, setEditReveal] = useState(false)

  let date = new Date(props.review.timestamp).toLocaleDateString()
  let time = new Date(props.review.timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  })

  const handleClick = (event) => {
    event.preventDefault()
    setEditReveal(!editReveal)
  }

  const edited = () => {
    setEditReveal(false)
    props.edited()
  }

  return (
    <div>
      <div className="travel-feature-card">
        <div className="travel-feature-card-header">
          <div className="row">
            <div className="medium-12 columns">
              <h5 className="travel-feature-card-subtitle">
                {props.ratingIcon}
              </h5>
              <div className="travel-feature-card-header-controls">
                <span>{date} - </span>
                <span>{time} </span>
                <span onClick={handleClick}>
                  <i className="fas fa-edit"></i>
                </span>
                <span onClick={props.delete}>
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="travel-feature-card-details">
          <h6 className="travel-feature-card-date-range"></h6>

          <div className="row">
            <div className="small-12 medium-9 columns travel-feature-card-content">
              <div className="row">
                <div className="small-4 medium-2 columns">
                  <img
                    className="travel-feature-card-image"
                    src={imgUrl}
                    alt={name}
                  />
                </div>
                <div className="small-8 medium-10 columns">
                  <h6 className="travel-feature-card-title">{name}</h6>
                  <p>{review}</p>
                </div>
              </div>
            </div>

            <div className="small-12 medium-3 columns travel-feature-card-price">
              <h6>{props.ratingName}</h6>
            </div>
          </div>
        </div>
      </div>
      <div>
        <EditReviewForm
          review={props.review}
          formReveal={editReveal}
          character={props.character}
          edited={edited}
        />
      </div>
    </div>
  )
}

export default ReviewInfo
