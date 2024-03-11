import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=> <h1>Hello I'm Aruna here!</h1>

const Container = () =>{
    return(
        <div>
            <Title/>
            <h1>It's Achyu's mom 🐰 </h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>)