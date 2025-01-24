import myProfile from "../assets/songjinwoo.png"
import "./Poster.css";

const Poster = () =>{
    return <article>
        <img src={myProfile} alt="profile"/>
        <h2>Hong Somonor</h2>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitrtt
            sed diam nonumy
        </p>
    </article>
}

export default Poster