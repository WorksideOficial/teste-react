import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";


export const Header = () => {

    return(
        <div className="header">
            <div className="logo">
                <h2>ReactNews</h2>
            </div>
            
            <div className="menu">
                <ul>
                <li> <Link to="/"><span>Cadastrar Noticias</span></Link></li>
                <li> <Link to="/pesquisa"><span>Pesquisar Noticias</span></Link></li>
                <li><Link to="/listar"><span>Listar Noticias</span></Link></li>
                </ul>
            </div>
        </div>
    );
}