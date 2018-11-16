import React from "react";
import Header from "../components/header";
import {Link} from "gatsby";

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText='This in the about' />
    <Link to="/">Home Page</Link>
    <p>Such wow. Very React.</p>
  </div>
)