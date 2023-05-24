import React from 'react'
import { useState } from 'react'

const Accordion = (props) => {
    const [selected, setSelected] = useState(null)

    const toggle = (index) => {
        if(selected== index) {
            return setSelected(null)
        }

        setSelected(index)
    }

  return (
    <>
    <div className="accordion" id={"accordion-" + props.id}>
        {
        props.data.map((item, index) => {
            return (
                <>
                <div className={"accordion-item" + index}>
                    <h2 className="accordion-header" id={"heading-" + index} onClick={() => toggle(index)}>
                    <button className={"accordion-button " + (selected == index && props.active == true ? "" : "collapsed")} type="button">
                        {item.title}
                    </button>
                    </h2>
                    <div id={"collapse-" + index} className={"accordion-collapse " + (selected == index && props.active == true ? "" : "collapse")}>
                        <div className="accordion-body">
                            {item.content}
                        </div>
                    </div>
                </div>
            </>
            )
        })
        }
    </div>
    </>
  )
}

export default Accordion