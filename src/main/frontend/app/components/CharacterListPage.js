import React from "react"
import { Link } from "react-router-dom"

const CharacterListPage = (props) => {
  const { imgUrl, name, id } = props.character

  return (
      <div className="small-3 large-4 columns text-center">
        {/*<div className="list-container">*/}
          <div className="show">
            <Link to={`/characters/${id}`}>
            <img className="size" src={imgUrl} alt={name} height="210" width="191" />
            <br/>
            <span className="hover">{name}</span>
            <p className="background">{name}</p>
            </Link>
          </div>
      {/*</div>*/}
    </div>
  )
}

export default CharacterListPage
