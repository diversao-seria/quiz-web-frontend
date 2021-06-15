import React from "react";
import Popup from "reactjs-popup";
import "./Cadastro.css";
import close from '../Assets/close.png';

class Cadastro extends React.Component{
    constructor(){
        super();
        this.state={
            title:"Bem Vindo",
        };
    }

    render(){
        setTimeout(() => {this.setState({title: "Bem Vindo!"})},1000);
        return(
            <div className="cadastro">
                <div className="container">
                    <Popup/>
                    <h1>POP UP</h1>
                    <a href="#" class="button">Login</a>
                </div>   
                <div className="popup">
                    <div className="popup-content">
                        <img src={close} alt="close" class="close"></img>
                    <h1>{this.state.title}</h1>
                    <h2>Faça login na plataforma </h2>
                        <label for="email">Insira seu endereço de e-mail:</label>
                            <br></br>
                            <input type="text" id="email" name="email" placeholder="Endereço de E-mail"/>
                            <br></br>
                        <label for="password">Insira uma senha:</label>
                            <br></br>
                            <input type="text" id="password" name="password" placeholder="Senha secreta"/>
                            <br></br>
                        <a href="#" class="button">Login</a>
                    <div className="redirects">
                        <br></br>
                            <a href="#">Esqueci minha senha</a>
                        <br></br>
                            <a href="#">Cadastre-se</a>
                    </div>
                    </div>
                </div>      
            </div>
        );
    }
}
export default Cadastro;