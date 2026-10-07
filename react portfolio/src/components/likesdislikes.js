import {useState} from "react";
import image from '..dog.jpg';

function LikesDislikes(){
    const[likes,setLikes]=useState(0);
    const[dislikes,setDislikes]=useState(0);
    const HandleLike =() =>{
        setCount(like+1);
    }
    const HandleDisliket=() =>{
        setCount(like-1);
        
    }

    return (
        <div>
            <h1>Profile Component</h1>
            <img src={dog}/> <br/>
            <button onClick> Like</button>&nbsp;&nbsp;&nbsp;
            <button onClick>Dislike</button> <br/>
            <p> Likes:{}.Dislikes:{}.</p>
        </div>
    )
}
export default LikesDislikes;