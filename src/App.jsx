import Greeting from "./components/Greeting.jsx";
import Job from "./components/Job.jsx";
import Message from "./components/Message.jsx";
import "./App.css";

const App = () => {
    return <div className="container">
        <Greeting/>
        <Job/>
        <Message/>
    </div>;
}

// function Greeting (){
//     return <h2>Hello</h2>
// }
//
// function Job (){
//     return <h3>I am a teacher</h3>
// }
//
// function Message() {
//     return <h4>Lorem ipsum dolor sit amet, consetetur sadipsc</h4>
// }

export default App;