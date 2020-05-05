import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"
import MarvelCharacterShowContainer from "./components/MarvelCharacterShowContainer"

const App = (props) => {
  return <MarvelCharacterShowContainer />
}

ReactDom.render(<App />, document.getElementById("app"))
