import React from 'react';
import './Header.css';
import brainlogo from "../Assets/brainlogo.png";
class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <p>
                        <img src={brainlogo} alt="LOGO"></img>
                    </p>
                    <ul>
                        <li><a href="Início">Início</a></li>
                        <li><a href="Explorar">Explorar</a></li>
                    </ul>
                    <div className="logout">
                        <li><a href="Sair">Sair</a></li>
                    </div>

                </nav>
            </header>
        );
    }
}

export default Header;