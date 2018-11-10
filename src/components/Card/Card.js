import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  
  </div>


export default Card;
