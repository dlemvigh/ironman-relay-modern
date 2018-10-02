import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

it("renders without crashing", () => {
  shallow(<Footer />);
})

it("matches snapshot", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
})