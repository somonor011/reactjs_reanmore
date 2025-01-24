
const myStyle = {
    color : "blue",
    fontSize : "30px"
}

const Greeting = () =>{
    return <>
        {/*<h1 style={{color: "red"}}>Hello sir</h1>*/}
        <h1 style={myStyle}>Hello sir</h1>
    </>
}

export default Greeting;