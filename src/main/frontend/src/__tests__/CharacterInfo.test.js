import React from "react"
import { BrowserRouter } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import CharacterInfo from "../../app/components/CharacterInfo"

describe("character info component", () => {
  let wrapper
  const character = {
    id: 1,
    name: "Bruce Wayne",
    alias: "Batman",
    bio: "The Batman",
    height: 6.1,
    weight: 176,
    gender: "male",
    eyeColor: "Brown",
    hairColor: "Brown",
    imgUrl: "www.batman.com",
    vote: 0,
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <CharacterInfo character={character} />
      </BrowserRouter>
    )
  })

  it("should contain an 'h3' with name and alias from props", () => {
    expect(wrapper.text().includes("Bruce Wayne (Batman)")).toBe(true)
  })

  it("should contain 'Popularity Results' with info from props", () => {
    expect(wrapper.text().includes("Popularity Results: 0")).toBe(true)
  })

  it("should contain height from props", () => {
    expect(wrapper.text().includes("Height: 6' 1\"")).toBe(true)
  })

  it("should contain weight from props", () => {
    expect(wrapper.text().includes("Weight: 176")).toBe(true)
  })

  it("should contain gender from props", () => {
    expect(wrapper.text().includes("Gender: male")).toBe(true)
  })

  it("should contain eye color from props", () => {
    expect(wrapper.text().includes("Eye Color: Brown")).toBe(true)
  })

  it("should contain hair color from props", () => {
    expect(wrapper.text().includes("Hair Color: Brown")).toBe(true)
  })

  it("should include bio from props", () => {
    expect(wrapper.text().includes("The Batman")).toBe(true)
  })
})
