import React from 'react';
import './Header.css';
import quizle_transp from "../Assets/quizle_transp.png";
class Header extends React.Component{
    render(){
        return(
                <div className="nav">
                    <img src={quizle_transp} alt="LOGO"></img>
                        <ul>
                           <li>
                                <a href="Início">Plataforma Quiz</a>
                            </li>
                            <li>
                                <a href="Meus quizzes">Meus Quizzes</a>
                            </li>
                        </ul>
                    <div className="logout">
                        <a href="Sair">Sair</a>
                    </div>
                </div>
        );
    }
}

export default Header;