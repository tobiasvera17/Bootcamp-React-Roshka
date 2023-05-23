import { useState } from "react"
import List from './List'
import Link from './Link'
import './sidebar.css'
function Sidebar(props){
    return (
        <div className="container" id="sidebar-container">
            <ul className="list-unstyled ps-0">
                {
                    props.data.map((item, index) => {
                        if(item.subElements.length > 0){
                            return ( 
                                <List data={item} index={index}/>
                                )
                            }
                            else {
                                return <Link data={item.element} index={index}/>
                            }
                        })
                    }
            </ul>
        </div>
    )
}

export default Sidebar