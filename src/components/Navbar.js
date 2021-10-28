import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [ button, setButton ] = useState(true)

    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

    const showButon = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButon()
    }, []);

    window.addEventListener('resize', showButon)

    return (
        <div>
            <nav className="navbar">
               <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        DM
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <icon className={ click ? 'fas fa-times' : 'fas fa-bars' }/>
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={ closeMobileMenu }>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={ closeMobileMenu }>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/calculator' className='nav-links' onClick={ closeMobileMenu }>
                                Calculator App
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                Sign Up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-in' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    { button && <Button linkTo={'/sign-up'} buttonStyle='btn--outline' children={'SIGN UP'}/> }
                    { button && <Button linkTo={'/sign-in'} buttonStyle='btn--outline' children={'SIGN IN'}/> }

               </div>
            </nav>
        </div>
    )
}

export default Navbar
