import React from "react";
import "../components/Button.css"

function Button(props){
    return <button className="button">{props.label}</button>

}

export default Button
