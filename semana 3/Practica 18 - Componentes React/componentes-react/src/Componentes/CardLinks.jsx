import React from "react";

const CardLinks = (props) => {
  return (
    <div className="links-card-container d-flex flex-column container mb-2 p-0">
      <a href={props.rLink} className="fw-bold text-danger">
        {"READ REPORT >>"}
      </a>
      <a href={props.downloadLink} className="fw-bold text-danger">
        {"DOWNLOAD REPORT >>"}
      </a>
    </div>
  );
};

export default CardLinks;
