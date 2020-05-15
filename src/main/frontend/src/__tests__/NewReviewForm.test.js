import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NewReviewForm from "../../app/components/NewReviewForm"
import Slider from "@material-ui/core/Slider"
import TextField from "@material-ui/core/TextField"
import { BrowserRouter } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

describe("new review form", () => {
  let wrapper
  const character = {
    name: "Mike",
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <NewReviewForm formReveal={true} character={character} />
      </BrowserRouter>
    )
  })

  it("should have a 'Slider' with id 'rating'", () => {
    expect(wrapper.find(Slider).find("[id='rating']").exists())
  })

  it("should have a 'TextField' with id 'review'", () => {
    expect(wrapper.find(TextField).find("[id='review']").exists())
  })

  it("should contain a 'submit' input", () => {
    expect(wrapper.find("input").find("[type='submit']").exists())
  })
})
