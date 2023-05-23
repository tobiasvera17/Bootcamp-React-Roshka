import { useState } from "react"

function Link(props) {
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
      };

    return (
        <li key={props.index} className="mb-1" onClick={handleClick}>
            <a href="#" ><p className="elemento-lista" style={{color: isActive ? 'red' : 'black'}}>{props.data}</p></a>
        </li>
    )
}

export default Link