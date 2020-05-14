import React from "react"
import { Link } from "react-router-dom"

const RankShow = (props) => {
  return (
    <div className="people-you-might-know">
      <div className="row add-people-section">
        <div className="small-12 medium-6 columns about-people">
          <div className="about-people-avatar">
            <Link to={`/characters/${props.character.id}`}>
              <img
                className="avatar-image"
                src={props.character.imgUrl}
                alt={props.character.name}
              />
            </Link>
          </div>

          <div className="about-people-author">
            <Link to={`/characters/${props.character.id}`}>
              <p className="author-name">{props.character.name}</p>
            </Link>
            <Link to={`/characters/${props.character.id}`}>
              <p className="author-location">
                <i className="fab fa-superpowers" />
                <span> </span>
                {props.character.alias}
              </p>
            </Link>
          </div>
        </div>

        <div className="small-12 medium-6 columns add-friend">
          <div className="add-friend-action"></div>
          <div style={{ color: "red" }}>
            <i className="fas fa-heart" /> {props.character.vote}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RankShow
