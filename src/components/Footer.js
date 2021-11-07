import React from 'react'
import { Button } from './Button';
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='newsletter-subscription'>
                <p className='newsletter-subscription-text'>
                    Subscribe for the best DIY projects
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email'
                        className='footer-input' />
                        <Button buttonStyle='btn--outline' >SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                    </div>
                    
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                        <Link to='/'>Who we are</Link>
                    </div>
                    
                </div>
                
            </div>
            <section className='social-media'>
                    <div className='social-media-wrapper'>
                        <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            DM
                        </Link>
                        </div>
                        <small className='website-rights'>DM © 2021</small>
                        <div className='social-icons'>
                            <Link to='/'
                            target='_blank'
                            aria-label='Facebook'
                            className='social-icon-link facebook'>
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                            <Link to='https://www.linkedin.com/in/dejan-malinov/' className='social-icon-link linkedin'>
                                <i className='fab fa-linkedin'></i>
                            </Link>
                            <Link to='/' className='social-icon-link instagram'>
                                <i className='fab fa-instagram'></i>
                            </Link>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Footer
