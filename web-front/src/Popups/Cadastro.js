import React from "react";
import "./Cadastro.css";

class Cadastro extends React.Component{

    render(){
        return(
            <div className="cadastro">
                <div className="container">
                    <a href="#" class="button">Login</a>
                </div>   
                <div className="popup">
                    <div className="popup-content">
                        <img src="./Assets/close.png" alt="close" class="close"></img>
                    <h1>Seja bem vindo</h1>
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