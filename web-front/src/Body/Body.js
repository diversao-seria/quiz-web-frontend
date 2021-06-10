import React from "react";
import Cadastro from "../Popups/Cadastro";
import "./Body.css";

class Body extends React.Component{
    render(){
        return(
            <div className="body">
                <Cadastro/>
            </div>
        );
    }
}

export default Body;