import React from 'react'
import { useState } from 'react'

const MultiAccordionItem = (props) => {
    const [selected, setSelected] = useState(null)
    
    const toggle = (index) => {
        if(selected == props.index) {
            return setSelected(null)
        }
        setSelected(props.index)
    }
     
    return (
        <>
            <div className={"accordion-item" + props.index}>
                <h2 className="accordion-header" id={"heading-" + props.index} onClick={() => toggle(props.index)}>
                <button className={"accordion-button " + (selected == props.index ? "" : "collapsed")} type="button">
                    {props.data.title}
                </button>
                </h2>
                <div id={"collapse-" + props.index} className={"accordion-collapse " + (selected == props.index ? "" : "collapse")}>
                    <div className="accordion-body d-flex">
                        <div className='multi-accordion-body-content'>
                            {props.data.content}
                        </div>
                        <div className='multi-accordion-body-img text-center'>
                            <img src={props.data.imgSrc} className="img-fluid" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MultiAccordionItem