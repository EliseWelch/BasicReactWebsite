import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h4 className="copyright">© 2020 Basic React App</h4>
            <p className="footer-line">|</p>
            <ul className="footer-list">
                <li className="footer-item"><a href="/link">ONE</a></li>
                <li className="footer-item"><a href="/link">TWO</a></li>
                <li className="footer-item"><a href="/link">THREE</a></li>
            </ul>
        </div>
    )
}

export default Footer;