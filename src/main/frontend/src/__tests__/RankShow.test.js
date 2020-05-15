import React from "react"
import { BrowserRouter, Link } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import RankShow from "../../app/components/RankShow"

describe("rank show page", () => {
  let wrapper

  const character = {
    id: 1,
    name: "Bruce Wayne",
    alias: "Batman",
    vote: 3,
    imgUrl: "www.batman.com",
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <RankShow character={character} />
      </BrowserRouter>
    )
  })

  it("should contain character name from props", () => {
    expect(wrapper.text().includes("Bruce Wayne")).toBe(true)
  })

  it("should contain the character alias from props", () => {
    expect(wrapper.text().includes("Batman")).toBe(true)
  })

  it("should contain the character vote count from props", () => {
    expect(wrapper.text().includes("3")).toBe(true)
  })

  it("should contain a link to the character show page with id from props", () => {
    expect(wrapper.find("Link").at(0).props()["to"]).toEqual("/characters/1")
  })

  it("should contain an image with url from props", () => {
    expect(wrapper.find("img").props()["src"]).toEqual("www.batman.com")
  })
})
