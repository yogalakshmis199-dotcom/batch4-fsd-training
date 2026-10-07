import {useState} from "react";
import cars from '../cars.jpg';

function LikesDislikes(){
    const[likes,setlikes]=useState(0);
    const[dislikes,setdislikes]=useState(0);
   return(
    <div>
        <h1>Likes & Dislikes Componentt</h1>
        <image src={cars}/><br/>
        <button>Like</button>&nbsp;&nbsp;&nbsp;
        <button>Dislike</button><br/>
        <p>Likes : {}.Dislike :{}.</p>
    </div>
   )
}
export default LikesDislikes;