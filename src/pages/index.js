import React from "react"
import Header from "../components/header";
import { Link } from 'gatsby';

export default () => (
  <div style={{ color: `purple`}}>
    <Header headerText='This in the index' />
    <Header headerText='This is more text' />
    <Link to="/about/">About Page</Link>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/200x200" alt="" />
  </div>

)