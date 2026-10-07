import { usestate} from "react";

function Counter(){
    const [count,setCount]=useState(0);
    const handleIncrement =() =>{
        setCount(count+1);
    }
    const handleDecremnet=() =>{
        setCount(count-1);
        
    }

    return(
        <div>
            <h1> Counter Component</h1>
            <p> Count: {count}</p><br/>
            <button>+</button>
            <button>-</button>
        </div>
    )
}