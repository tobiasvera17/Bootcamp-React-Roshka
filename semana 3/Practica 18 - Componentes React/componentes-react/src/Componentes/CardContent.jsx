import React from "react";

const CardContent = (props) => {
  return (
    <div className="content-card-container container p-0 mb-2">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default CardContent;
