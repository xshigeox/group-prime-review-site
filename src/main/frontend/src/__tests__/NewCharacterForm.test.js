import React from "react"
import { BrowserRouter, Redirect } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import NewCharacterForm from "../../app/components/NewCharacterForm"
import Slider from "@material-ui/core/Slider"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"

describe("new character form", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <NewCharacterForm submitted={false} toHome={true} />
      </BrowserRouter>
    )
  })

  it("should contain an 'h1' tag that says 'Add a new Character'", () => {
    expect(wrapper.find("h1").text()).toEqual("Add a new Character")
  })

  it("should have a 'TextField' with id 'name'", () => {
    expect(wrapper.find(TextField).find("[id='name']").exists())
  })

  it("should have a 'TextField' with id 'alias'", () => {
    expect(wrapper.find(TextField).find("[id='alias']").exists())
  })

  it("should have a 'TextField' with id 'bio'", () => {
    expect(wrapper.find(TextField).find("[id='bio']").exists())
  })

  it("should have a 'Slider' with id 'durability'", () => {
    expect(wrapper.find(Slider).find("[id='durability']").exists())
  })

  it("should have a 'Slider' with id 'energy'", () => {
    expect(wrapper.find(Slider).find("[id='energy']").exists())
  })

  it("should have a 'Slider' with id 'fightingSkills'", () => {
    expect(wrapper.find(Slider).find("[id='fightingSkills']").exists())
  })

  it("should have a 'Slider' with id 'intelligence'", () => {
    expect(wrapper.find(Slider).find("[id='intelligence']").exists())
  })

  it("should have a 'Slider' with id 'speed'", () => {
    expect(wrapper.find(Slider).find("[id='speed']").exists())
  })

  it("should have a 'Slider' with id 'strength'", () => {
    expect(wrapper.find(Slider).find("[id='strength']").exists())
  })

  it("should have a 'TextField' with id 'height'", () => {
    expect(wrapper.find(Slider).find("[id='height']").exists())
  })

  it("should have a 'TextField' with id 'weight'", () => {
    expect(wrapper.find(Slider).find("[id='weight']").exists())
  })

  it("should have a 'Select' with id 'gender'", () => {
    expect(wrapper.find(Select).find("[id='gender']").exists())
  })

  it("should have a 'TextField' with id 'eyeColor'", () => {
    expect(wrapper.find(Slider).find("[id='eyeColor']").exists())
  })

  it("should have a 'TextField' with id 'hairColor'", () => {
    expect(wrapper.find(Slider).find("[id='hairColor']").exists())
  })

  it("should have a 'TextField' with id 'imgUrl'", () => {
    expect(wrapper.find(Slider).find("[id='imgUrl']").exists())
  })

  it("should redirect to '/' if 'toHome' is true", () => {
    expect(wrapper.find(Redirect).find("[to:'/']").exists())
  })
})
