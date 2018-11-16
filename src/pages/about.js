import React from "react";
import Header from "../components/header";
import {Link} from "gatsby";

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText='I am changing this' />
    <Link to="/">Home Page</Link>
    <p>Such wow. Very React.</p>
    <p>Does this work?</p>
  </div>
)