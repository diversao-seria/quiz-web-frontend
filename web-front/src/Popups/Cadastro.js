import React from "react";
import "./Cadastro.css";
import close from '../Assets/close.png';

class Cadastro extends React.Component{
    constructor(){
        super();
        this.state={
            title:"Olá",
        };
    }
    render(){
        setTimeout(() => {this.setState({title: "Bem Vindo!"})},1000);

        return(
            <div className="container">
                <div className="popup">
                    <div className="popup-content">
                        <img src={close} alt="close" class="close"></img>
                        <h1>{this.state.title}</h1>
                        <h2>Faça login na plataforma </h2>
                            <br></br>
                            <label for="email">Insira seu endereço de e-mail:</label>
                            <br></br>
                                <input type="text" id="email" name="email" placeholder="Endereço de E-mail"/>
                            <br></br>
                            <label for="password">Insira uma senha:</label>
                            <br></br>
                                <input type="text" id="password" name="password" placeholder="Senha secreta"/>
                            <br></br>
                            <button class="button" onclick="setLogin()">Login</button>
                        <div>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="redirects">
                            <div>
                                <a href="#">Esqueci minha senha</a>
                            </div>
                                <h2>ou</h2>
                            <div>
                                <a href="#">Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        );
    }
}
export default Cadastro;