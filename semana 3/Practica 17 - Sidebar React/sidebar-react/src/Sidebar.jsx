import React from "react"
import { useState } from "react"
import List from './List'


function Sidebar(props){
    const [indiceActivo, setIndiceActivo] = useState(null)

    return (
        <div id="sidebar-container">
            <ul>
                {props.data.map((item, index) =>
                    <List 
                    key={index} 
                    index={index} 
                    item={item} 
                    indiceActivo={indiceActivo}
                    setIndiceActivo={setIndiceActivo}
                    />)
                }
            </ul>
        </div>
    )
}

export default Sidebar