import React, { useState } from "react"
import ReviewInfo from "./ReviewInfo"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"

const ReviewListContainer = (props) => {
  const [open, setOpen] = useState(false)

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

      const handleOpen = () => {
        setOpen(true)
      }

      const handleClose = () => {
        setOpen(false)
      }

      const openDialog = () => {
        setOpen(true)
      }

      let answer = ""
      const accept = () => {
        setOpen(false)

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

      const cancel = () => {
        setOpen(false)
      }

      const deleteReview = (event) => {
        event.preventDefault()
        openDialog()
      }

      return (
        <div>
          <ReviewInfo
            key={item.id}
            review={item}
            character={props.character}
            ratingIcon={ratingIcon}
            ratingName={ratingName}
            delete={deleteReview}
            edited={props.edited}
          />

          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Delete Review"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to delete this review?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={cancel} color="primary">
                  No
                </Button>
                <Button onClick={accept} color="primary">
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )
    })
  }

  return <div>{reviews}</div>
}

export default ReviewListContainer
