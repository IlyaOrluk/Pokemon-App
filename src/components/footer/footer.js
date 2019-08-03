import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='follow-me'>
                <span>Follow me: <a href='https://github.com/IlyaOrluk'><i className="fab fa-github"></i>GitHub</a></span>    
            </div>
            <span>Designed and developed by Ilya Orluk ©2019</span>
        </div>
    );
};



export default Footer;
