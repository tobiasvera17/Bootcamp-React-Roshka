import React from "react";
import { useState } from "react";
import CardImg from "./CardImg";
import CardContent from "./CardContent";
import CardButtons from "./CardButtons";
import CardDate from "./CardDate";
import CardLinks from "./CardLinks";

const Card = (props) => {
  return (
    <div
      className="card-container container-sm d-flex flex-column justify-content-start align-items-start container-card p-0 m-0 border rounded bg-light"
      id={"card-" + props.id}
    >
      <div className="container-fluid p-2">
        <CardImg imgSrc={props.imgSrc} />
        <CardContent title={props.title} content={props.content} />
        <CardButtons buttons={props.buttons} />
        <CardDate date={props.date} />
        <CardLinks rLink={props.rLink} downloadLink={props.downloadLink} />
      </div>
    </div>
  );
};

export default Card;
