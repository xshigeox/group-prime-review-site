import React from "react"
import { Link } from "react-router-dom"

const CharacterListPage = (props) => {
  const { imgUrl, name, id } = props.character

  return (
    <div className="row small-up-1 medium-up-2 large-up-3 text-center">
      <Link to={`/characters/${id}`}>
        <img src={imgUrl} alt={name} height="210" width="191" />
        <p className="ow-anywhere">{name}</p>
      </Link>
    </div>
  )
}

export default CharacterListPage
