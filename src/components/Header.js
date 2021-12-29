import React from 'react';
import { withRouter, useLocation, Link } from 'react-router-dom';
import logo from "../images/logo.svg";

function Header(props) {
    const { pathname  } = useLocation()

    const linkPath = `${pathname  === "/sign-up" ? "/sign-in" : "/sign-up"}`
    const linkName = `${ pathname  === '/sign-up' ? 'Войти' : 'Регистрация'}` 

    function signOut() {
        props.setIsLoggedIn(false)
        localStorage.removeItem('token')
        props.history.push('/sign-in')
    }
    
    return(
        <header className="header">
            <img src={logo} className="header__logo" alt="Логотип"/>
                {props.isLoggedIn ?
                    
                    <nav className='header__nav'>
                        <p className='header__nav header__mail'>{props.email}</p>
                        <Link to='' className='header__nav header__toggling-link' type='button' onClick={signOut}>Выйти</Link>
                    </nav>
                   
                     : (<Link to={linkPath} className='header__nav header__toggling-link' type='button'>{linkName}</Link>)
                }

        </header>
    )
    
}

export default withRouter(Header)