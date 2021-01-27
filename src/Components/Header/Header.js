import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
        {/* Navigation Option 1 | logo left with links on right 
            <nav className="nav">
                <h1 className="logo"><a href="/">LOGO</a></h1>
                <ul className="nav-list-items">
                    <li className="list-item"><a href="/about">About</a></li>
                    <li className="list-item"><a href="/blog">Blog</a></li>
                    <li className="list-item"><a href="/recipes">Recipes</a></li>
                    <li className="list-item"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
         */}

         {/* Navigation Option 2 | logo center with links  */}
            <nav className="nav2">
                <ul className="nav-list-items2">
                    <li className="list-item2"><a href="/about">About</a></li>
                    <li className="list-item2"><a href="/blog">Blog</a></li>
                    <li className="list-item2"><h1 className="logo2"><a href="/">LOGO</a></h1></li>
                    <li className="list-item2"><a href="/recipes">Recipes</a></li>
                    <li className="list-item2"><a href="/contact">Contact</a></li>
                </ul>
            </nav>

         {/* Navigation Option 3 | logo center with links below 
            <nav className="nav3">
                <h1 className="logo3"><a href="/">LOGO</a></h1>
                <ul className="nav-list-items3">
                    <li className="list-item3"><a href="/about">About</a></li>
                    <li className="list-item3"><a href="/blog">Blog</a></li>
                    <li className="list-item3"><a href="/recipes">Recipes</a></li>
                    <li className="list-item3"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
         */}
         
        </div>

    )
}

export default Header;