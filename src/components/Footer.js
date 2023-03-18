import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="text">
                <p className="text">Made by</p>
                <p className="name"> Rohan Handore</p>
                <p className="text"> with ❤️</p>
            </div>
            <a href="https://rohanhandore.github.io/portfolio/" target="_blank" rel="noopener">
                <button className="cta-button">
                    <i className="fas fa-external-link-alt"></i>
                    Visit My Portfolio ↗️
                </button>
            </a>

            <div className="social-media-container">
                <a href="https://www.instagram.com/rohnn_1/?hl=en" target="_blank" rel="noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="https://twitter.com/Rohan_Handore_" target="_blank" rel="noreferrer">
                    <FaTwitter className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/rohan-handore-4786b3233/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com/RohanHandore" target="_blank" rel="noreferrer">
                    <FaGithub className="social-icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
