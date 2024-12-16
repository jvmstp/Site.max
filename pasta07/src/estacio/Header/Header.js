import React from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from './src/estil/estilo/livro-de-receitas.png';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
            </div>
            <div className="header__search">
                <img src={search} alt="Buscar"/>
                <input 
                    id="search-input" 
                    maxLength="800" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;