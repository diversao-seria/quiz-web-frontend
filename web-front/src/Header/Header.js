import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><a><img src="1.png" alt="LOGO"></img></a></li>
                        <li><a href="Início">Início</a></li>
                        <li><a href="Explorar">Explorar</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;