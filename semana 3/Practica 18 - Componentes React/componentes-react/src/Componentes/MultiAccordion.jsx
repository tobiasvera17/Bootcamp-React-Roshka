import React from 'react'
import { useState } from 'react'
import MultiAccordionItem from './MultiAccordionItem'

const MultiAccordion = (props) => {
    const [selected, setSelected] = useState(null)

    const toggle = (index) => {
        if(selected== index) {
            return setSelected(null)
        }

        setSelected(index)
    }

  return (
    <>
    <div className="container p-0 m-0" id={"multi-accordion-" + props.id}>
        <div className='accordion'>
            {
                props.data.map((item, index) => {
                    console.log(item)
                    return <MultiAccordionItem data={item} index={index} />
                })
            }
        </div>
    </div>
    </>
  )
}

export default MultiAccordion