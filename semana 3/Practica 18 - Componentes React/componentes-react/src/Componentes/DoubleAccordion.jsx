import React from "react";
import { useState } from "react";
import Accordion from "./Accordion";

const DoubleAccordion = (props) => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    setSelected(index);
  };

  return (
    <>
      <div className="container p-0 m-0" id={"double-accordion-" + props.id}>
        <div className="row row-cols-2">
          {props.data.map((item, index) => {
            return (
              <>
                <div
                  className={"double-accordion-item" + index}
                  onClick={() => toggle(index)}
                >
                  <Accordion
                    data={item}
                    id={index}
                    active={selected == index ? true : false}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DoubleAccordion;
