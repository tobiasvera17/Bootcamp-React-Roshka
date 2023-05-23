import { useState } from "react"
import Link from "./Link"

function List(props) {
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
      };

    return (
        <li key={props.index} onClick={handleClick}>
            <p className="elemento-lista" style={{color: isActive ? 'red' : 'black'}}>{props.data.element}</p>
            
            <ul className="list-unstyled ps-0 ul-hijo" style={{display: isActive ? 'unset' : 'none',}}>
                {
                    props.data.subElements.map((item, index) => {
                        return <Link data={item} index={index}/> 
                    })
                }
            </ul>
        </li>
    )
}

export default List