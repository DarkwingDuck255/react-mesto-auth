import React from 'react';
import logo from "../images/logo.svg";

export default function Header() {
    return(
        <header className="header">
            <img src={logo} className="header__logo" alt="Логотип"/>
        </header>

        )
}