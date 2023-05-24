import React from "react"

function Link({ item, index, subIndexActivo, setSubIndexActivo }) {
    const active = (index == subIndexActivo) ? true : false
    const color = (active == true )? 'text-primary' : ''
    const handleClick = () => {
        setSubIndexActivo(index)
    }
    return (
        <li key={index} className="btn-hijo d-block">
            <button className={'btn ' + color} onClick={handleClick}>{item}</button>
        </li>
    )
}

export default Link